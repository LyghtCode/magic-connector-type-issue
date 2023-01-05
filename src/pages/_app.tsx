/* eslint-disable @typescript-eslint/ban-ts-comment */
import { type AppType } from "next/app";
import { useState, useEffect, SetStateAction } from 'react';
import { UserContext } from '../lib/UserContext';
import Router from 'next/router';
import { magic } from '../lib/magic';
import Layout from '../components/layout';
import { WagmiConfig, createClient, chain } from 'wagmi';
import { getDefaultProvider } from 'ethers';
import { MagicAuthConnector } from '@everipedia/wagmi-magic-connector';


// Magic Connect integration 
const connector = new MagicAuthConnector({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  chains: [chain.mainnet , chain.polygon],
  options: {
    oauthOptions: {
      providers: ["google"],
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, //required
    //...Other options
  },

});
const client = createClient({
  autoConnect: true,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  connectors: [new MagicAuthConnector({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    chains: [chain.mainnet , chain.polygon],
    options: {
      oauthOptions: {
        providers: ["google"],
      },
  
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY, //required
      //...Other options
    },
  
  })],
  provider: getDefaultProvider(),
})




import { api } from "../utils/api";

import "../styles/globals.css";

// @ts-ignore
const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    // @ts-ignore
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
