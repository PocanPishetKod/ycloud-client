import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { InvalidStatusCodeError } from "src/modules/core/errors/invalidStatusCodeError";
import { IDirectory } from "src/modules/core/models/api/directory";
import { IDrive } from "src/modules/core/models/api/drive";
import { IFile } from "src/modules/core/models/api/file";
import { IFileSystemElement } from "src/modules/core/models/api/fileSystemElement";
import { IDirectoryItem } from "src/modules/core/models/components/directoryItem";
import { DirectoryApiService } from "src/modules/core/services/api/directoryApi.service";
import { DriveApiService } from "src/modules/core/services/api/driveApi.service";
import { StatusCodesHandlerService } from "src/modules/core/services/api/statusCodesHandler.service";
import { AssetPathProvider } from "src/modules/core/services/assets/assets-path-provider.service";
import { ErrorHandlerService } from "src/modules/core/services/errors/errorHandlerService";
import { RouterService } from "src/modules/core/services/routing/router.service";
import { CreateDirectoryModalComponent } from "../create-directory-modal/create-directory-modal.component";
import { UrlParameters } from "./urlParameters";

@Component({
    selector: "directory",
    templateUrl: "./directory.component.html",
    styleUrls: ["directory.component.css"]
})
export class DirectoryComponent implements OnInit, OnDestroy {
    private _paramsSubscription: Subscription;

    public directory: IDirectory;
    public selectedItems: IDirectoryItem[];

    constructor(private _directoryApiService: DirectoryApiService,
        private _driveApiService: DriveApiService,
        private _errorHandlerService: ErrorHandlerService,
        private _activatedRoute: ActivatedRoute,
        private _routerService: RouterService,
        private _statusCodesHandlerService: StatusCodesHandlerService,
        private _dialog: MatDialog,
        private _assetPathProvider: AssetPathProvider) {
        this.directory = { } as IDirectory;
        this.selectedItems = [];
        this.testInit();
        this._paramsSubscription = this.subscribeOnUrlParams();
    }

    private testInit(): void {
        this.directory.directories = [
            { id: "aafsg", name: "dir1", size: 0 } as IDirectory,
            { id: "aafsg", name: "dir1346dg", size: 0 } as IDirectory,
            { id: "aafsg", name: "dir1sdsddkfjnlsnjkvildfnsdjnbkjdsfnbjdsnbjndsbjnjbnfkjbnjgsbnjknbkdsjbnjdfnbjkdfgnbdnldfhsdf4", size: 0 } as IDirectory
        ];

        this.directory.files = [
            { id: "aafsg", name: "dir1", size: 0 } as IFile,
            { id: "aafsg", name: "dir1", size: 0 } as IFile,
            { id: "aafsg", name: "dir1", size: 0 } as IFile,
            { id: "aafsg", name: "dir1", size: 0 } as IFile
        ];
    }

    private subscribeOnUrlParams(): Subscription {
        return this._activatedRoute.params.subscribe(params => {
            //this.loadDirectory(new UrlParameters(params));
        });
    }

    private unsubscribeUrlParams(): void {
        if (!this._paramsSubscription) {
            return;
        }

        this._paramsSubscription.unsubscribe();
    }

    private async loadDirectory(urlParameters: UrlParameters): Promise<void> {
        try {
            if (!urlParameters.id) {
                let drive = await this._driveApiService.get();
                this._routerService.goToDirectory(drive.rootDirectoryId);

                return;
            }

            this.directory = await this._directoryApiService
                .getById(urlParameters.id);
        }
        catch (error: any) {
            this._errorHandlerService.handleError(error);
        }
    }

    private async createDirectory(directoryName: string): Promise<void> {
        let newDirectory = await this._directoryApiService
            .create({ 
                directoryName: directoryName,
                targetDirectoryId: this.directory?.id as string,
                driveId: ""
            });

        this.directory.directories.push(newDirectory);
    }

    public getElements(): IDirectoryItem[] {
        let result: IDirectoryItem[] = [];

        this.directory
            .directories?.forEach(d => result.push({ 
                fileSystemElement: d,
                icon: this._assetPathProvider.getDirectoryPngPath()
            }));
        this.directory.files?.forEach(f => result.push({
            fileSystemElement: f,
            icon: this._assetPathProvider.getFilePngPath()
        }));

        return result;
    }

    public showCreateDirectory(): void {
        let dialogRef = this._dialog.open(CreateDirectoryModalComponent);

        dialogRef.afterClosed().subscribe(async (directoryName: string) => {
            if (!directoryName) {
                return;
            }

            await this.createDirectory(directoryName);
        });
    }

    public showLoadFiles(): void {
        let loadFileInput = document.getElementById("loadFiles");
        loadFileInput?.click();
    }

    public selectItem(directoryItem: IDirectoryItem): void {
        let allowSelectedItemIndex = this.selectedItems.indexOf(directoryItem);
        if (allowSelectedItemIndex >= 0) {
            this.selectedItems.splice(allowSelectedItemIndex, 1);
        }
        else {
            this.selectedItems.push(directoryItem);
        }
    }

    public toolbarOpen(): void {
        
    }

    public toolbarClose(): void {

    }

    public filesSelected(event: Event): void {
        let input = event.target as HTMLInputElement;
    }
    
    ngOnDestroy(): void {
        this.unsubscribeUrlParams();
    }

    ngOnInit(): void {

    }
}