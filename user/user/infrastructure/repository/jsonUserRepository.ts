import UserRepository from "../../application/repository/userRepository";
import {CreationStatus, JsonHandler, USER_ENTITY_JSON_NAME} from "../database/jsonHandler";
import CreateUserToDatabase from "../../application/dto/request/createUserToDatabase";
import LoginUserToDatabase from "../../application/dto/request/loginUserToDatabase";

export const DEFAULT_TOKEN = 'test';
export class JsonUserRepository implements UserRepository {
    _jsonHandler = new JsonHandler();
    createUser(user: CreateUserToDatabase): boolean | string {
        const result = this._jsonHandler.createData(USER_ENTITY_JSON_NAME, user);
        if (CreationStatus.ERROR === result) {
            return false;
        }

        return result;
    }

    loginUser(loginUser:LoginUserToDatabase): string|boolean {
        const user = this._jsonHandler.getData(USER_ENTITY_JSON_NAME, [
            {
                attribute: "email",
                value: loginUser.email
            },
            {
                attribute: "password",
                value: loginUser.password
            }
        ]);
        if (user.length) {
            return DEFAULT_TOKEN;
        }

        return false;
    }
}