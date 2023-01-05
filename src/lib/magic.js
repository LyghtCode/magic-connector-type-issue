import { Magic } from 'magic-sdk';
import { ConnectExtension } from '@magic-ext/connect';

const customNodeOptions = {
    rpcUrl: 'https://polygon-rpc.com/', // Polygon RPC URL
    chainId: 137, // Polygon chain id
  }

// Create client-side Magic instance
const createMagic = (key) => {
  return (
    typeof window != 'undefined' &&
    new Magic(key, {
      extensions: [new ConnectExtension()],
      network: 'mainnet',
    })
  );
};

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
