import Head  from '../../node_modules/next/head';
import Image from '../../node_modules/next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

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

        <div className=''>
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
              Cadastrar
            </Button>

          </form>

        </div>
    </div>
    </>
  )
}
