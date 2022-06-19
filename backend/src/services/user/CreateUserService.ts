import prismaClient from '../../prisma'

interface UserRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name,email,password}: UserRequest){

    //verificar se ele enviou um e-mail
    if(!email){
        throw new Error("Email incorreto")
    }
    //verificar se o e-mail já está cadastrado na plataforma
    const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
    });

    if(userAlreadyExists){
        throw new Error("User already exists")
    }

    const user = await prismaClient.user.create({
        data:{
            name: name,
            email: email,
            password: password,
        }
    });

        return user;
    }
}

export { CreateUserService }