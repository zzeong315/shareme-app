import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AvatarRadio from "../../components/avatarRadio";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";

interface EditForm {
  avatar: string;
  name: string;
  email: string;
  password: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const Edit = () => {
  const router = useRouter();
  const user = useUser();
  const [editProfile, {data, loading, error}] = useMutation<EditProfileResponse>(`/api/user/me`);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditForm>();
  const onValid = (data: EditForm) => {
    if (loading) return;
    editProfile(data);
  };
  useEffect(() => {
    if (user?.user?.avatar) setValue("avatar", user?.user?.avatar!);
    if (user?.user?.name) setValue("name", user?.user?.name!);
    if (user?.user?.email) setValue("email", user?.user?.email!);
    if (user?.user?.password) setValue("password", user?.user?.password!);
  }, [user, setValue]);
  useEffect(() => {
    if (data && data.ok) {
      router.push('/profile');
    }
  },[data, router]);
  useEffect(() => {
    if(error) {
      alert("에러가 발생하였습니다. 다시 시도하여 주세요.")
    };
  }, [error]);
  return (
    <Layout hasTabBar>
      <h1 className="mt-8 text-darkgray font-semibold text-2xl text-center">
        정보 수정
      </h1>
      <form onSubmit={handleSubmit(onValid)} className="p-5 mt-4">
        <div>
          <AvatarRadio register={register("avatar")} />
        </div>
        <div className="space-y-4">
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
              disabled={true}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.email?.message}
            </p>
          </div>
          <div>
            <Input
              register={register("name", {
                required: "이름을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "2자 이상 입력해주세요.",
                },
                maxLength: {
                  value: 10,
                  message: "10자 이하 입력해주세요.",
                },
              })}
              label={"Name"}
              name={"name"}
              required={true}
              placeholder={"이름을 입력해주세요"}
              type={"text"}
            />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">
              {errors?.name?.message}
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
        </div>
        <Button
          text={"수정하기"}
          addClassName={"from-myyellow to-myblue mt-8"}
        />
      </form>
    </Layout>
  );
};

export default Edit;
