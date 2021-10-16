import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { DriveModule } from '../drive/drive.module';

import { AppComponent } from './app.component';
import { RoutesProvider } from '../core/services/routing/routes-provider';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(RoutesProvider.provide()),
        BrowserModule,
        RouterModule,
        AuthModule,
        DriveModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
