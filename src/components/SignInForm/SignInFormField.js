import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Auth, dataBase } from "../Firebase/Firebase.js";
import { doc, setDoc } from "firebase/firestore";

function SignInFormField({ signin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const emailSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signin) {
        const login = await signInWithEmailAndPassword(Auth, email, password);
        navigate("/dashboard");
        localStorage.setItem("accessTocon", JSON.stringify(login.user.uid));
      } else {
        const newUser = await createUserWithEmailAndPassword(
          Auth,
          email,
          password
        );
        navigate("/dashboard");
        localStorage.setItem("accessTocon", JSON.stringify(newUser.user.uid));
        const user = Auth.currentUser;
        if (user) {
          await setDoc(doc(dataBase, "users", user.uid), {
            name: name,
            email: email,
            password: password,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute px-12 py-8 left-2/4 top-2/4 justify-center flex bg-black bg-opacity-70  text-white rounded-md w-1/3 -translate-x-2/4 -translate-y-2/4">
      <form action="" className="bg-transparent" onSubmit={emailSubmit}>
        <h1 className="text-white font-bold text-4xl my-5">
          {signin ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!signin && (
          <input
            className="w-full p-3 border-gray-500 border my-2 bg-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Full name "
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          className="w-full p-3 border-gray-500 border my-2 bg-transparent"
          type="text"
          name="email"
          id="email"
          placeholder="Email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 border-gray-500 border my-2 bg-transparent"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-[red] p-2.5  my-3 text-white font-bold">
          {signin ? "Sign In" : "Sign Up"}
        </button>

        {signin && (
          <>
            {" "}
            <h1 className="text-center cursor-pointer">Forgot Password</h1>
            <p className="inline-block text-gray-400 font-medium my-3">
              New to Netflix?{" "}
              <span
                className="inline-block font-semibold cursor-pointer text-white"
                onClick={() => navigate("/")}
              >
                Sign up now.
              </span>
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default SignInFormField;
