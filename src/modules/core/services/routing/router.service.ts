import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { RoutesProvider } from "./routes-provider";

@Injectable({
    providedIn: "root"
})
export class RouterService {

    constructor(private _router: Router) {

    }

    private goTo(url: string): void {
        this._router.navigate([url]);
    }

    public goToDirectory(id?: string): void {
        if (id == null || id == undefined){
            this.goTo(`/${RoutesProvider.directory}`);
        }
        else {
            this.goTo(`/${RoutesProvider.directory}/${id}`);
        }
    }
}