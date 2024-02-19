import {FastifyInstance} from "fastify";
import UserController from "../controller/userController";
import {isValidUserRequest} from "./service/isValidUserRequest";
import {isValidLoginRequest} from "./service/isValidLoginRequest";

const userController = new UserController();
async function userRoutes (fastify: FastifyInstance, options: object) {
    fastify.post('/users', async (request, reply) => {
        const user = request.body;
        if (!isValidUserRequest(user)) {
            reply.code(400)
                .header('Content-Type', 'application/json; charset=utf-8')
                .send("Invalid information");
        } else {
            const userToken = userController.createUser(user)
            if (null === userToken) {
                reply.code(400)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send("Invalid information");
            } else {
                reply.code(201)
                    .header('Content-Type', 'application/json; charset=utf-8')
                    .send({
                        jwt: userToken
                    });
            }
        }
    })

    fastify.post('/users/login', async (request, reply) => {
       const loginInformation = request.body;
       if (!isValidLoginRequest(loginInformation)) {
           reply.code(400)
               .header('Content-Type', 'application/json; charset=utf-8')
               .send("Invalid information");
       } else {
           const userToken = userController.loginUser(loginInformation);
           if (false === userToken) {
               reply.code(400)
                   .header('Content-Type', 'application/json; charset=utf-8')
                   .send("Invalid information");
           } else {
               reply.code(201)
                   .header('Content-Type', 'application/json; charset=utf-8')
                   .send({
                       jwt: userToken
                   });
           }
       }
    });
}
export default userRoutes;