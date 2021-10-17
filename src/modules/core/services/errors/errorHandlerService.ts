import { Injectable } from "@angular/core";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";

@Injectable({
    providedIn: "root"
})
export class ErrorHandlerService {
    private readonly _configuration: Configuration;

    constructor(configurationProvider: ConfigurationProvider) {
        this._configuration = configurationProvider.provide();
    }

    public handleError(error: Error): void {
        if (this._configuration.production) {
            return;
        }

        console.log(error);
    }
}