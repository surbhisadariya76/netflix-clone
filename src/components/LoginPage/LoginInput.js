import React from "react";
import SignInFormField from "../SignInForm/SignInFormField.js";

export default function LoginInput({ signin }) {
  return (
    <div
      className=" h-[120vh] relative"
      style={{ backgroundImage: `url('./images/backgroundImage.jpg')` }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 m-0 "
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0,1 ) 100%)",
        }}
      ></div>
      <SignInFormField signin={signin} />
    </div>
  );
}
