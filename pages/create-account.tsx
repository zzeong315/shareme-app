import Link from "next/link";
import React from "react";
import Button from "../components/button";
import { LogoIcon } from "../components/icons/logo";
import Input from "../components/input";

const CreateAccount = () => {
  return (
    <div className="flex flex-col items-center w-full h-[100vh] py-10 px-5 bg-white">
      <div className="mb-14">
        <LogoIcon width="100" height="80" />
      </div>
      <h1 className="mb-8 text-darkgray font-semibold text-3xl">SIGN UP</h1>
      <div className="w-full">
        <div className="w-full space-y-6">
          <Input
            label={"Name"}
            name={"name"}
            required={true}
            placeholder={"Enter Your Name"}
            type={"name"}
          />
          <Input
            label={"Email"}
            name={"email"}
            required={true}
            placeholder={"Enter Your Email"}
            type={"email"}
          />
          <Input
            label={"Password"}
            name={"password"}
            required={true}
            placeholder={"Enter Your Password"}
            type={"password"}
          />
          <Input
            label={"Password"}
            name={"password"}
            required={true}
            placeholder={"Enter Your Password Agian"}
            type={"password"}
          />
        </div>
        <Button text={"SIGN UP"} addClassName={"from-myemerald to-myblue mt-8"}/>
      </div>
      <Link href="/log-in">
      <Button text={"LOG IN"} addClassName={"from-mypink to-myyellow mt-2"}/>
      </Link>
    </div>
  );
};

export default CreateAccount;
