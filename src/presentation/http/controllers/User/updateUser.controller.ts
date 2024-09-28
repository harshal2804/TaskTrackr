import { IUpdateUserUseCase } from "../../../../application/usecases/user/UpdateUser";
import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IhttpError } from "../../helpers/IhttpError";
import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IController } from "../controller";

export class UpdateUserController implements IController {
    constructor(
      private updateUserUseCase: IUpdateUserUseCase,
      private httpErrors: IhttpError = new HttpError(),
      private httpSuccess: IhttpSuccess = new HttpSuccess(),
    ) {}
    async handle(httpRequest: IHttpRequest): Promise<IhttpResponse> {
      let error
      let response: IResponseDTO
  
      if (
        httpRequest.params &&
        httpRequest.body &&
        Object.keys(httpRequest.body).length > 0
      ) {
        const pathStringParams = Object.keys(httpRequest.params)
        const bodyParams = Object.keys(httpRequest.body)
  
        if (
          pathStringParams.includes('id') &&
          (bodyParams.includes('name') ||
            bodyParams.includes('email') ||
            bodyParams.includes('password'))
        ) {
          const id = (httpRequest.params as { id: string }).id
          const data = httpRequest.body as {
            name: string
            email: string
            password: string
          }
  
          response = await this.updateUserUseCase.execute(id, data)
        } else {
          error = this.httpErrors.error422()
          return new HttpResponse(error.statusCode, error.body)
        }
  
        if (!response.success) {
          error = this.httpErrors.error400()
          return new HttpResponse(error.statusCode, response.data)
        }
  
        const success = this.httpSuccess.success200(response.data)
        return new HttpResponse(success.statusCode, success.body)
      }
  
      error = this.httpErrors.error500()
      return new HttpResponse(error.statusCode, error.body)
    }
  }