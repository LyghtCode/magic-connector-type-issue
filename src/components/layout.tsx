import Head from "next/head";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <title>My page title</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <div className="container"> {children}</div>
    </main>
  </>
);
export default Layout;
