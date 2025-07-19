import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import logoMobile from "../assets/img/logoMobile.svg";
import Button from "./Button";

import { NavLink } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const NAVLINKS = [
  {
    nav: "HOME",
    options: {},
    path: "",
  },
  {
    nav: "MINT",
    icon: FaAngleDown,
    options: [
      {
        option: "AUSD",
      },
      {
        option: "vUSD",
      },
      {
        option: "VANAUSD",
      },
      {
        option: "azUSD",
      },
      {
        option: "0USD",
      },
    ],
    path: "mint",
  },
  {
    nav: "STAKE",
    options: {},
    path: "stake",
  },
  {
    nav: "EARN",
    options: {},
    path: "earn",
  },
  {
    nav: "FAUCET",
    icon: FaAngleDown,
    options: [
      {
        option: "USD1",
      },
      {
        option: "USDe",
      },
      {
        option: "LVLUSD",
      },
      {
        option: "0G",
      },
      {
        option: "ai16z",
      },
      {
        option: "ATH",
      },
      {
        option: "VANA",
      },
      {
        option: "VIRTUAL",
      },
      {
        option: "stATH",
      },
    ],
    path: "faucet",
  },
];

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      {!open && (
        <div className="lg:hidden fixed top-6 right-6 z-[10001]">
          <button onClick={() => setOpen(true)}>
            <FaBars className="text-2xl text-[var(--light-green)]" />
          </button>
        </div>
      )}

      {/* Mobile Nav Overlay */}
      {open && (
        <nav className="fixed inset-0 w-full h-full z-[10000] bg-black flex flex-col gap-10 text-xl text-white px-10 py-6 max-sm:px-4">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" className="hidden" />
            <img src={logoMobile} alt="" className="max-md:block" />

            <button onClick={() => setOpen(false)}>
              <FaTimes className="text-2xl text-[var(--light-green)]" />
            </button>
          </div>
          <div className="flex flex-col">
            {NAVLINKS.map((navlink) => (
              <NavLink
                key={navlink.nav}
                to={`/${navlink.path}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#00f61d] hover:text-[#00f61d] flex items-center justify-between w-full hover:transition-colors duration-300 ease-in-out border-b pb-6 mb-6"
                    : "text-white hover:text-[#00f61d] flex items-center hover:transition-colors duration-300 justify-between w-full ease-in-out pb-4 mb-4"
                }
              >
                <p>{navlink.nav}</p>
                <p>
                  {navlink.icon && (
                    <navlink.icon className="ml-1 text-[#00f61d]" />
                  )}
                </p>
              </NavLink>
            ))}
          </div>
          <Button name="CONNECT WALLET" />
        </nav>
      )}
    </>
  );
}

export default MobileNav;
