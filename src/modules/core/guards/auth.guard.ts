import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceWrapper } from "../services/auth/auth-wrapper.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(private _authServiceWrapper: AuthServiceWrapper) {

    }

    public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
        let token = await this._authServiceWrapper.getToken();
        
        if (token) {
            return true;
        }

        await this._authServiceWrapper.startAuthentication();
        return false;
    }

}