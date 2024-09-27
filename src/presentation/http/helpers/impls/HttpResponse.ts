import { IhttpResponse } from "../IhttpResponse";

export class HttpResponse implements IhttpResponse {
    statusCode: number;
    body: any;

    constructor(statusCode: number, body: any) {
        this.statusCode = statusCode;
        this.body = body;
    }
}