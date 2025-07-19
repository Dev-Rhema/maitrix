import React from "react";
import usd1 from "../assets/img/USD1.png";
import metamask from "../assets/img/metamask.png";
import Button from "../components/Button";

function Faucet() {
  return (
    <section className=" flex flex-col gap-10 w-[70%] m-auto max-xl:px-0 max-lg:w-[100%] max-lg:px-0 max-md:gap-6 ">
      <div className="w-full flex justify-center flex-col gap-6">
        <h1 className="text-center flex items-center justify-center gap-2 text-[66px] max-lg:text-[40px] text-[var(--light-green)] max-lg:text-left max-md:text-[32px]">
          {"> "} <img src={usd1} className="w-[66px] max-md:w-[32px]" alt="" />{" "}
          USD1 FAUCET...
        </h1>
        <p className="text-[var(--dark-green)]">
          THIS FAUCET DISPENSES TEST USD1 TOKENS FOR USE ON ARBITRUM SEPOLIA
          TESTNETS. ENSURE YOU CONFIRM DETAILS BEFORE MAKING A REQUEST.
        </p>
        <p className="text-[var(--dark-green)]">
          <span className="text-[var(--light-green)]">* </span>USD1 IS CURRENTLY
          PRICED AT <span className="text-[var(--light-green)]">$ 1</span>.{" "}
          <br />{" "}
          <span className="text-[var(--light-green)]">* STAKING USD1</span>{" "}
          ALLOWS USERS TO EARN{" "}
          <span className="text-[var(--light-green)]">10 PILLS PER USD1</span>{" "}
          STAKED <span className="text-[var(--light-green)]">PER DAY</span>
          —BOOSTED BY 2x.
        </p>
      </div>
      <div className="border border-[var(--light-green)] w-full p-6 flex flex-col gap-4">
        <p>WALLET ADDRESS</p>
        <input
          type="text"
          placeholder="0xA8Fe1F768399...6FFdD97a4"
          className="bg-gray-800 opacity-40 w-full p-2"
        />
        <Button name="GET TEST TOKENS" />
      </div>
      <div className="border border-[var(--light-green)] w-full p-6 flex flex-col gap-4">
        <p className="text-[var(--light-green)] text-2xl max-md:text-lg">
          HOW TO GET TEST USD1?
        </p>
        <p className="text-[var(--dark-green)]">
          TO REQUEST FUNDS, ENTER YOUR{" "}
          <span className="text-[var(--light-green)]">WALLET ADDRESS</span> AND
          HIT <span className="text-[var(--light-green)]">“GET TEST USD1”</span>
          . WE SUPPORT WALLETS AS RECEIVED ADDRESSES BUT NOT SMART CONTRACTS.
        </p>
        <p className="text-[var(--dark-green)]">
          YOU CAN REQUEST{" "}
          <span className="text-[var(--light-green)]">1 TEST USD1</span> EVERY{" "}
          <span className="text-[var(--light-green)]">24H</span>.
        </p>
        <p className="text-[var(--light-green)] text-2xl max-md:text-lg">
          HOW TO GET TEST ETH (GAS)?
        </p>
        <p className="text-[var(--dark-green)]">
          TO CLAIM TEST ETH, PLEASE GO TO{" "}
          <a
            className="text-[var(--light-green)]"
            href="http://quicknode.com/faucet"
          >
            QUICKNODE FAUCET.
          </a>
        </p>
      </div>
      <div className="border border-[var(--light-green)] w-full p-6 flex flex-col gap-4">
        <p className="text-[var(--light-green)] text-2xl max-md:text-lg">
          HOW TO GET TEST USD1?
        </p>
        <div className="flex justify-between items-center w-full">
          <span className="flex items-center gap-2 ">
            <img src={usd1} alt="" className="w-6" />
            <p className="max-md:text-[12px]">0x16a8A362B...3B80abf7</p>
          </span>
          <img src={metamask} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Faucet;
