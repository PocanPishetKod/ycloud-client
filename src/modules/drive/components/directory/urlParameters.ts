import { Params } from "@angular/router";

export class UrlParameters {
    public static readonly id: string = "id";

    public readonly id: string | null | undefined;

    constructor(params: Params) {
        this.id = params[UrlParameters.id];
    }
}