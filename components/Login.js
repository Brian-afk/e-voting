import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center space-y-4 w-full">
        <div>hi</div>
        <button
          onClick={authenticate}
          className="bg-white rounded-lg p-5 font-bold animate-pulse text-black"
        >
          Login to the PORTAL
        </button>
      </div>
      <div className="w-full h-screen bg-orange-500"></div>
    </div>
  );
}

export default Login;
