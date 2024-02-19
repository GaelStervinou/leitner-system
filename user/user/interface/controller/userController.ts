import createUserUseCase from "../../application/usesCases/createUser";
import {JsonUserRepository} from "../../infrastructure/repository/jsonUserRepository";
import CreateUserRequest from "../../application/dto/request/createUserRequest";
import LoginUserRequest from "../../application/dto/request/loginUserRequest";
import LoginUser from "../../application/usesCases/loginUser";

export default class UserController {
    _createUserUseCase: createUserUseCase;
    _loginUserUseCase: LoginUser;
    constructor() {
        this._createUserUseCase = new createUserUseCase(new JsonUserRepository());
        this._loginUserUseCase = new LoginUser(new JsonUserRepository());
    }
    createUser(user: CreateUserRequest): boolean|string {
        return this._createUserUseCase.execute(user);
    }

    loginUser(loginInformation: LoginUserRequest): string|boolean {
        return this._loginUserUseCase.execute(loginInformation);
    }
}