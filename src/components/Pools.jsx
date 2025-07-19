import React from "react";
import vana from "../assets/img/vana.png";
import usd1 from "../assets/img/USD1.png";
import ausd from "../assets/img/ausd.png";
import pill from "../assets/img/pill-icon.svg";
import og from "../assets/img/og-img.png";
import lvlusd from "../assets/img/lvl.png";
import ousd from "../assets/img/ousd.png";
import vusd from "../assets/img/virtual.png";
import azusd from "../assets/img/aiiz.png";
import usde from "../assets/img/usde.png";
import stATH from "../assets/img/stATH.png";
import Button from "./Button";

const POSITIONS = [
  {
    asset: "0USD",
    position: "18,450,000",
    earn: "6,696.00",
    img: ousd,
    price: "1.23",
  },
  {
    asset: "AUSD",
    position: "27,320,000",
    earn: "10,196.00",
    img: ausd,
    price: "1.87",
  },
  {
    asset: "VANAUSD",
    position: "12,780,000",
    earn: "3,976.00",
    img: vana,
    price: "1.45",
  },
  {
    asset: "azUSD",
    position: "9,500,000",
    earn: "3,094.00",
    img: azusd,
    price: "1.67",
  },
  {
    asset: "USDe",
    position: "22,100,000",
    earn: "4,160.00",
    img: usde,
    price: "1.09",
  },
  {
    asset: "LVLUSD",
    position: "15,600,000",
    earn: "4,130.00",
    img: lvlusd,
    price: "1.54",
  },
  {
    asset: "vUSD",
    position: "3,200,000",
    earn: "2,856.00",
    img: vusd,
    price: "1.78",
  },
];

function Pools({ positionTitle }) {
  return (
    <div>
      <div>{positionTitle}</div>
      {POSITIONS.map((position) => (
        <div className="flex w-full border-b border-dashed border-gray-700 px-4">
          <div className="flex gap-2 items-center my-6  w-[33%] border-gray-700 border-r border-dashed justify-between">
            <div className="flex items-center gap-2 w-70%">
              <img src={position.img} alt="" className="w-[30px]" />
              <p>{position.asset}</p>
            </div>
            <p className="w-[30%] border-l border-dashed border-gray-700 pl-4 h-full flex items-center">
              {position.price}
            </p>
          </div>
          <div className="flex gap-2 items-center my-6 justify-start w-[33%] pl-4 border-gray-700 border-r border-dashed ">
            <img src={pill} alt="" />
            <p className="">{position.earn} PILLS</p>
          </div>
          <div className="flex gap-0 items-center my-6 justify-between pl-4 w-[33%] ">
            <div className="flex flex-col">
              <p>{position.position}</p>
              <p className="text-gray-700">
                {position.position} {position.asset}
              </p>
            </div>
            <Button name="STAKE" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Pools;
