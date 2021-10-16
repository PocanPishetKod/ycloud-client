import { Injectable } from "@angular/core";
import { AuthConfiguration, AuthService } from "yhome-auth";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";

@Injectable({
    providedIn: "root"
})
export class AuthServiceWrapper {
    private readonly _authService: AuthService;
    private readonly _configuration: Configuration;
    private _token: string | null;

    constructor(configurationProvider: ConfigurationProvider) {
        this._configuration = configurationProvider.provide();
        this._authService = new AuthService(
            new AuthConfiguration(
                this._configuration.clientId,
                this._configuration.scope, 
                this._configuration.redirectUri, 
                this._configuration.authority));

        this._token = null;
    }

    public async startAuthentication(): Promise<void> {
        await this._authService.startAuthentication();
    }

    public async endAuthentication(code: string): Promise<void> {
        this._token = await this._authService.endAuthentication(code);
    }

    public async getToken(): Promise<string> {
        return this._token ? this._token : await this._authService.getToken();
    }
}