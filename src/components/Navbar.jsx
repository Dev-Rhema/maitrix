import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import logoMobile from "../assets/img/logoMobile.svg";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa";

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

export default function Navbar() {
  return (
    <nav className="flex justify-between text-xl text-white fixed w-full top-0 left-0 px-10 py-6 bg-black z-1000 max-sm:px-4 ">
      <NavLink to={"/"} className={"flex items-center"}>
        <img src={logo} alt="" className="max-md:hidden" />
        <img src={logoMobile} alt="" className="hidden max-md:block" />
      </NavLink>
      <div className="flex gap-10 max-lg:hidden">
        {NAVLINKS.map((navlink) => (
          <NavLink
            key={navlink}
            to={`/${navlink.path}`}
            className={({ isActive }) =>
              isActive
                ? "text-[#00f61d] hover:text-[#00f61d] flex items-center hover:transition-colors duration-300 ease-in-out"
                : "text-white hover:text-[#00f61d] flex items-center hover:transition-colors duration-300 ease-in-out"
            }
          >
            {navlink.nav}
            {navlink.icon && <navlink.icon className="ml-1 text-[#00f61d]" />}
          </NavLink>
        ))}
      </div>
      <span className="max-lg:hidden">
        <Button name="CONNECT WALLET" />
      </span>
    </nav>
  );
}
