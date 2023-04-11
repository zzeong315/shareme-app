import React from "react";
import Answer from "../../components/answer";
import { BookMarkIcon } from "../../components/icons/bookmark";
import { HeartIcon } from "../../components/icons/heart";
import { ReplyIcon } from "../../components/icons/reply";
import Layout from "../../components/layout";

const TweetDetail = () => {
  return (
    <Layout hasTabBar>
      <div>
        <div className="flex flex-col justify-between border-lightgray border-b px-4 pt-5 pb-2">
          <div className="flex items-center">
            <div className="bg-rose-300 rounded-full w-6 h-6 mb-1 mr-1"></div>
            <span className="m-1 font-semibold text-lg">DingDing</span>
          </div>
          <div className="my-3 text-base">
            Hello This is my first share message...Hello This is my first share
            message...
          </div>
          <div className="text-sm">오후 12:30 2023-04-11</div>
        </div>
        <div className="flex justify-between border-lightgray border-b py-[5px] px-4">
          <div className="flex space-x-3 ">
            <div className="flex space-x-1 items-center">
              <span>
                <ReplyIcon className="w-6 h-6 mb-1" />
              </span>
              <span>1</span>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <HeartIcon className="w-6 h-6 mb-1" strokeWidth="1.5" />
              </span>
              <span>2</span>
            </div>
          </div>
          <div className="flex items-center">
            <BookMarkIcon className="w-6 h-6 mb-1" strokeWidth="1.5" />
          </div>
        </div>
        {[1,2,3].map((_, i) => <Answer key={i} />)}
      </div>
      <form className="mt-4">
        <textarea className="mt-1 shadow-sm w-full my-5 h-[20vh] rounded-lg p-3 focus:outline-none resize-none" placeholder="write your message..."/>
        <button className="rounded-xl bg-gradient-to-r from-myyellow  to-mygreen w-full mt-2 hover:scale-105">
          <span className="block text-white px-4 py-2 font-bold rounded-full w-full text-lg shadow-lg">
            REPLY
          </span>
        </button>
        </form>
    </Layout>
  );
};

export default TweetDetail;
