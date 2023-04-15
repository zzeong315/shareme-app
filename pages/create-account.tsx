import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AvatarRadio from "../components/avatarRadio";
import Button from "../components/button";
import { LogoIcon } from "../components/icons/logo";
import Input from "../components/input";
import useMutation from "../lib/useMutation";

interface SignupForm {
  avatar: string;
  name: string;
  email: string;
  password: string;
  comfirmPassword: string;
}
interface MutationResult {
  ok: boolean;
}

const CreateAccount = () => {
  const router = useRouter();
  const [enter, { loading, data, error }] = useMutation<MutationResult>("/api/user/enter");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignupForm>();
  const onValid = (data: SignupForm) => {
    enter(data);
    reset();
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/log-in`);
    }
  }, [data, router]);
  
  return (
    <div className="flex flex-col items-center w-full h-[100vh] py-10 px-5 bg-white">
      <div className="mb-14">
        <LogoIcon width="100" height="80" />
      </div>
      <h1 className="mb-8 text-darkgray font-semibold text-3xl">회원가입</h1>
      <form onSubmit={handleSubmit(onValid)} className="w-full">
        <div>
          <AvatarRadio register={register("avatar")} />
        </div>
        <div className="w-full space-y-6">
          <div>
            <Input
              register={register("name", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "2자 이상 입력해주세요.",
                },
                maxLength: {
                  value: 8,
                  message: "8자 이하 입력해주세요.",
                },
              })}
              label={"Name"}
              name={"name"}
              required={true}
              placeholder={"이름을 입력해주세요"}
              type={"name"}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.name?.message}
            </p>
          </div>
          <div>
            <Input
              register={register("email", {
                required: "이메일을 입력해주세요.",
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
                required: "비밀번호를 입력해주세요.",
                minLength: { value: 8, message: "8자 이상 입력해주세요." },
                // pattern: {
                //   value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                //   message: "숫자,특수문자,영문 포함 8자리 이상 적어주세요.",
                // },
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
          <div>
            <Input
              register={register("comfirmPassword", {
                required: "비밀번호를 한번 더 입력해 주세요",
                validate: (value) =>
                  watch("password") === value ||
                  "비밀번호가 일치하지 않습니다.",
              })}
              label={"ComfirmPassword"}
              name={"comfirmPassword"}
              required={true}
              placeholder={"비밀번호를 다시 입력해주세요"}
              type={"password"}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.comfirmPassword?.message}
            </p>
          </div>
        </div>

        <Button
          text={"회원가입"}
          addClassName={"from-myemerald to-myblue mt-8"}
        />
      </form>
      <Link href="/log-in">
        <a className="w-full">
          <Button
            text={"로그인"}
            addClassName={"from-mypink to-myyellow mt-2"}
          />
        </a>
      </Link>
    </div>
  );
};

export default CreateAccount;
