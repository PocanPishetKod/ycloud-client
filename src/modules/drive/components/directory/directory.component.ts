import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { InvalidStatusCodeError } from "src/modules/core/errors/invalidStatusCodeError";
import { IDirectory } from "src/modules/core/models/api/directory";
import { IDrive } from "src/modules/core/models/api/drive";
import { DirectoryApiService } from "src/modules/core/services/api/directoryApi.service";
import { DriveApiService } from "src/modules/core/services/api/driveApi.service";
import { StatusCodesHandlerService } from "src/modules/core/services/api/statusCodesHandler.service";
import { ErrorHandlerService } from "src/modules/core/services/errors/errorHandlerService";
import { RouterService } from "src/modules/core/services/routing/router.service";
import { UrlParameters } from "./urlParameters";

@Component({
    selector: "directory",
    templateUrl: "./directory.component.html"
})
export class DirectoryComponent implements OnInit, OnDestroy {
    private _paramsSubscription: Subscription;

    public directory: IDirectory | null;

    constructor(private _directoryApiService: DirectoryApiService,
        private _driveApiService: DriveApiService,
        private _errorHandlerService: ErrorHandlerService,
        private _activatedRoute: ActivatedRoute,
        private _routerService: RouterService,
        private _statusCodesHandlerService: StatusCodesHandlerService) {
        this.directory = null;
        this._paramsSubscription = this.subscribeOnUrlParams();
    }

    private subscribeOnUrlParams(): Subscription {
        return this._activatedRoute.params.subscribe(params => {
            this.loadDirectory(new UrlParameters(params));
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
    
    ngOnDestroy(): void {
        this.unsubscribeUrlParams();
    }

    ngOnInit(): void {

    }
}