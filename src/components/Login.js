import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const FirstName = useRef(null);
  const LastName = useRef(null);
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      FirstName.current.value,
      LastName.current.value
    );
    //console.log(message);
    //console.log(email, password);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //SignIn logic
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          src="/bg_logo_app.png"
          alt="bg"
          className="object-cover w-full h-full"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-70 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={FirstName}
              type="text"
              placeholder="First Name"
              className="p-4 my-4 w-full bg-gray-500"
            />
            <input
              ref={LastName}
              type="text"
              placeholder="Last Name"
              className="p-4 my-4 w-full bg-gray-500"
            />
          </div>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500"
        />
        {!isSignInForm && (
          <input
            ref={password}
            type="password"
            placeholder="Re-enter Password"
            className="p-4 my-4 w-full bg-gray-500"
          />
        )}
        <p className="text-red-600 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to KStreamX? Sign up Now"
            : "Already a member Sign In Now. "}
        </p>
      </form>
    </div>
  );
};

export default Login;
