import Link from "next/link";
import React from "react";
import { BookMarkIcon } from "../../components/icons/bookmark";
import { HeartIcon } from "../../components/icons/heart";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";

const Profile = () => {
  return (
    <Layout hasTabBar>
      <div className="flex flex-col pt-8 pb-4 px-4">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-myyellow to-myemerald rounded-full w-10 h-10 mb-1 mr-1"></div>
          <span className="m-1 font-semibold text-2xl">DingDing</span>
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
                <span className="text-lg">1</span>
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
                <span className="text-lg">2</span>
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
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Link href={`/tweet/${i}`}>
              <a>
                <Tweet key={i} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
