import { Routes } from "@angular/router";
import { SignInRedirectComponent } from "../../../auth/components/signin-redirect/signin-redirect.component";
import { AuthGuard } from "../../guards/auth.guard";
import { DirectoryComponent } from "../../../drive/components/directory/directory.component";

export class RoutesProvider {
    public static readonly baseUri: string = "";
    public static readonly directory: string = "drive/directory";
    public static readonly signInRedirect: string = "signin/redirect"

    public static provide(): Routes {
        return [
            { path: this.baseUri, redirectTo: `/${this.directory}`, pathMatch: "full" },
            { path: this.signInRedirect, component: SignInRedirectComponent },
            { path: this.directory, component: DirectoryComponent, /*canActivate: [AuthGuard]*/ }
        ];
    }
}