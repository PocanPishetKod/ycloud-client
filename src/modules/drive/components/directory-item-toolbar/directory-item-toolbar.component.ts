import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IDirectoryItem } from "src/modules/core/models/components/directoryItem";

@Component({
    selector: "directory-item-toolbar",
    templateUrl: "directory-item-toolbar.component.html"
})
export class DirectoryItemToolbarComponent {
    @Input() directoryItems: IDirectoryItem[] = [];
    @Output() onCloseButtonClicked = new EventEmitter();

    public close(): void {
        this.onCloseButtonClicked.emit();
    }
}