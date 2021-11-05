import { Injectable } from "@angular/core";
import { IFileSystemElement } from "../../models/api/fileSystemElement";

const filePng = "/assets/file.png";
const directoryPng = "/assets/directory.png";

@Injectable({
    providedIn: "root"
})
export class AssetPathProvider {
    public getFilePngPath(): string {
        return filePng;
    }

    public getDirectoryPngPath(): string {
        return directoryPng;
    }
}