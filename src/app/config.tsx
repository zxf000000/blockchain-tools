import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import {cookieStorage, createStorage, State, WagmiProvider} from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import {bscTestnet} from "viem/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "a4a7c6203b88b6082c3c8dc7b107658e"

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}



// Create wagmiConfig
const chains = [mainnet, sepolia, bscTestnet] as const
export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    }),
})

