import React from "react";
import { timeChanger } from "../lib/timeChanger";
import AvatarCompo from "./avatar";
import { BookMarkIcon } from "./icons/bookmark";
import { HeartIcon } from "./icons/heart";
import { ReplyIcon } from "./icons/reply";

interface TweetProps {
  content: string;
  time: string;
  id?: number;
  avatar: string;
  name: string;
  favs: number;
  answers: number;
  hasFav: boolean;
  hasBookmark: boolean;
}

const Tweet = ({content, time, name, favs, answers, avatar, hasFav, hasBookmark} : TweetProps) => {
  return (
    <div className="flex flex-col p-4 border-lightgray border-b">
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer">
          <AvatarCompo avatar={avatar} addClassName={"w-6 h-6 mb-1 mr-1"}/>
          <span className="m-1 font-semibold ">{name}</span>
        </div>
        <div className="text-sm">{timeChanger(time, "timeOnly")}</div>
      </div>
      <div className="my-3">{content}</div>
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <div className="flex space-x-1">
            <span><ReplyIcon className="w-5 h-5"/></span>
            <span>{answers}</span>
          </div>
          <div className="flex space-x-1">
            <span><HeartIcon className="w-5 h-5" strokeWidth="1.5" fillColor={hasFav ? "pink" : "none"}/></span>
            <span>{favs}</span>
          </div>
        </div>
        <div><BookMarkIcon className="w-5 h-5" strokeWidth="1.5" fillColor={hasBookmark ? "skyblue" :"none"}/></div>
      </div>
    </div>
  );
};

export default Tweet;
