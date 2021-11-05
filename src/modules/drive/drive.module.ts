import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { DirectoryComponent } from "./components/directory/directory.component";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CreateDirectoryModalComponent } from "./components/create-directory-modal/create-directory-modal.component";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { DirectoryItemToolbarComponent } from "./components/directory-item-toolbar/directory-item-toolbar.component";

@NgModule({
    imports: [
        MatIconModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule
    ],
    declarations: [
        DirectoryComponent,
        CreateDirectoryModalComponent,
        DirectoryItemToolbarComponent
    ],
    exports: [
        DirectoryComponent,
        CreateDirectoryModalComponent,
        DirectoryItemToolbarComponent
    ]
})
export class DriveModule {
    
}