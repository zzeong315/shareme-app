import React from "react";
import AvatarCompo from "./avatar";

interface AnswerProps {
  answer: string;
  name: string;
  avatar?: string;
}

const AnswerCompo = ({answer, name, avatar} : AnswerProps) => {
  return (
    <div className="flex flex-col px-4 pt-2 pb-1 border-lightgray border-b">
      <div className="flex justify-between">
        <div className="flex items-center">
          <AvatarCompo avatar={avatar!} addClassName={"w-5 h-5 mb-1 mr-1"} />
          <span className="m-1 font-medium text-[16px]">{name}</span>
        </div>
      </div>
      <div className="my-2 text-[16px]">{answer}</div>
    </div>
  );
};

export default AnswerCompo;
