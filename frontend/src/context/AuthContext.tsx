import { createContext, ReactNode, useState } from 'react';

import { destroyCookie } from '../../node_modules/nookies/dist/index';

import Router from '../../node_modules/next/router';

type AuthContextData ={
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credencials: SignInProps) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    id: string,
    name: string,
    email: string
}

type SignInProps = {
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try {
        destroyCookie(undefined, '@nextauth.token');
        Router.push('/');
    } catch (error) {
        console.log("Erro ao deslogar");
    }
}

export function AuthProvider({children} : AuthProviderProps){

    const [user, setUser ] = useState<UserProps>();
    const isAuthenticated = !!user;

    async function signIn({email, password} : SignInProps){
        console.log("Email para logar:", email);
        console.log("Senha para logar:", password);
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn , signOut}}>
            {children}
        </AuthContext.Provider>
    )
}