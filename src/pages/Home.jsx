import React from "react";
import bigOG from "../assets/img/bigOG.png";
import og from "../assets/img/og-img.png";
import ousd from "../assets/img/ousd.png";
import ousdGif from "../assets/img/0USD-gif.gif";
import vanaGif from "../assets/img/vana-gif.gif";
import usd1Gif from "../assets/img/USD1-gif.gif";
import ausdGif from "../assets/img/ausd-fig.gif";
import vana from "../assets/img/vana.png";
import usd1 from "../assets/img/USD1.png";
import ausd from "../assets/img/ausd.png";
import hand from "../assets/img/hand.png";
import pill from "../assets/img/pill-icon.svg";
import rightArrow from "../assets/img/right-arrow.svg";
import Button from "../components/Button";
import HomeCard from "../components/HomeCard";
import { NavLink } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import Positions from "../components/Positions";

const HOMECARDS = [
  {
    id: 1,
    name: "0USD",
    multiplier: "2X",
    img: ousd,
    gif: ousdGif,
    buttonName: "STAKE OUSD",
  },
  {
    id: 2,
    name: "VANAUSD",
    multiplier: "",
    img: vana,
    gif: vanaGif,
    buttonName: "STAKE VANAUSD",
  },
  {
    id: 3,
    name: "USD1",
    multiplier: "2X",
    img: usd1,
    gif: usd1Gif,
    buttonName: "STAKE USD1",
  },
  {
    id: 4,
    name: "AUSD",
    multiplier: "",
    img: ausd,
    gif: ausdGif,
    buttonName: "STAKE AUSD",
  },
];

