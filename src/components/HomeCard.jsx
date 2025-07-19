import React from "react";
import pill from "../assets/img/pill-icon.svg";
import og from "../assets/img/og-img.png";
import usd1 from "../assets/img/USD1-gif.gif";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function HomeCard({ buttonName, img, name, multiplier, gif }) {
  return (
    <div className="w-full border-2 p-8 border-[var(--light-green)] h-full max-lg:p-6 max-md:p-4">
      <div className="flex justify-between mb-10 max-lg:flex-col-reverse">
        <div className="flex flex-col gap-4">
          <p className="text-[var(--light-green)] text-2xl">STAKING</p>
          <span className="flex gap-2 items-center">
            <img src={img} alt="" className="w-[24px]" />
            <p className="text-2xl">{name}</p>
          </span>
          <span className="text-[16px]">
            <p>REWARDS</p>
            <span className="flex gap-2 items-center">
              <img src={pill} alt="" />
              <p>PILLS</p>
              <div>
                <p className="bg-[var(--light-green)]  text-[12px] flex items-center text-black">
                  {multiplier}
                </p>
              </div>
            </span>
          </span>
        </div>
        <img src={gif} alt="" className="max-lg:mb-6" />
      </div>
      <div>
        <NavLink to={`./stake`}>
          <Button name={buttonName} />
        </NavLink>
      </div>
    </div>
  );
}

export default HomeCard;
