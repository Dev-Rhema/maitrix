import React from "react";
import Button from "../components/Button";
import Positions from "../components/Positions";

function Earn() {
  return (
    <section className=" w-[60%] m-auto flex flex-col px-10 gap-4  max-lg:w-full max-md:p-6 max-md:gap-3 max-sm:px-0 max-lg:px-0">
      <div className="flex flex-col gap-2 ">
        <div className="h-1.5 border border-[var(--light-green)]">
          <div className="w-[40%] h-full bg-[var(--light-green)]"></div>
        </div>
        <div className="h-1.5 border border-[var(--light-green)]">
          <div className="w-[80%] h-full bg-[var(--light-green)]"></div>
        </div>
        <div className="relative px-10 py-2 text-lg bg-transparent h-full mt-6 ">
          <span className="absolute top-0 left-0 w-10 h-full border-t-1 border-l-1 border-[#00f61d]"></span>
          <span className="absolute top-0 right-0 w-10 h-full border-t-1 border-r-1 border-[#00f61d]"></span>
          <span className="absolute bottom-0 left-0 w-10 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
          <span className="absolute bottom-0 right-0 w-10 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
          <div className="flex justify-between items-center h-full max-md:flex-col max-md:justify-center max-md:gap-3">
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <p className="text-[var(--light-green)] text-[18px]  mb-3 max-md:mb-0 max-lg:text-sm">
                MY REWARDS (AUSD)
              </p>
              <p className="text-[28px] max-lg:text-[20px]">0.5100 AUSD</p>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <p className="text-[var(--light-green)] text-[18px] max-lg:text-sm  mb-3 max-md:mb-0">
                MY REWARDS (PILLS)
              </p>
              <p className="text-[28px] max-lg:text-[20px]">36,639.69 PILLS</p>
            </div>
            <div className="max-md:flex max-md:flex-col max-md:items-center">
              <Button name="SHARE TO X" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[var(--light-green)]">
        <div className="w-full bg-[var(--light-green)] text-black px-6">
          {">>> "}ACTIVE POSITIONS
        </div>
        <div className="p-6 gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[var(--light-green)]">TOTAL POSITIONS</p>
            <p>$ 122.45</p>
          </div>
          <div className="mt-6 overflow-x-auto w-full">
            <div className="min-w-[600px]">
              <Positions
                positionTitle={
                  <div className="flex justify-between w-full text-[var(--light-green)]">
                    <p className="w-[33%]">ASSETS</p>
                    <p className="w-[33%]">STAKING POSITIONS</p>
                    <p className="w-[33%]">EARNED</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <span className="text-3xl text-[var(--light-green)] w-full text-center">
        {">>>>>"}
      </span>
    </section>
  );
}

export default Earn;
