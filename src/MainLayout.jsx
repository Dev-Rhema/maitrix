import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="text-white mt-28 px-10 pt-24 flex-col flex justify-center max-sm:px-4 max-lg:mt-12  max-lg:pt-16">
        <Outlet />
        <Footer />
        <MobileNav />
      </main>
    </>
  );
}

export default MainLayout;
