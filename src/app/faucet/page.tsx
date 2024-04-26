"use client";

import {parseAbi, parseEther} from "viem";
import {usePublicClient, useWalletClient} from "wagmi";



const FaucetPage = () => {

    const {data: client} = useWalletClient();
    const publicClient = usePublicClient();

    const handleFaucet = (index: number) => {
        const address = [
            "0x66017C40D781bd1bf1b4EDEfA0730b94B443F5B0",
            "0x7e965D48Cb6F87B41967726AC8FD8cD10271d886",
            "0x6E847Cc3383525Ad33bEDd260139c1e097546B60"
        ]
        const addr = address[index];
        client?.writeContract({
            abi: parseAbi([
                "function faucet(uint256 amount)",
            ]),
            address: addr as any,
            functionName: "faucet",
            args: [parseEther("100000000")]
        }).then((res) => {
            console.log(res);
        })
        // client?.writeContract({
        //     abi: erc20Abi,
        //     address: address[index] as any,
        //     functionName: "transfer",
        //     args: ["0x7e965D48Cb6F87B41967726AC8FD8cD10271d886", parseEther("90000000")]
        // })
        //     .then((res) => console.log(res))
        //     .catch(e => console.error(e))
    }

    return (
        <div className={"w-screen h-screen flex flex-col items-center"}>
            <input/>
            <div className={"w-full max-w-screen-xl m-auto"}>
                <button onClick={() => {
                    handleFaucet(0);
                }} className={"border px-4 py-1 border-black"}>
                    FAUCET 0
                </button>
                <button onClick={() => {
                    handleFaucet(1);
                }} className={"border px-4 py-1 border-black"}>
                    FAUCET 1
                </button>
                <button onClick={() => {
                    handleFaucet(2);
                }} className={"border px-4 py-1 border-black"}>
                    FAUCET 2
                </button>
            </div>
        </div>
    )
}

export default FaucetPage;
