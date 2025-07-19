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
  { rank: 1, wallet: "0xA1B2...C3D4", totalStakes: "18,450,000" },
  { rank: 2, wallet: "0xE5F6...G7H8", totalStakes: "15,320,000" },
  { rank: 3, wallet: "0xI9J0...K1L2", totalStakes: "12,780,000" },
  { rank: 4, wallet: "0xM3N4...O5P6", totalStakes: "9,500,000" },
  { rank: 5, wallet: "0xQ7R8...S9T0", totalStakes: "7,100,000" },
  { rank: 6, wallet: "0xU1V2...W3X4", totalStakes: "6,800,000" },
  { rank: 7, wallet: "0xY5Z6...A7B8", totalStakes: "5,400,000" },
  { rank: 8, wallet: "0xC9D0...E1F2", totalStakes: "4,900,000" },
  { rank: 9, wallet: "0xG3H4...I5J6", totalStakes: "3,700,000" },
  { rank: 10, wallet: "0xK7L8...M9N0", totalStakes: "2,500,000" },
];

function Leaderboard({ positionTitle }) {
  return (
    <div>
      <div>{positionTitle}</div>
      <div className="flex w-full px-4 py-2 bg-[var(--light-green)] text-black">
        <div className="w-[20%]">RANK</div>
        <div className="w-[40%] ml-6">WALLET</div>
        <div className="w-[40%] ml-6">TOTAL YEILD</div>
      </div>
      {POSITIONS.map((position) => (
        <div
          key={position.rank}
          className="flex w-full border-b border-dashed border-gray-700 px-4 py-6"
        >
          <div className="w-[20%] border-r border-dashed border-gray-700">
            {position.rank}
          </div>
          <div className="w-[40%] border-r border-dashed border-gray-700 ml-6">
            {position.wallet}
          </div>
          <div className="w-[40%] ml-6 flex gap-2">
            <img src={pill} alt="" />
            {position.totalStakes} PILLS
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;
