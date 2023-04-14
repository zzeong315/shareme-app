import React from "react";
import { useForm } from "react-hook-form";
import AvatarRadio from "../../components/avatarRadio";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

interface EditForm {
  avatar: string;
  name: string;
}

const Edit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditForm>();
  const onValid = (data: EditForm) => {
    console.log(data);
  };
  return (
    <Layout hasTabBar>
      <h1 className="mt-8 text-darkgray font-semibold text-2xl text-center">
        정보 수정
      </h1>
      <form onSubmit={handleSubmit(onValid)} className="p-5 mt-4">
        <div>
          <AvatarRadio
            register={register("avatar")}
          />
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
            placeholder={"Enter Your Name"}
            type={"text"}
          />
          <p className="text-red-400 mt-1 mr-2 text-right text-sm">
            {errors?.name?.message}
          </p>
        </div>
        <Button text={"SUBMIT"} addClassName={"from-myyellow to-myblue mt-8"} />
      </form>
    </Layout>
  );
};

export default Edit;
