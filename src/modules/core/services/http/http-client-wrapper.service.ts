import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthServiceWrapper } from "../auth/auth-wrapper.service";

@Injectable({
    providedIn: "root"
})
export class HttpClientWrapper {
    constructor(private _httpClient: HttpClient,
        private _authServiceWrapper: AuthServiceWrapper) {

    }

    private async getDefaultHeaders(): Promise<HttpHeaders> {
        let result = new HttpHeaders();
        let token = await this._authServiceWrapper.getToken();
        if (token) {
            result = result.append("Bearer", token);
        }

        return result;
    }

    public async get<T>(url: string): Promise<T> {
        return await this._httpClient
            .get<T>(url, { headers: await this.getDefaultHeaders() })
            .toPromise();
    }

    public async post<T>(url: string, data: any): Promise<T> {
        return await this._httpClient
            .post<T>(url, data, { headers: await this.getDefaultHeaders() })
            .toPromise();
    }
}