import prismaCliente from "../../prisma";

interface OrderRequest{
    table: number;
    name: string;
}

class CreateOrderService{
    async Execute({table, name}: OrderRequest){

        const order = await prismaCliente.order.create({
            data:{
                table: table,
                name: name
            }
        })

        return order;

    }
}

export { CreateOrderService }