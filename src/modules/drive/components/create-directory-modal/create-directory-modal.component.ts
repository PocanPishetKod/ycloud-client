import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: "./create-directory-modal.component.html"
})
export class CreateDirectoryModalComponent {
    public directoryName: string;

    constructor(private _dialogRef: MatDialogRef<CreateDirectoryModalComponent>) {
        this.directoryName = "";
    }

    public close(): void {
        this._dialogRef.close();
    }

    public save(): void {
        if (this.directoryName == "") {
            return;
        }
        
        this._dialogRef.close(this.directoryName);
    }
}