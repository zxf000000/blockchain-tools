"use client";
import Image from "next/image";
import {useMemo, useState} from "react";

export default function Home() {
  const [leftValue, setLeftValue] = useState("")
  const rightValue = useMemo(() => {
    if (!leftValue) {
      return ""
    }
    try {
      const res = JSON.parse(leftValue);
      return JSON.stringify(res["abi"]);
    } catch (e: any) {
      return e.toString();
    }
  }, [leftValue]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={"w-full max-w-screen-2xl px-10 grid grid-cols-2 gap-10 text-black"}>
        <textarea className={"w-full h-[700px] p-6"} value={leftValue} onChange={(e) => {
          setLeftValue(e.target.value);
        }}/>
        <textarea className={"w-full h-[700px] p-6"} value={rightValue}/>
      </div>
    </main>
  );
}
