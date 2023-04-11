import React from "react";
import { HeartIcon } from "../../components/icons/heart";
import { ReplyIcon } from "../../components/icons/reply";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";

const Profile = () => {
  return (
    <Layout hasTabBar>
      <div className="flex flex-col pt-8 pb-4 px-4">
        <div className="flex items-center mb-6">
          <div className="bg-rose-300 rounded-full w-10 h-10 mb-1 mr-1"></div>
          <span className="m-1 font-semibold text-2xl">DingDing</span>
          <button className="bg-myyellow px-2 py-1 rounded-lg text-white font-semibold text-base ml-2 hover:scale-95">EDIT</button>
        </div>
        <div>
          <div className="flex space-x-3">
            <div className="flex space-x-2 items-center">
              <span>
                <ReplyIcon className="w-8 h-8" />
              </span>
              <span className="text-lg">1</span>
            </div>
            <div className="flex space-x-2 items-center">
              <span>
                <HeartIcon className="w-8 h-8" strokeWidth="1.5" />
              </span>
              <span className="text-lg">2</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-mypurple to-myyellow px-3 py-2 text-white font-semibold text-xl">
          My Shares
        </h1>
        <div>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Tweet key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
