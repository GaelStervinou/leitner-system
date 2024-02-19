import CreateUserRequest from "../../../application/dto/request/createUserRequest";

export const isValidUserRequest = (request: any): request is CreateUserRequest => {
    return 'firstname' in request &&
    'lastname' in request &&
    'email' in request &&
    'password' in request &&
    'verifyPassword' in request;
}