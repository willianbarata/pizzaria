import { Router, Request, Response } from "express";
import multer from 'multer';

import 'express-async-errors';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//rotas users
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//rotas category
router.post('/category' , isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

//rotas product
router.post('/product', isAuthenticated, upload.single('file'),new CreateProductController().handle)

export { router };