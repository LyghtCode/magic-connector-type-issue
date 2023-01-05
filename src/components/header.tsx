import Link from 'next/link';
import { useAccount, useConnect, useDisconnect } from 'wagmi';




const Header = () => {

    const { address, isConnected } = useAccount()
    const { connect } = useConnect()

    const { disconnect } = useDisconnect()



    return (
        <header>
            <nav>
                <ul>

                    <>
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/profile'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <a>
                                Logout
                            </a>
                        </li>
                    </>


                </ul>
            </nav>
            if (isConnected)
            return (
            <div>
                Connected to {address}
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>
            )
            return <button onClick={() => connect()}>Connect Wallet</button>
        </header>

    )

}

export default Header;