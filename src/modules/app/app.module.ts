import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { DriveModule } from '../drive/drive.module';

import { AppComponent } from './app.component';
import { RoutesProvider } from '../core/services/routing/routes-provider';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot(RoutesProvider.provide()),
        BrowserModule,
        RouterModule,
        AuthModule,
        DriveModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
