import { NgModule } from "@angular/core";
import { DirectoryComponent } from "./components/directory/directory.component";

@NgModule({
    declarations: [
        DirectoryComponent
    ],
    exports: [
        DirectoryComponent
    ]
})
export class DriveModule {
    
}