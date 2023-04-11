import React from "react";
import { HeartIcon } from "./icons/heart";
import { ReplyIcon } from "./icons/reply";

const Answer = () => {
  return (
    <div className="flex flex-col px-4 pt-2 pb-1 border-lightgray border-b">
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="bg-teal-300 rounded-full w-5 h-5 mb-1 mr-1"></div>
          <span className="m-1 font-medium text-[16px]">Good Mood</span>
        </div>
        {/* <div className="text-[14px] m-1">오후 12:30</div> */}
      </div>
      <div className="my-1 text-[16px]">Good share more!!!!</div>
      <div className="flex space-x-3 justify-end">
        <div className="flex space-x-1">
          <span>
            <ReplyIcon className="w-5 h-5" />
          </span>
          <span>1</span>
        </div>
        <div className="flex space-x-1">
          <span>
            <HeartIcon className="w-5 h-5" strokeWidth="1.5" />
          </span>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default Answer;
