import React from "react";

export default function LoginVideoAndContentVideo({children }) {
  return (
    <>
      <div className="h-[500px] flex items-center bg-black ">
        <div className=" px-[10%] h-full flex items-center text-white w-full">
          {children}
        </div>
      </div>
    </>
  );
}
