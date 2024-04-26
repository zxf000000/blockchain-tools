"use client";
import {createWeb3Modal} from "@web3modal/wagmi";
import {ReactNode} from "react";
import {State, WagmiProvider} from "wagmi";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {config, projectId} from "@/app/config";
const queryClient = new QueryClient()

createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
})


export default function Web3ModalProvider({
                                              children,
                                              initialState
                                          }: {
    children: ReactNode
    initialState?: State
}) {
    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}
