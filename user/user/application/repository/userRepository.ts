import CreateUserToDatabase from "../dto/request/createUserToDatabase";
import LoginUserToDatabase from "../dto/request/loginUserToDatabase";

export default interface UserRepository {
    createUser(user: CreateUserToDatabase): boolean|string

    loginUser(
        loginUser: LoginUserToDatabase
    ): boolean|string
}