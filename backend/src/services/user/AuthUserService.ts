import prismaClient from "../../prima";
import {compare} from 'bcryptjs';
import {} from '';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({email, password}: AuthRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorreto")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorreto") 
        }



        return {ok: true}
    }
}

export {AuthUserService};