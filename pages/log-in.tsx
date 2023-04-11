import Link from "next/link";
import React from "react";
import { LogoIcon } from "../components/icons/logo";

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full h-[100vh] p-10 bg-white">
      <div className="mb-14">
        <LogoIcon width="100" height="80" />
      </div>
      <h1 className="mb-8 text-darkgray font-semibold text-3xl">LOGIN</h1>
      <div className="w-full">
        <div className="w-full space-y-4">
          <div className="p-1 rounded-2xl w-full bg-gradient-to-r from-myyellow via-mypink to-mygreen">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              className="p-3 w-full rounded-xl focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="p-1 rounded-2xl w-full bg-gradient-to-r from-myyellow via-mypink to-mygreen">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="p-3 w-full rounded-xl focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
        </div>
        <button className="rounded-xl bg-gradient-to-r from-mypink to-myyellow w-full mt-8 hover:scale-105">
          <span className="block text-white px-4 py-2 font-bold rounded-full w-full text-lg">
            LOG IN
          </span>
        </button>
      </div>
      <Link href={"/create-account"}>
        <button className="rounded-xl bg-gradient-to-r from-myemerald  to-myblue w-full mt-2 hover:scale-105">
          <span className="block text-white px-4 py-2 font-bold rounded-full w-full text-lg">
            SIGN UP
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Login;
