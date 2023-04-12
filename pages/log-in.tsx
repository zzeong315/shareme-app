import Link from "next/link";
import React from "react";
import Button from "../components/button";
import { LogoIcon } from "../components/icons/logo";
import Input from "../components/input";

const Login = () => {
  return (
    <div className="flex flex-col items-center w-full h-[100vh] py-10 px-5 bg-white">
      <div className="mb-14">
        <LogoIcon width="100" height="80" />
      </div>
      <h1 className="mb-8 text-darkgray font-semibold text-3xl">LOGIN</h1>
      <div className="w-full">
        <div className="w-full space-y-4">
          <Input label={"Email"} name={"email"} required={true} placeholder={"Enter Your Email"} type={"email"} />
          <Input label={"Password"} name={"password"} required={true} placeholder={"Enter Your Password"} type={"password"} />          
        </div>
        <Button text={"LOG IN"} addClassName={"from-mypink to-myyellow mt-8"}/>
      </div>
      <Link href={"/create-account"}>
        <a className="w-full">
        <Button text={"SIGN UP"} addClassName={"from-myemerald to-myblue mt-2"}/>
        </a>
      </Link>
    </div>
  );
};

export default Login;
