import { HttpResponseBase } from "@angular/common/http";
import { InvalidStatusCodeError } from "../../errors/invalidStatusCodeError";
import { StatusCodesHandlerService } from "./statusCodesHandler.service";

export abstract class ApiBase {
    constructor() {

    }

    protected throwIfNoSucceeded(response: HttpResponseBase): void {
        if (response.ok) {
            return;
        }

        throw new InvalidStatusCodeError(response);
    }
} 