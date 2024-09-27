import { IhttpResponse } from "./IhttpResponse";

export interface IhttpError {
    error404(): IhttpResponse;
    error500(error: Error): IhttpResponse;
    error401(): IhttpResponse;
    error403(): IhttpResponse;
    error400(error: Error): IhttpResponse;
}
    