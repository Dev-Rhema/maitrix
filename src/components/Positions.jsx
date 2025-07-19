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

const POSITIONS = [
  {
    asset: "0USD",
    position: "28.00",
    earn: "6,696.00",
    img: ousd,
  },
  {
    asset: "AUSD",
    position: "22.85",
    earn: "10,196.00",
    img: ausd,
  },
  {
    asset: "VANAUSD",
    position: "15.12",
    earn: "3,976.00",
    img: vana,
  },
  {
    asset: "azUSD",
    position: "14.00",
    earn: "3,094.00",
    img: azusd,
  },
  {
    asset: "USDe",
    position: "13.00",
    earn: "4,160.00",
    img: usde,
  },
  {
    asset: "LVLUSD",
    position: "12.00",
    earn: "4,130.00",
    img: lvlusd,
  },
  {
    asset: "vUSD",
    position: "9.60",
    earn: "2,856.00",
    img: vusd,
  },
];

function Positions({ positionTitle }) {
  return (
    <div>
      <div>{positionTitle}</div>
      {POSITIONS.map((position) => (
        <div className="flex w-full border-b border-dashed border-gray-700 px-4">
          <div className="flex gap-2 items-center my-6 justify-start w-[33%] border-gray-700 border-r border-dashed">
            <img src={position.img} alt="" className="w-[30px]" />
            <p>{position.asset}</p>
          </div>
          <div className="flex gap-3 items-center my-6 justify-start pl-4 w-[33%] border-gray-700 border-r border-dashed ">
            <p>{position.position}</p>
            <p className="text-gray-700">({position.position})</p>
          </div>
          <div className="flex gap-2 items-center my-6 justify-start w-[33%] pl-4">
            <img src={pill} alt="" />
            <p className="">{position.earn} PILLS</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Positions;