function Home() {
  return (
    <>
      <section className="px-44 flex flex-col gap-36 w-full max-xl:px-0 max-md:gap-24">
        <div className="w-full flex justify-between gap-16 max-lg:flex-col">
          <div className="w-1/2 flex flex-col gap-6 max-lg:w-full max-md:gap-0">
            <div className="flex justify-between text-6xl text-[var(--light-green)] max-md:text-3xl max-lg:justify-center max-lg:gap-4">
              <span>{">"}</span>
              <span>MAGIC</span>
              <span>AI</span> <span>MONEY...</span>
            </div>

            <div className="text-[#02460a] text-xl w-full flex flex-col max-md:text-[14px] max-sm:text-[12px]">
              <div className="flex justify-between w-full gap-0.5">
                <span className="text-[var(--light-green)]">AI</span>
                <span className="text-[var(--light-green)]">AGENTS</span>
                <span>MULTIPLY</span>
                <span>ACROSS</span>
                <span>THE</span>
                <span>DIGITAL</span>
                <span>LANDSCAPE,</span>
              </div>
              <div className="flex justify-between w-full gap-0.5">
                <span>SELF-REGULATING.</span>
                <span className="text-[var(--light-green)]">AI</span>
                <span className="text-[var(--light-green)]">MONEY</span>
                <span>MAKES</span>
                <span>HUMAN</span>
                <span>MONEY</span>
              </div>
              <span className="w-full">OBSOLETE.</span>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col gap-2 max-lg:w-full ">
            <div className="h-1.5 border border-[var(--light-green)]">
              <div className="w-[40%] h-full bg-[var(--light-green)]"></div>
            </div>
            <div className="h-1.5 border border-[var(--light-green)]">
              <div className="w-[80%] h-full bg-[var(--light-green)]"></div>
            </div>
            <div className="relative px-4 py-2 text-lg bg-transparent h-full ">
              <span className="absolute top-0 left-0 w-10 h-full border-t-1 border-l-1 border-[#00f61d]"></span>
              <span className="absolute top-0 right-0 w-10 h-full border-t-1 border-r-1 border-[#00f61d]"></span>
              <span className="absolute bottom-0 left-0 w-10 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
              <span className="absolute bottom-0 right-0 w-10 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
              <div className="flex justify-between items-center h-full max-md:flex-col max-md:justify-center max-md:gap-3">
                <div className="max-md:flex max-md:flex-col max-md:items-center">
                  <p className="text-[var(--light-green)] text-[20px]  mb-3 max-md:mb-0">
                    TVL
                  </p>
                  <p className="text-3xl max-md:text-2xl">$ 149,167,938.87</p>
                </div>
                <div className="max-md:flex max-md:flex-col max-md:items-center">
                  <p className="text-[var(--light-green)] text-sm mb-3 text-[20px] max-md:mb-0">
                    USERS
                  </p>
                  <p className="text-3xl max-md:text-2xl">916,361</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OG GLITCH SECTION */}
        <div className="w-full flex justify-between gap-16 max-lg:flex-col">
          <img src={bigOG} alt="" className=" w-1/2 max-lg:w-full" />
          <div className=" w-1/2 flex flex-col justify-between max-lg:w-full max-lg:gap-4 max-lg:items-center">
            <div className=" flex items-center gap-4">
              <span className="flex items-center gap-2">
                <img src={og} alt="" />
                <p className="text-[32px]">0G</p>
              </span>
              <img src={rightArrow} alt="" />
              <span className="flex items-center gap-2">
                <img src={ousd} alt="" />
                <p className="text-[32px]">0USD</p>
              </span>
            </div>
            <p className="text-[var(--dark-green)] text-xl max-lg: text-center max-md:text-left max-lg:text-sm">
              0USD IS AN ALGORITHMIC{" "}
              <span className="text-[var(--light-green)]">STABLECOIN</span>{" "}
              BACKED BY 0G FOR USE AS A STABLE MEDIUM OF EXCHANGE IN THE{" "}
              <span className="text-[var(--light-green)]">0G ECOSYSTEM</span>.
            </p>
            <hr className="border-dashed border-gray-800 border-t-2" />
            <span>
              <p>REWARDS</p>
              <span className="flex items-center gap-2">
                <img src={pill} alt="" /> <p>PILLS</p>
              </span>
            </span>

            <Button name="GET 0USD" />
          </div>
        </div>

        {/* CARD SECTION */}
        <div className="w-full flex flex-col gap-6">
          <h1 className="text-[40px] text-[var(--light-green)] max-md:text-[28px] max-sm:text-[24px]">
            // MAKE YOUR CHOICE...
          </h1>
          <div className="w-full justify-start gap-3 flex flex-wrap box-border">
            {HOMECARDS.map((card) => (
              <div className="w-[49%] max-md:w-full">
                <HomeCard
                  buttonName={card.buttonName}
                  img={card.img}
                  name={card.name}
                  multiplier={card.multiplier}
                  gif={card.gif}
                />
              </div>
            ))}
          </div>
          <NavLink
            to={`./stake`}
            className="text-[24px] text-[var(--light-green)] flex justify-end max-md:justify-center"
          >
            {">> "} SEE ALL {" <<"}
          </NavLink>
        </div>

        {/* ACTIVE POSITIONS */}
        <div className="overflow-x-auto w-full">
          <div className="min-w-[600px] bg-[var(--light-green)] text-black px-6">
            {">>> "}ACTIVE POSITIONS
          </div>
          <div className="min-w-[600px] border border-[var(--light-green)] p-6 flex-col gap-8 w-full max-md:p-4 ">
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
        <span className="text-3xl text-[var(--light-green)] w-full text-center">
          {">>>>>"}
        </span>
        {/* INTRODUCING PILLS */}
        <div className="w-full flex gap-6 justify-between max-md:flex-col">
          <div className="w-[60%] text-[var(--dark-green)] max-md:w-full">
            <h1 className="bg-[var(--light-green)] inline-block text-black text-[40px] mb-8 max-md:text-[28px]">
              INTRODUCING PILLS
            </h1>
            <p className="text-[var(--dark-green)] mb-8">
              THE AMOUNT OF{" "}
              <span className="text-[var(--light-green)]">RED PILLS</span> YOU
              HOLD SIGNIFY HOW DEEP YOU ARE WITHIN THE MAITRIX. THE PILLS YOU{" "}
              <span className="text-[var(--light-green)]">HOLD</span> WILL BE
              CONVERTED TO <span className="text-[var(--light-green)]">$</span>
              <span className="text-[var(--light-green)] bg-[var(--light-green)]">
                100000
              </span>
              , THE TOKEN THAT SUSTAINS THE MAITRIX.
            </p>
            <img src={hand} alt="" className="mb-8 w-full" />
          </div>
          <div className="w-[40%] flex flex-col gap-10 max-md:w-full">
            <div className="gap-4 flex flex-col">
              <div className="relative px-4 py-2 text-lg bg-transparent ">
                <span className="absolute top-0 left-0 w-6 h-full border-t-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute top-0 right-0 w-6 h-full border-t-1 border-r-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 left-0 w-6 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 right-0 w-6 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
                <div className="flex flex-col w-full gap-2 justify-between text-center items-center h-full">
                  <div className="m-4 flex flex-col gap-4">
                    <p className="text-[var(--light-green)] text-[20px]">
                      // NATIVE TOKEN STAKING...
                    </p>
                    <p className="text-[12px]">
                      5 PILLS PER NATIVE TOKEN STAKED PER DAY.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative px-4 py-2 text-lg bg-transparent ">
                <span className="absolute top-0 left-0 w-6 h-full border-t-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute top-0 right-0 w-6 h-full border-t-1 border-r-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 left-0 w-6 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 right-0 w-6 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
                <div className="flex flex-col w-full gap-2 justify-between text-center items-center h-full">
                  <div className="m-4 flex flex-col gap-4">
                    <p className="text-[var(--light-green)] text-[20px]">
                      // STABLECOIN STAKING...
                    </p>
                    <p className="text-[12px]">
                      10 PILLS PER STABLECOIN STAKED PER DAY.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative px-4 py-2 text-lg bg-transparent ">
                <span className="absolute top-0 left-0 w-6 h-full border-t-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute top-0 right-0 w-6 h-full border-t-1 border-r-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 left-0 w-6 h-3 border-b-1 border-l-1 border-[#00f61d]"></span>
                <span className="absolute bottom-0 right-0 w-6 h-3 border-b-1 border-r-1 border-[#00f61d]"></span>
                <div className="flex flex-col w-full gap-2 justify-between text-center items-center h-full">
                  <div className="m-4 flex flex-col gap-4">
                    <p className="text-[var(--light-green)] text-[20px]">
                      // LP TOKEN STAKING...
                    </p>
                    <p className="text-[12px]">
                      25 POINTS PER 1 USD WORTH OF LIQUIDITY PROVIDED
                    </p>
                    <p className="text-[12px] bg-[var(--light-green)] text-black inline-block">
                      COMING SOON
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
