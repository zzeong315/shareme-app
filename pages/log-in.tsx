import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../components/button";
import { LogoIcon } from "../components/icons/logo";
import Input from "../components/input";
import useMutation from "../lib/useMutation";

interface LoginForm {
  email: string;
  password: string;
  loginError?: string;
}

const Login = () => {
  const router = useRouter();
  const [login, { loading, data }] = useMutation("/api/user/confirm");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<LoginForm>();
  const onValid = (data:LoginForm) => {
    login(data);
    reset();
  }
  useEffect(() => {
    if (data?.ok) {
      router.push(`/`);
    } 
    if (data?.ok === false) {
      setError('loginError', { message: '회원정보를 확인해주세요.' });
    }
  }, [data, router]);
  // console.log(loading, data);
  return (
    <div className="flex flex-col items-center w-full h-[100vh] py-10 px-5 bg-white">
      <div className="mb-14">
        <LogoIcon width="100" height="80" />
      </div>
      <h1 className="mb-8 text-darkgray font-semibold text-3xl">LOGIN</h1>
      <form onSubmit={handleSubmit(onValid)} className="w-full">
        <div className="w-full space-y-4">
          <div>
            <Input
              register={register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "잘못된 이메일 형식입니다.",
                },
              })}
              label={"Email"}
              name={"email"}
              required={true}
              placeholder={"이메일을 입력해주세요"}
              type={"email"}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.email?.message}
            </p>
          </div>
          <div>
            <Input
              register={register("password", {
                required: true,
                minLength: { value: 8, message: "8자 이상 입력해주세요." },
              })}
              label={"Password"}
              name={"password"}
              required={true}
              placeholder={"비밀번호를 입력해주세요"}
              type={"password"}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.password?.message}
            </p>
          </div>
          <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.loginError?.message}
            </p>
        </div>
        <Button text={"로그인"} addClassName={"from-mypink to-myyellow mt-8"} />
      </form>
      <Link href={"/create-account"}>
        <a className="w-full">
          <Button
            text={"회원가입"}
            addClassName={"from-myemerald to-myblue mt-2"}
          />
        </a>
      </Link>
    </div>
  );
};

export default Login;
