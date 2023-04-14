import React from "react";

interface ButtonProps {
  text: string;
  addClassName: string;
  [key: string]: any;
}

const Button = ({ text, addClassName }: ButtonProps) => {
  return (
    <>
      <button
        className={`rounded-xl w-full hover:scale-[1.03] shadow-lg bg-gradient-to-r ${addClassName}`}
      >
        <span className="block text-white px-4 py-2 font-bold rounded-full w-full text-lg">
          {text}
        </span>
      </button>
    </>
  );
};

export default Button;
