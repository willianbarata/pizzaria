import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController{
    async handle(req: Request, res: Response){
        const listOrdersController = new ListOrderService();

        const orders = await listOrdersController.execute();

        return res.json(orders);
    }
}

export {ListOrderController}