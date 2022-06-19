import prismaCliente from "../../prisma";
import { compare } from 'bcryptjs';

interface AuthRequest{
    email: string,
    password: string
}

class AuthUserService {
    async Execute({email, password}: AuthRequest){
        
    //verificar se o e-mail existe
    const user = await prismaCliente.user.findFirst({
        where:{
            email: email
        }
    })

    if(!user){
        throw new Error("User/Password incorrect")
    }

    //verificar se a senha está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new Error("User/Password incorrect");
    }

    
        return {ok: true}
    }
}

export { AuthUserService }