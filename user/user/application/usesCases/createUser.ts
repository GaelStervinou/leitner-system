import UserRepository from "../repository/userRepository";
import CreateUserRequest from "../dto/request/createUserRequest";

export default class createUserUseCase {
    _repository: UserRepository;
    constructor(userRepository: UserRepository) {
        this._repository = userRepository;
    }

    execute(user: CreateUserRequest) {
        const userToDatabase= {
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password
        };
        return this._repository.createUser(userToDatabase);
    }
}