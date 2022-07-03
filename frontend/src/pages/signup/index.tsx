import Head from '../../../node_modules/next/head';
import Image from '../../../node_modules/next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo.svg';

import Link from '../../../node_modules/next/link';

import { Input } from '../../components/ui/Input/index';
import { Button } from '../../components/ui/Button/index';

export default function Home() {
  return (
    <>
    <Head>
      <title> Pizzaria - Faça seu Cadastro Agora</title>
    </Head>

    <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria"/>

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form>
          <Input 
              placeholder="Digite seu nome"
              type="text"
            />
            
            <Input 
              placeholder="Digite seu email"
              type="text"
            />
            <Input 
              placeholder="Digite sua senha"
              type="password"
            />

            <Button 
              type="submit"
              loading={false}
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
