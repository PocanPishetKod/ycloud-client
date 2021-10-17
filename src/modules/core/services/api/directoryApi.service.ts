import { HttpResponseBase } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ArgumentNullError } from "../../errors/argumentNullError";
import { InvalidStatusCodeError } from "../../errors/invalidStatusCodeError";
import { IDirectory } from "../../models/api/directory";
import { ICreateDirectoryQuery } from "../../models/api/queries/createDirectoryQuery";
import { Configuration } from "../configuration/configuration";
import { ConfigurationProvider } from "../configuration/configuration.provider";
import { HttpClientWrapper } from "../http/http-client-wrapper.service";
import { StatusCodesHandlerService } from "./statusCodesHandler.service";

const Uri: string = "/directory";

@Injectable({
    providedIn: "root"
})
export class DirectoryApiService {
    private readonly _configuration: Configuration;

    constructor(private _httpClientWrapper: HttpClientWrapper,
        configurationProvider: ConfigurationProvider,
        private _statusCodesHandlerService: StatusCodesHandlerService) {
            this._configuration = configurationProvider.provide();
    }

    private throwIfNoSucceeded(response: HttpResponseBase): void {
        if (response.ok) {
            return;
        }

        this._statusCodesHandlerService.handle(response);
        throw new InvalidStatusCodeError();
    }

    public async getById(id: string): Promise<IDirectory> {
        if (id == null || undefined) {
            throw new ArgumentNullError("id");
        }

        let response = await this._httpClientWrapper
            .get<IDirectory>(`${this._configuration.api}${Uri}/${id}`);
        
        this.throwIfNoSucceeded(response);

        return response.body as IDirectory;
    }

    public async create(query: ICreateDirectoryQuery): Promise<IDirectory> {
        if (query == null || query == undefined) {
            throw new ArgumentNullError("query");
        }

        let response = await this._httpClientWrapper
            .post<IDirectory>(`${this._configuration.api}${Uri}`, query);

        this.throwIfNoSucceeded(response);

        return response.body as IDirectory;
    }

    public async delete(id: string, driveId: string): Promise<void> {
        if (id == null || id == undefined) {
            throw new ArgumentNullError("id");
        }

        if (driveId == null || driveId == undefined) {
            throw new ArgumentNullError("driveId");
        }

        let response = await this._httpClientWrapper
            .delete(`${this._configuration.api}${Uri}/${id}/${driveId}`);
        
        this.throwIfNoSucceeded(response);
    }
}