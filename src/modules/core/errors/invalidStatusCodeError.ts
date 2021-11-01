import { HttpResponse, HttpResponseBase } from "@angular/common/http";

export class InvalidStatusCodeError extends Error {
    public readonly response: HttpResponseBase;

    constructor(response: HttpResponseBase) {
        super();
        this.response = response;
    }
}