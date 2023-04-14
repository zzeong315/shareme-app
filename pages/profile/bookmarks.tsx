import { Post, User } from "@prisma/client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import FloationgButton from "../../components/floating-button";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    bookmarks: number;
    Fav: number;
  };
}

interface BookmarkResponse {
  ok: boolean;
  bookmarks: [Post: PostWithUser];
}

const Bookmarks = () => {
  const { data } = useSWR<BookmarkResponse>("/api/user/me/bookmarks");
  console.log(data);
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
