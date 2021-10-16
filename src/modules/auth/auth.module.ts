import { NgModule } from "@angular/core";
import { SignInRedirectComponent } from "./components/signin-redirect/signin-redirect.component";

@NgModule({
    declarations: [
        SignInRedirectComponent
    ],
    exports: [
        SignInRedirectComponent
    ]
})
export class AuthModule {

}