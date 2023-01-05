import Head from 'next/head';
import Header from './header';

const Layout = (props: any) => (

    <>
        <Head>
            <title>My page title</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header />
        <main>
            <div className='container'> {props.children}</div>
        </main>


    </>





);
export default Layout;
