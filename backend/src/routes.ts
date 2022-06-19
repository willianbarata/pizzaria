import { Router, Request, Response } from "express";
import 'express-async-errors';

const router = Router();

router.get('/teste', (req: Request, res: Response)=>{
    return res.json({ nome : "Willian"})
})

export { router };