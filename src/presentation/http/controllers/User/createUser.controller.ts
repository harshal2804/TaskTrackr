import { ICreateUserUseCase } from "../../../../application/usecases/user/CreateUser";
import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IhttpError } from "../../helpers/IhttpError";
import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IController } from "../controller";

export class createUserController implements IController {
    
    constructor(
        private createUserUseCase: ICreateUserUseCase,
        private httpSucccess: IhttpSuccess = new HttpSuccess(),
        private httpError: IhttpError = new HttpError()
    ) { }

    async handle(httpRequest: IHttpRequest): Promise<IhttpResponse> {
        let error
        let response: IResponseDTO
    
        if (httpRequest.body && Object.keys(httpRequest.body).length > 0) {
          const bodyParams = Object.keys(httpRequest.body)
    
          if (
            bodyParams.includes('name') &&
            bodyParams.includes('email') &&
            bodyParams.includes('password') &&
            bodyParams.includes('role')
          ) {
            const createUserRequestDTO = httpRequest.body as {
              name: string
              email: string
              password: string
              role: string
            }
    
            response = await this.createUserUseCase.execute(createUserRequestDTO)
          } else {
            error = this.httpError.error422()
            return new HttpResponse(error.statusCode, error.body)
          }
    
          if (!response.success) {
            error = this.httpError.error400()
            return new HttpResponse(error.statusCode, response.data)
          }
    
          const success = this.httpSucccess.success201(response.data)
          return new HttpResponse(success.statusCode, success.body)
        }
    
        error = this.httpError.error500()
        return new HttpResponse(error.statusCode, error.body)
      }
}