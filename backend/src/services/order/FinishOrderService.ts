import prismaCliente from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class FinishOrderService{
    async execute({order_id} : OrderRequest){

        const order = await prismaCliente.order.update({
            where: {
                id: order_id
            },
            data:{
                status: true,
            }
        })

        return order;

    }
}

export {FinishOrderService}