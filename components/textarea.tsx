import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  placeholder: string;
  register?: UseFormRegisterReturn;
  addClassName: string;
  required: boolean;
  [key: string]: any;
}

const Textarea = ({placeholder, required, addClassName}:TextareaProps) => {
  return (
    <div className="w-full">
      <textarea
        className={`mt-1 shadow-sm w-full my-5 rounded-lg p-3 focus:outline-none resize-none ${addClassName}`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Textarea;
