import { IHttpRequest } from "../IhttpRequest";

export class HttpRequest implements IHttpRequest {
    body: unknown;
    header: unknown;
    query: unknown;
    params: unknown;
    path: unknown;

    constructor({ body, header, query, params, path }: HttpRequest) {
        this.body = body;
        this.header = header;
        this.query = query;
        this.params = params;
        this.path = path;
    }
}