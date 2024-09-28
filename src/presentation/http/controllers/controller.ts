import { IHttpRequest } from "../helpers/IhttpRequest";
import { IhttpResponse } from "../helpers/IhttpResponse";

export interface IController {
    handle(request: IHttpRequest): Promise<IhttpResponse>;
}