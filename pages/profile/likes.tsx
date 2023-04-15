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

export interface FavResponse {
  ok: boolean;
  favs: [Post: PostWithUser];
}

const Likes = () => {
  const user = useUser();
  const { data, error } = useSWR<FavResponse>("/api/user/me/favs");
  useEffect(() => {
    if(error) {
      alert("에러가 발생하였습니다. 다시 시도하여 주세요.")
    };
  }, [error]);
  return (
    <Layout hasTabBar>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-mypink to-myorange p-3 text-white font-semibold text-xl">
          My Likes
        </h1>
        <div>
          {data?.favs?.map((post: any) => (
            <Link href={`/tweet/${post.Post.id}`} key={post.Post.id}>
              <a>
                <Tweet
                  content={post.Post.content}
                  time={post.Post.createdAt.toString()}
                  id={post.Post.id}
                  avatar={post.Post.user.avatar}
                  name={post.Post.user.name}
                  favs={post.Post._count.Fav}
                  answers={post.Post._count.answers}
                  hasFav={post.userId === user?.user?.id!}
                  hasBookmark={getUserCheck(post?.Post?.bookmarks, user?.user?.id!)}
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

export default Likes;