import { IHttpRequest } from "../IhttpRequest";

export class HttpRequest implements IHttpRequest {
    body: unknown;
    header: unknown;
    query: unknown;
    params: unknown;
    user: unknown;

    constructor({ body, header, query, params, user }: HttpRequest) {
        this.body = body;
        this.header = header;
        this.query = query;
        this.params = params;
        this.user = user;
    }
}