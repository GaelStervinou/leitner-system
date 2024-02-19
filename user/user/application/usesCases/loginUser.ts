import UserRepository from "../repository/userRepository";
import LoginUserRequest from "../dto/request/loginUserRequest";

export default class LoginUser
{
    _repository: UserRepository;
    constructor(userRepository: UserRepository) {
        this._repository = userRepository;
    }

    execute(loginInformation: LoginUserRequest): string|boolean {
        return this._repository.loginUser(loginInformation);
    }
}