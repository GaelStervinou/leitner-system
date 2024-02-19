import LoginUserRequest from "../../../application/dto/request/loginUserRequest";

export const isValidLoginRequest = (request: any): request is LoginUserRequest => {
    return 'email' in request && 'password' in request;
}