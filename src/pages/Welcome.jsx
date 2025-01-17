import React from "react";
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
export default function Welcome() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden">
      <div className="welcome-card">
        <div className="relative w-[500px] sm:w-[550px] group transition-all duration-700 aspect-video flex items-center justify-center">
          <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-[#bebae0] w-full h-full absolute group-hover:-translate-y-16">
            <p className="text-xl sm:text-2xl font-semibold text-[#160a33] font-serif">
              Welcome to 
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-[#160a33] font-serif">
             The Visual Chess
            </p>
            <p className="px-10 text-[10px] sm:text-[12px] text-[#160a33]">
              We're thrilled to have you here. 
            </p>
            <p className="font-serif text-[10px] sm:text-[12px] text-[#160a33]">
            Take a moment to explore our
              services and offerings.
            </p>
            <Link to="/home" className="bg-[#160a33] text-[#bebae0] mt-2 rounded-md w-35 border-4 border-[#bebae0] py-2 px-4 font-semibold text-sm hover:bg-[#160a33] hover:text-[#bebae0] hover:border-[#bebae0] transition-all duration-300 ease-in-out">
    Explore Us
</Link>
          </div>
          <button className="bg-[#160a33] text-[#bebae0] w-20 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-[#bebae0]">
            <img src={Logo} alt="Logo" />
          </button>
          <div className="tp transition-all duration-1000 group-hover:duration-100 bg-[#160a33] absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
          <div className="lft transition-all duration-700 absolute w-full h-full bg-[#160a33] [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
          <div className="rgt transition-all duration-700 absolute w-full h-full bg-[#160a33] [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
          <div className="btm transition-all duration-700 absolute w-full h-full bg-[#160a33] [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
        </div>
      </div>
    </div>
  );
}
