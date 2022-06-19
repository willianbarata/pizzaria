import prismaCliente from "../../prisma";

class ListCategoryService{

    async Execute(){
        const category = await prismaCliente.category.findMany({
            select:{
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { ListCategoryService }