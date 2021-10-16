import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthServiceWrapper } from "src/modules/core/services/auth/auth-wrapper.service";
import { RouterService } from "src/modules/core/services/routing/router.service";

const CodeQueryParam: string = "code";

@Component({
    templateUrl: "./signin-redirect.component.html"
})
export class SignInRedirectComponent implements OnInit {
    
    constructor(private _authServiceWrapper: AuthServiceWrapper,
        private _activatedRoute: ActivatedRoute,
        private _routerService: RouterService) {

    }

    public ngOnInit(): void {
        this._activatedRoute.queryParams.subscribe(async params => {
            let code = params[CodeQueryParam];
            if (!code) {
                throw new Error("Code param is null");
            }

            await this._authServiceWrapper.endAuthentication(code);
            this._routerService.goToDirectory();
        });
    }
}