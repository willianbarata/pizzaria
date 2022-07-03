import Head from '../../../node_modules/next/head';
import Image from '../../../node_modules/next/image';
import styles from '../../../styles/home.module.scss';
import { FormEvent, useState } from 'react';
import logoImg from '../../../public/logo.svg';

import Link from '../../../node_modules/next/link';

import { Input } from '../../components/ui/Input/index';
import { Button } from '../../components/ui/Button/index';

export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event : FormEvent){
    event.preventDefault();

    if(name === ''  || email === '' || password === ''){
      alert("Preencha todos os campos")
      return;
    }

    setLoading(true);
  }

  return (
    <>
    <Head>
      <title> Pizzaria - Faça seu Cadastro Agora</title>
    </Head>

    <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria"/>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
    
      <form onSubmit={handleSignUp}>
          <Input 
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={ (e) => setName(e.target.value)}
            />
            
            <Input 
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
            <Input 
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
            />

            <Button 
              type="submit"
              loading={loading}
            > 
              Cadastrar
            </Button>

          </form>

          <Link href="/">
              <a className={styles.text}> Já possui uma conta? Faça o login!</a>
          </Link>
          

        </div>
    </div>
    </>
  )
}
