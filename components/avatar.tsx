import React from "react";

interface AvatarProps {
  avatar: string;
  addClassName: string;
}

const AvatarCompo = ({ avatar, addClassName }: AvatarProps) => {
  return (
    <>
      {avatar === "pink-emerald" ? (
        <div className={`bg-gradient-to-br from-mypink rounded-full to-myemerald ${addClassName}`}></div>
      ) : avatar === "yellow-purple" ? (
        <div className={`bg-gradient-to-br from-myyellow rounded-full to-mypurple ${addClassName}`}></div>
      ) : (
        <div className={`bg-gradient-to-br from-myorange rounded-full to-myblue ${addClassName}`}></div>
      )}
    </>
  );
};

export default AvatarCompo;