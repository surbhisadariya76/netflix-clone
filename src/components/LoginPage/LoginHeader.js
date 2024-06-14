import React from "react";
import { useNavigate } from "react-router-dom";

const LoginHeader = ({ signin }) => {
  const navigate = useNavigate();

  function handleNavigateForSinup() {
    navigate("/signin");
  }
  function handleNavigateForSinin() {
    navigate("/");
  }

  return (
    <div className="z-10 w-full absolute top-0 py-5 xl:px-40 md:px-24 sm:px-14 px-6   flex justify-between items-center">
      <div className=" h-10  ">
        <img
          className="h-full w-auto "
          src="/images/netflixLogo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex items-center h-full gap-2  px-3 py-1.5 border-2 rounded-lg">
          <img
            className="h-full"
            src="/images/language.svg"
            alt="Language icon"
          />
          <select
            className="bg-transparent text-white"
            name="language"
            id="language"
          >
            <option className="text-black" value="English">
              English
            </option>
            <option className="text-black" value="हिंदी">
              हिंदी
            </option>
          </select>
        </div>

        <button
          className="font-bold text-sm m-1 text-white px-4  py-1 rounded-lg bg-red-600"
          onClick={signin ? handleNavigateForSinin : handleNavigateForSinup}
        >
          {signin ? "sign up" : "sign in "}
        </button>
      </div>
    </div>
  );
};

export default LoginHeader;
