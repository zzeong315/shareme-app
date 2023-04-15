import { Post, User } from "@prisma/client";
import Link from "next/link";
import React, { useEffect } from "react";
import useSWR from "swr";
import AvatarCompo from "../../components/avatar";
import { BookMarkIcon } from "../../components/icons/bookmark";
import { HeartIcon } from "../../components/icons/heart";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";
import getUserCheck from "../../lib/useGetCheck";
import useUser from "../../lib/useUser";
import { BookmarkResponse } from "./bookmarks";
import { FavResponse } from "./likes";

interface PostWithUser extends Post {
  user: User;
  _count: {
    bookmarks: number;
    Fav: number;
  };
}

interface PostResponse {
  ok: boolean;
  posts: PostWithUser[];
}

const Profile = () => {
  const user = useUser();
  const { data, error } = useSWR<PostResponse>("/api/user/me/shares");
  const { data : favData } = useSWR<FavResponse>("/api/user/me/favs");
  const { data : bookmarkData } = useSWR<BookmarkResponse>("/api/user/me/bookmarks");
  useEffect(() => {
    if(error) {
      alert("에러가 발생하였습니다. 다시 시도하여 주세요.")
    };
  }, [error]);
  return (
    <Layout hasTabBar>
      <div className="flex flex-col pt-8 pb-4 px-4">
        <div className="flex items-center mb-6">
          <AvatarCompo avatar={user?.user?.avatar!} addClassName={"w-10 h-10 mb-1 mr-1"} />
          <span className="m-1 font-semibold text-2xl">{user?.user?.name}</span>
          <Link href={"/profile/edit"}>
            <button className="bg-myyellow px-2 py-1 rounded-lg text-white font-semibold text-base ml-2 hover:scale-95">
              EDIT
            </button>
          </Link>
        </div>
        <div>
          <div className="flex space-x-5">
            <Link href={"/profile/likes"}>
              <div className="flex space-x-2 items-center cursor-pointer">
                <span className="bg-gradient-to-r from-mypink to-myorange w-8 h-8 rounded-full flex justify-center items-center">
                  <HeartIcon
                    className="w-7 h-7"
                    strokeWidth="0"
                    fillColor="white"
                  />
                </span>
                <span className="text-lg">{(favData?.favs)?.length}</span>
              </div>
            </Link>
            <Link href={"/profile/bookmarks"}>
              <div className="flex space-x-2 items-center cursor-pointer">
                <span className="bg-gradient-to-r from-myemerald to-myblue w-8 h-8 rounded-full flex justify-center items-center">
                  <BookMarkIcon
                    className="w-7 h-7"
                    strokeWidth="0"
                    fillColor="white"
                  />
                </span>
                <span className="text-lg">{(bookmarkData?.bookmarks)?.length}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-mypurple to-myyellow px-3 py-2 text-white font-semibold text-xl">
          My Shares
        </h1>
        <div>
        {data?.posts?.map((post: any) => (
            <Link href={`/tweet/${post.id}`} key={post.id}>
              <a onClick={() => console.log(post)}>
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
      </div>
    </Layout>
  );
};

export default Profile;
