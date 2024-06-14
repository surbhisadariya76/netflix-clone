import React, { useState } from "react";
import { Questions } from "./../utils/Data.js";

export default function FreelyAskedQue() {
  const [index, setIndex] = useState(null);
  function collapse(index) {
    setIndex(index);
  }
  return (
    <>
      <div className="bg-black px-[10%] py-16 text-white">
        <h1 className="text-5xl font-bold mb-5 leading-[3.5rem] text-center pb-6">
          Frequently Asked Questions
        </h1>
        {Questions.map((question, i) => {
          return (
            <div className="mx-10" onClick={() => collapse(i)}>
              <div className="p-7 bg-gray-800 border-black border mt-2.5 flex justify-between items-center">
                <h1 className="text-2xl">{question.question}</h1>
                <img
                  className={`${i === index ? "rotate-45" : ""}`}
                  src="./images/plus.svg"
                  alt=""
                />
              </div>
              <div
                className={`p-7 bg-gray-800 border-black border ${
                  i === index ? "" : "hidden"
                }`}
              >
                {question.Answer.map((ans) => {
                  return <p className="text-2xl py-5">{ans}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
