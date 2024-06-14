import { signOut } from "firebase/auth";
import React from "react";
import { Auth } from "../Firebase/Firebase.js";
import { Navigate } from "react-router-dom";

function BackAndSignOutHeader({ trailer }) {
  const handleSignOut = async () => {
    try {
      await signOut(Auth).then(() => {
        localStorage.removeItem("accessTocon");
        Navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex justify-between  items-center  sticky top-0 z-30 ${
        trailer ? "bg-[#EEEEEE] px-20" : "bg-black px-12"
      }`}
    >
      <button
        onClick={() => window.history.back()}
        type="button"
        className="py-3 px-6 bg-gradient-to-r from-[#395790] to-[#182657]  text-white flex justify-center items-center bg-slate-300 rounded-3xl z-30"
      >
        GO BACK
        <i className="fa-solid fa-backward ms-4"></i>
      </button>
      <button
        className="z-30 text-white px-5 py-3  rounded-3xl bg-gradient-to-r from-[#EA5B67] to-[#F1A180] flex justify-center items-center m-3"
        onClick={handleSignOut}
      >
        <i className="fa-solid fa-arrow-right-from-bracket me-3"></i>SIGN OUT{" "}
      </button>
    </div>
  );
}

export default BackAndSignOutHeader;
