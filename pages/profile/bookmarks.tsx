import { Post, User } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import FloationgButton from "../../components/floating-button";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";
import getUserCheck from "../../lib/useGetCheck";
import useUser from "../../lib/useUser";

export interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    bookmarks: number;
    Fav: number;
  };
}

export interface BookmarkResponse {
  ok: boolean;
  bookmarks: [Post: PostWithUser];
}

const Bookmarks = () => {
  const user = useUser();
  const { data, error } = useSWR<BookmarkResponse>("/api/user/me/bookmarks");
  useEffect(() => {
    if(error) {
      alert("에러가 발생하였습니다. 다시 시도하여 주세요.")
    };
  }, [error]);
  return (
    <Layout hasTabBar>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-myemerald to-myblue p-3 text-white font-semibold text-xl">
          My BookMarks
        </h1>
        <div>
        {data?.bookmarks?.map((post: any) => (
            <Link href={`/tweet/${post.post.id}`} key={post.post.id}>
              <a>
                <Tweet
                  content={post.post.content}
                  time={post.post.createdAt.toString()}
                  id={post.post.id}
                  avatar={post.post.user.avatar}
                  name={post.post.user.name}
                  favs={post.post._count.Fav}
                  answers={post.post._count.answers}
                  hasFav={getUserCheck(post?.post?.Fav, user?.user?.id!)}
                  hasBookmark={post.userId === user?.user?.id!}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <FloationgButton />
    </Layout>
  );
};

export default Bookmarks;