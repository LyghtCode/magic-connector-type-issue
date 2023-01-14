import { type AppType } from "next/app";
import React from "react";
import Layout from "../components/layout";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { MagicAuthConnector } from "@everipedia/wagmi-magic-connector";
import { mainnet, polygon } from "@wagmi/chains";
import { api } from "../utils/api";
import "../styles/globals.css";

const connectors = [
  new MagicAuthConnector({
    chains: [mainnet, polygon],
    options: {
      oauthOptions: {
        providers: ["google"],
      },
      apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string,
    },
  }),
];

const client = createClient({
  autoConnect: true,
  connectors,
  provider: getDefaultProvider(),
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);
