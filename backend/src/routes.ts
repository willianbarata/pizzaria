import { Router, Request, Response } from "express";
import 'express-async-errors';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";
const router = Router();

//rotas users
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

export { router };