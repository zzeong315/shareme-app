import React from "react";
import Answer from "../../components/answer";
import Button from "../../components/button";
import { BookMarkIcon } from "../../components/icons/bookmark";
import { HeartIcon } from "../../components/icons/heart";
import { ReplyIcon } from "../../components/icons/reply";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";

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
                <HeartIcon className="w-6 h-6 mb-1" strokeWidth="1.5" fillColor="none"/>
              </span>
              <span>2</span>
            </div>
          </div>
          <div className="flex items-center">
            <BookMarkIcon className="w-6 h-6 mb-1" strokeWidth="1.5" fillColor="none"/>
          </div>
        </div>
        {[1,2,3].map((_, i) => <Answer key={i} />)}
      </div>
      <form className="mt-4 px-4">
        <Textarea addClassName={"h-[20vh]"} placeholder="write your message..." required/>
        <Button text={"REPLY"} addClassName={"from-myyellow to-mygreen"}/>
        </form>
    </Layout>
  );
};

export default TweetDetail;
