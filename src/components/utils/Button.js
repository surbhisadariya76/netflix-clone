import React from "react";

export default function Button() {
  return (
    <button className="bg-red-600 text-white flex text-2xl font-semibold p-3 items-center rounded-md">
      Get Started <img className="ml-2" src="./images/arrow.svg" alt="arrow" />
    </button>
  );
}
