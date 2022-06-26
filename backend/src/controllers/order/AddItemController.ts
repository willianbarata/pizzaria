import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
    async Handle(req: Request, res: Response){

        const { order_id, product_id, amount } = req.body;

        const addItem = new AddItemService();

        const order = await addItem.Execute({
            order_id, product_id, amount
        });

        return res.json(order);

    }
}

export { AddItemController }