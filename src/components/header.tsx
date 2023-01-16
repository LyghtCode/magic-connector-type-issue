import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Header = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <header className="flex items-center justify-around bg-violet-900 p-5 text-white">
      <nav>
        <ul className="flex justify-around gap-9">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </nav>
      {/* {isConnected ? (
        <div>
          Connected to {address}
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <button
          className="rounded-md bg-violet-500 px-4 py-2"
          onClick={() => connect({ connector: connectors[0] })}
        >
          Connect Wallet
        </button>
      )} */}
      <ConnectButton/>
    </header>
  );
};

export default Header;
