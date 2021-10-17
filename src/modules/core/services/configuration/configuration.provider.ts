import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Configuration } from "./configuration";

@Injectable({
    providedIn: "root"
})
export class ConfigurationProvider {
    public provide(): Configuration {
        return new Configuration(environment.authority, environment.scope,
            environment.clientId, environment.redirectUri,
            environment.postLogoutRedirectUri, environment.api,
            environment.production);
    }
}