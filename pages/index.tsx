import { Bookmark, Post, User } from "@prisma/client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import FloationgButton from "../components/floating-button";
import Layout from "../components/layout";
import Tweet from "../components/tweet";
import getUserCheck from "../lib/useGetCheck";
import useUser from "../lib/useUser";

interface PostWithUser extends Post {
  user: User;
  Fav: number[];
  bookmarks: Bookmark;
  _count: {
    bookmarks: number;
    answers: number;
    Fav: number;
  };
}

interface PostsResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const Home = () => {
  const user = useUser();
  const { data } = useSWR<PostsResponse>("/api/posts");
  
  return (
    <Layout hasTabBar>
      <div>
        {data?.posts?.map((post) => (
          <Link href={`/tweet/${post.id}`} key={post.id}>
            <a>
              <Tweet 
                content={post.content}
                time={post.createdAt.toString()}
                id={post.id}
                avatar={post.user.avatar}
                name={post.user.name}
                favs={post._count.Fav}
                answers={post._count.answers}
                hasFav={getUserCheck(post.Fav, user?.user?.id!)}
                hasBookmark={getUserCheck(post.bookmarks, user?.user?.id!)}           
              />
            </a>
          </Link>
        ))}
      </div>
      <FloationgButton />
    </Layout>
  );
};

export default Home;
