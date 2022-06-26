import prismaCliente from "../../prisma";

interface ItemRequest{
    order_id: string,
    product_id: string,
    amount: number,
}

class AddItemService{
    async Execute({ order_id, product_id, amount} : ItemRequest){

        const order = await prismaCliente.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amount
            }
        });

        return order;

    }
}

export {AddItemService}