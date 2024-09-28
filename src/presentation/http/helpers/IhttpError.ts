import { IhttpResponse } from "./IhttpResponse";

export interface IhttpError {
    error404(): IhttpResponse;
    error500(): IhttpResponse;
    error401(): IhttpResponse;
    error403(): IhttpResponse;
    error400(): IhttpResponse;
    error422(): IhttpResponse;
}
    