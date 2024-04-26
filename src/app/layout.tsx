import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {config} from "@/app/config";
import {cookieToInitialState} from "wagmi";
import {headers} from "next/headers";
import AccountButton from "@/app/account-button";
import Web3ModalProvider from "@/app/web3modal-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const initialState = cookieToInitialState(config, headers().get('cookie'))
    return (
    <html lang="en">
    <body className={inter.className}>
    <Web3ModalProvider initialState={initialState}>
        <header>
            <nav className={"w-full max-w-screen-2xl px-10 flex items-center gap-10 h-16"}>
                <Link href={"/"}>HOME</Link>
                <Link href={"/faucet"}>FAUCET</Link>
                <AccountButton></AccountButton>
            </nav>
        </header>
        {children}
    </Web3ModalProvider>
    </body>
    </html>
    );
}
