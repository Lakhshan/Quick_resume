import React from "react";
import resumeLogo from "../imgs/Quick Résumé.webp";
export function Header() {
  return (
    < >
      <div className="w-[200px] shadow-lg shadow-gray-400 flex flex-col items-center h-[400px] rounded-lg bg-white"  style={{boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
        <img src={resumeLogo} alt="Logo " width={"100px"} className="cursor-pointer m-10"/>
        <h1 className="font-bold font-serif">RESUME</h1>
        <h2 className="font-bold font-serif">GENERATOR</h2>
        <div className="mt-[200px] mb-10">
        </div>
      </div>
    </>
  );
}
