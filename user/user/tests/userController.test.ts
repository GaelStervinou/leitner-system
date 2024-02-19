import {describe, expect, jest, test} from '@jest/globals';
import UserController from "../interface/controller/userController";
import {randomUUID} from "node:crypto";
jest.mock('uuid', () => ({ v4: () => '123456789' }));
test('adding a user should work', () => {
    const userController = new UserController();
    const userToken = userController.createUser({
        firstname: "ruix",
        lastname: "soares",
        email: "test@gmail.com",
        password: "test",
        verifyPassword: "test"
    });
    expect(userToken).toBe('123456789');
})