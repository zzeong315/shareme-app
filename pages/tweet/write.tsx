import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";
import useMutation from "../../lib/useMutation";
import useUser from "../../lib/useUser";

interface WriteForm {
  content: string;
}
interface WriteRosponse {
  ok: boolean;
  post: Post;
}

const Write = () => {
  const router = useRouter();
  const user = useUser();
  const { register, handleSubmit, formState:{errors}, reset } = useForm<WriteForm>();
  const [post, {loading, data}] = useMutation<WriteRosponse>("/api/posts");
  const onValid = (data: WriteForm) => {
    post(data);
    reset();
  };
  useEffect(() => {
    if (loading) return;
    if(data && data.ok) {
      router.push(`/tweet/${data.post.id}`)
    }
  },[data, router]);
  return (
    <Layout hasTabBar canGoBack>
      <div className="p-4 pt-6">
        <div className="flex items-center">
          <div className="bg-rose-300 rounded-full w-6 h-6 mb-1 mr-1"></div>
          <span className="m-1 font-semibold text-lg">{user?.user?.name}</span>
        </div>
        <form onSubmit={handleSubmit(onValid)}>
          <Textarea
            addClassName={"h-[60vh]"}
            placeholder="공유하고 싶은 메세지를 적어주세요..."
            required
            register={register("content", {
              maxLength: {
                value: 50,
                message: "50자 이하 입력해주세요.",
              },
            })}
          />
            <p className="text-red-400 mt-1 mr-2 text-right text-sm">{errors?.content?.message}</p>
            <Button text={"공유하기"} addClassName={"from-mygreen to-myorange mt-2"}/>          
        </form>
      </div>
    </Layout>
  );
};

export default Write;
