import React from "react";
import arb from "../assets/img/arb.png";
import stAth from "../assets/img/stATH.png";
import ausd from "../assets/img/ausd.png";
import Button from "../components/Button";

function Mint() {
  return (
    <section className=" w-[50%] m-auto flex flex-col p-10 border border-[var(--light-green)] gap-4 max-xl:w-[70%] max-lg:w-full max-md:p-6 max-md:gap-3 max-sm:p-4">
      <div className="flex gap-6 justify-start text-[20px] max-md:text-sm max-sm:text-[12px]">
        <p className="border-b border-[var(--light-green)]">MINT AUSD</p>
        <p className="opacity-20">BURN AUSD (COMING SOON)</p>
      </div>
      <div className="bg-[#0C0C0C] p-4 flex flex-col gap-10 max-md:text-sm max-md:p-2">
        <div className="flex justify-between items-center">
          <p className="text-[18px] max-md:text-sm">YOU DEPOSIT</p>
          <div className=" flex gap-2 text-sm">
            <div className="flex items-center justify-center gap-2 bg-black p-2">
              <img src={arb} alt="" className="w-[16px]" />
              <p className="max-lg:hidden">ARBITRUM SEPOLIA</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-black p-2">
              <img src={stAth} alt="" className="w-[16px]" />
              <p>ATH</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[24px] ">0</p>
            <p className="p-2 bg-black inline-block text-[var(--light-green)]">
              MAX
            </p>
          </div>
          <div className="flex items-center justify-between  opacity-20 max-md:text-[12px]">
            <p className="">MIN AMOUNT: 50 ATH</p>
            <p className="p-2  inline-block ">BALANCE: 0</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0C0C0C] p-4 flex flex-col gap-10 max-md:p-2">
        <div className="flex justify-between items-center">
          <p className="text-[18px]  max-md:text-sm">YOU DEPOSIT</p>
          <div className=" flex gap-2 text-sm">
            <div className="flex items-center justify-center gap-2 bg-black p-2">
              <img src={arb} alt="" className="w-[16px]" />
              <p className="max-lg:hidden">ARBITRUM SEPOLIA</p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-black p-2">
              <img src={ausd} alt="" className="w-[16px]" />
              <p>AUSD</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[24px] ">0</p>
          </div>
          <div className="flex items-center justify-end  opacity-20">
            <p className="p-2  inline-block  max-md:text-[12px]">BALANCE: 0</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between  opacity-20  max-md:text-[12px] ">
        <p className="">EXPECTED PRICE</p>
        <p className="p-2  inline-block ">1 ATH = 0.03324 AUSD</p>
      </div>
      <Button name="CONNECT WALLET" />
    </section>
  );
}

export default Mint;
