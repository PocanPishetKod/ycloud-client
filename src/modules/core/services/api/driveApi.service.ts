import { Injectable } from "@angular/core";
import { IDrive } from "../../models/api/drive";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";
import { HttpClientWrapper } from "../http/http-client-wrapper.service";
import { ApiBase } from "./apiBase";

const Uri: string = "/drive";

@Injectable({
    providedIn: "root"
})
export class DriveApiService extends ApiBase {
    private readonly _configuration: Configuration;

    constructor(private _httpClientWrapper: HttpClientWrapper,
        configurationProvider: ConfigurationProvider) {
            super();
            this._configuration = configurationProvider.provide();
    }

    public async get(): Promise<IDrive> {
        let response = await this._httpClientWrapper
            .get<IDrive>(`${this._configuration.api}${Uri}`);

        this.throwIfNoSucceeded(response);

        return response.body as IDrive;
    }
}