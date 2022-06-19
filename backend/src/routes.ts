import { Router, Request, Response } from "express";
import 'express-async-errors';
import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router();

//rotas users
router.post('/users', new CreateUserController().handle)

export { router };