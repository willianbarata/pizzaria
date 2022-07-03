import axios, { AxiosError } from "../../node_modules/axios/index";
import { parseCookies } from "../../node_modules/nookies/dist/index";
import { AuthTokenError } from "./errors/AuthTokenError";

import { signOut } from '../context/AuthContext'

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response =>{
        return response;
    }, (error: AxiosError) => {
        if(error.response.status === 401){
            //qualquer erro 401 (não autorizado) não devemos logar o usuário
            if(typeof window !== undefined){
                //chamar a função para deslogar o usuário
                signOut();
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }

        return Promise.reject(error);
    });

    return api;
}