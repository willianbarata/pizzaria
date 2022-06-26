import prismaCliente from "../../prisma";

interface OrderRequest{
    order_id: string;
}

class RemoveOrderService{
    async execute({ order_id }){

        const order = await prismaCliente.order.delete({
            where:{
                id: order_id,
            }
        })

        return order;
    }
}

export { RemoveOrderService }