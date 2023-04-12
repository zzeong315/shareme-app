import React from "react";
import { BookMarkIcon } from "./icons/bookmark";
import { HeartIcon } from "./icons/heart";
import { ReplyIcon } from "./icons/reply";

const Tweet = () => {
  return (
    <div className="flex flex-col p-4 border-lightgray border-b">
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer">
          <div className="bg-gradient-to-br from-myyellow to-myemerald rounded-full w-6 h-6 mb-1 mr-1"></div>
          <span className="m-1 font-semibold ">DingDing</span>
        </div>
        <div className="text-sm">오후 12:30</div>
      </div>
      <div className="my-3">Hello This is my first share message...Hello This is my first share message...</div>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <div className="flex space-x-1">
            <span><ReplyIcon className="w-5 h-5"/></span>
            <span>1</span>
          </div>
          <div className="flex space-x-1">
            <span><HeartIcon className="w-5 h-5" strokeWidth="1.5" fillColor="none"/></span>
            <span>2</span>
          </div>
        </div>
        <div><BookMarkIcon className="w-5 h-5" strokeWidth="1.5" fillColor="none"/></div>
      </div>
    </div>
  );
};

export default Tweet;
