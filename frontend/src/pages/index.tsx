import Head  from '../../node_modules/next/head';
import Image from '../../node_modules/next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import Link from '../../node_modules/next/link';

import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export default function Home() {
  return (
    <>
    <Head>
      <title> Pizzaria - Faça seu Login</title>
    </Head>
    <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria"/>

        <div className={styles.login}>
          <form>
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
              Acessar
            </Button>

          </form>

          <Link href="/signup">
              <a className={styles.text}> Não possui uma conta? Cadastre-se</a>
          </Link>
          

        </div>
    </div>
    </>
  )
}
