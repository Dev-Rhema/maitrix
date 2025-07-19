import React, { useState } from "react";
import Pools from "../components/Pools";
import Positions from "../components/Positions";
import Leaderboard from "../components/Leaderboard";

function Stake() {
  const [activeTab, setActiveTab] = useState("pools");

  let tabContent;
  if (activeTab === "pools")
    tabContent = (
      <Pools
        positionTitle={
          <div className="flex py-2 justify-between w-full text-black bg-[var(--light-green)] px-4">
            <p className="w-[33%] flex justify-between">
              <p className="w-[70%]">POOLS</p>
              <p className="w-[30%]">PRICE</p>
            </p>
            <p className="w-[33%]">EARNED</p>
            <p className="w-[33%]">STAKING POSITIONS</p>
          </div>
        }
      />
    );
  else if (activeTab === "positions")
    tabContent = (
      <Positions
        positionTitle={
          <div className="flex py-2 justify-between w-full text-black bg-[var(--light-green)] px-4">
            <p className="w-[33%]">ASSETS</p>
            <p className="w-[33%]">STAKING POSITIONS</p>
            <p className="w-[33%]">EARNED</p>
          </div>
        }
      />
    );
  else tabContent = <Leaderboard />;

  // Helper for four-cornered button
  const FourCornerButton = ({ name, onClick, active }) => (
    <button
      onClick={onClick}
      className={
        active
          ? "bg-[var(--light-green)] text-black px-6 py-2  max-lg:px-2 max-md:px-1 max-md:text-[12px]"
          : "relative px-6 py-2  border-[var(--light-green)] text-[var(--light-green)] overflow-hidden max-lg:px-2  max-md:px-1 max-md:text-[12px]"
      }
    >
      {!active && (
        <>
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--light-green)]max-lg:w-2 max-lg:h-2"></span>
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--light-green)]max-lg:w-2 max-lg:h-2"></span>
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--light-green)]max-lg:w-2 max-lg:h-2"></span>
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--light-green)]max-lg:w-2 max-lg:h-2"></span>
        </>
      )}
      <span className="relative z-10">{name}</span>
    </button>
  );

  return (
    <>
      <section className="px-44 flex flex-col gap-18 w-[80%] m-auto max-xl:px-0 max-lg:w-full max-lg:px-0">
        <div className="w-full flex justify-center flex-col">
          <h1 className="text-center text-[66px] max-lg:text-[40px] text-[var(--light-green)] max-lg:text-left max-md:text-[28px]">
            {"> "} MAITRIX STAKING...
          </h1>
          <p className="text-[var(--dark-green)]">
            MAITRIX Staking allows users to stake AI stablecoins with reward
            multipliers, enhancing returns and increasing overall yield.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-2 max-lg:text-sm ">
            <FourCornerButton
              name="STAKING POOL"
              onClick={() => setActiveTab("pools")}
              active={activeTab === "pools"}
            />
            <FourCornerButton
              name="POSITIONS"
              onClick={() => setActiveTab("positions")}
              active={activeTab === "positions"}
            />
            <FourCornerButton
              name="LEADERBOARD"
              onClick={() => setActiveTab("leaderboard")}
              active={activeTab === "leaderboard"}
            />
          </div>
          <div className="border w-full border-[var(--light-green)] overflow-x-auto">
            <div className="min-w-[700px]">{tabContent}</div>
          </div>
          <span className="text-3xl text-[var(--light-green)] w-full text-center">
            {">>>>>"}
          </span>
        </div>
      </section>
    </>
  );
}

export default Stake;
