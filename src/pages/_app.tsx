import { type AppType } from "next/app";
import React from "react";
import Layout from "../components/layout";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { getDefaultProvider } from "ethers";
import { MagicConnectConnector } from "@everipedia/wagmi-magic-connector";
import { mainnet, polygon } from "@wagmi/chains";
import { api } from "../utils/api";
import "../styles/globals.css";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from 'wagmi/connectors/injected'
import '@rainbow-me/rainbowkit/styles.css';
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { rainbowMagicConnector } from '../utils/rainbowmagicconnector';
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';


// const connectors = [
//   new MagicConnectConnector({
//     chains: [mainnet, polygon],
//     options: {
//       apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string,
//     },
//   }),
// ];
const { chains, provider } = configureChains([mainnet, polygon],[
  publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Con E-Mail',
    wallets: [
      //... other wallets connectors
      rainbowMagicConnector(chains),
    ],
  },
  {
    groupName: 'Tengo Wallet',
    wallets: [
      //... other wallets connectors
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      walletConnectWallet({ chains }),

    ],
  },
])

const client = createClient({
  autoConnect: false,
  connectors,
  provider: getDefaultProvider(),
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
