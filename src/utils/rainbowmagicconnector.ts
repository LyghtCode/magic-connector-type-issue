// RainbowMagicConnector.ts

import { MagicConnectConnector } from "@everipedia/wagmi-magic-connector";

export const rainbowMagicConnector = ({ chains }: any) => ({
  id: "magic",
  name: "E-Mail",
  iconUrl: "https://svgshare.com/i/iJK.svg",
  iconBackground: "#fff",
  createConnector: () => {
    const connector = new MagicConnectConnector({
      chains: chains,
      options: {
        magicSdkConfiguration: {
          network: {
            rpcUrl: 'https://polygon-rpc.com', // your ethereum, polygon, or optimism mainnet/testnet rpc URL
            chainId: 137,
          },
        },
        apiKey: process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string,
        //...Other options (check out full API below)
      },
    });
    return {
      connector,
    };
  },
});
