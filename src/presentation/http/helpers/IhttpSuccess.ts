import { IhttpResponse } from "./IhttpResponse";

export interface IhttpSuccess {
    success200(body: any): IhttpResponse;
    success201(body: any): IhttpResponse;
    success204(): IhttpResponse;
}