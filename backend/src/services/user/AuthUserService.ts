import prismaCliente from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

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

    //gerar token JWT e devolver os dados do usuário como id, name e email

    const token = sign(
        {
            name: user.name,
            email: user.email,
        },
            process.env.JWT_SECRET, 
        {
            subject: user.id,
            expiresIn: '30d'
        }
        
    );

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }