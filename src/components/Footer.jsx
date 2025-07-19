import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="my-20 flex flex-col gap-10 max-lg:my-10">
      <div className="flex items-center gap-2 justify-between">
        <p className="text-gray-500">&copy; 2025 MAITRIX</p>
        <div className="flex gap-2">
          <Button name="DOCS" />
          <Button name="BLOG" />
        </div>
      </div>
      <p className="text-[12px] text-[var(--dark-green)]">
        *THE <span className="text-[var(--light-green)]">X2 BONUS</span> APPLIES
        EXCLUSIVELY TO <span className="text-[var(--light-green)]">PILLS </span>
        AND DOES NOT APPLY TO AUSD REWARDS. <br /> <br />
        *ALL <span className="text-[var(--light-green)]">FUNDS</span> IN THIS
        TESTNET ARE FOR{" "}
        <span className="text-[var(--light-green)]">TESTING PURPOSES</span>{" "}
        ONLY. THEY DO <span className="text-[var(--light-green)]">NOT</span>{" "}
        REPRESENT <span className="text-[var(--light-green)]">REAL ASSETS</span>{" "}
        OR HOLD ANY REAL-WORLD VALUE.
      </p>
    </div>
  );
}

export default Footer;
