import { Answer, Post, User } from "@prisma/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import AnswerCompo from "../../components/answer";
import AvatarCompo from "../../components/avatar";
import Button from "../../components/button";
import { BookMarkIcon } from "../../components/icons/bookmark";
import { HeartIcon } from "../../components/icons/heart";
import { ReplyIcon } from "../../components/icons/reply";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";
import { timeChanger } from "../../lib/timeChanger";
import useMutation from "../../lib/useMutation";

interface AnswerForm {
  answer: string;
}

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    bookmarks: number;
    Fav: number;
  };
  answers: AnswerWithUser[];
}

interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  hasBookmark: boolean;
  hasFav: boolean;
}

interface AnswerResponse {
  ok: boolean;
  response: Answer;
}

const TweetDetail = () => {
  const router = useRouter();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [fav] = useMutation(`/api/posts/${router.query.id}/fav`);
  const [bookmark] = useMutation(`/api/posts/${router.query.id}/bookmark`);
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
  useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);
  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AnswerForm>();
  const onValid = (data: AnswerForm) => {
    if (answerLoading) return;
    sendAnswer(data);
  };
  const onFavClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            Fav: data.hasFav
              ? data?.post._count.Fav - 1
              : data?.post._count.Fav + 1,
          },
        },
        hasFav: !data.hasFav,
      },
      false
    );
    fav({});
  };
  const onBookmarkClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            bookmarks: data.hasBookmark
              ? data?.post._count.bookmarks - 1
              : data?.post._count.bookmarks + 1,
          },
        },
        hasBookmark: !data.hasBookmark,
      },
      false
    );
    bookmark({});
  };
  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);
  return (
    <Layout hasTabBar canGoBack>
      <div>
        <div className="flex flex-col justify-between border-lightgray border-b px-4 pt-5 pb-2">
          <div className="flex items-center">
            <AvatarCompo avatar={data?.post?.user?.avatar!} addClassName={"w-6 h-6 mb-1 mr-1"} />
            <span className="m-1 font-semibold text-lg">
              {data?.post?.user?.name}
            </span>
          </div>
          <div className="my-3 text-base">{data?.post?.content}</div>
          <div className="text-sm">{timeChanger(data?.post?.createdAt.toString()!, "allDate")}</div>
        </div>
        <div className="flex justify-between border-lightgray border-b py-[5px] px-4">
          <div className="flex space-x-3 ">
            <div className="flex space-x-1 items-center">
              <span>
                <ReplyIcon className="w-6 h-6 mb-1" />
              </span>
              <span>{data?.post?._count?.answers}</span>
            </div>
            <div className="flex space-x-1 items-center">
              <span onClick={onFavClick}>
                <HeartIcon
                  className="w-6 h-6 mb-1"
                  strokeWidth="1.5"
                  fillColor={data?.hasFav ? "pink" : "none"}
                />
              </span>
              <span>{data?.post?._count?.Fav}</span>
            </div>
          </div>
          <div className="flex items-center" onClick={onBookmarkClick}>
            <BookMarkIcon
              className="w-6 h-6 mb-1"
              strokeWidth="1.5"
              fillColor={data?.hasBookmark ? "skyblue" : "none"}
            />
          </div>
        </div>
        {data?.post?.answers?.map((post) => (
          <AnswerCompo key={post.id} answer={post.answer} name={post.user.name} avatar={post.user.avatar}/>
        ))}
      </div>
      <form onSubmit={handleSubmit(onValid)} className="mt-4 px-4">
        <Textarea
          addClassName={"h-[20vh]"}
          placeholder="write your message..."
          required
          register={register("answer", {
            maxLength: {
              value: 50,
              message: "50자 이하 입력해주세요.",
            },
          })}
        />
        <p className="text-red-400 mt-1 mr-2 text-right text-sm">
          {errors?.answer?.message}
        </p>
        <Button text={"댓글 달기"} addClassName={"from-myyellow to-mygreen"} />
      </form>
    </Layout>
  );
};

export default TweetDetail;
