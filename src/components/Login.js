import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/US-en-20250609-TRIFECTA-perspective_bf732f5c-4fad-4035-9f96-79f38c9579a8_large.jpg"
          alt="bg"
        />
      </div>
      <form className="p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-500"
            />
            <input
              type="text"
              placeholder="last Name"
              className="p-4 my-4 w-full bg-gray-500"
            />
          </div>
        )}

        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Re-enter Password"
            className="p-4 my-4 w-full bg-gray-500"
          />
        )}
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now"
            : "Already a member Sign In Now. "}
        </p>
      </form>
    </div>
  );
};

export default Login;
