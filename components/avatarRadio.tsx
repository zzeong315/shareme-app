import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface RegisterForm {
  register: UseFormRegisterReturn;
}

const AvatarRadio = ({register} : RegisterForm) => {
  return (
    <div className="mb-6">
      <ul className="flex w-full justify-center space-x-7 peer">
        <li>
          <input
            type="radio"
            id="pink-emerald"
            value="pink-emerald"
            className="hidden peer"
            {...register}
            required
            defaultChecked
          />
          <label
            htmlFor="pink-emerald"
            className="inline-flex items-center justify-between w-10 h-10 p-5 bg-gradient-to-br from-mypink rounded-full to-myemerald border cursor-pointer peer-checked: ring-offset-2 peer-checked:ring-4 peer-checked:ring-myorange peer-checked:ring-opacity-50"
          >
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="yellow-purple"
            value="yellow-purple"
            className="hidden peer"
            required
            {...register}
          />
          <label
            htmlFor="yellow-purple"
            className="inline-flex items-center justify-between w-10 h-10 p-5 bg-gradient-to-br from-myyellow rounded-full to-mypurple border cursor-pointer peer-checked: ring-offset-2 peer-checked:ring-4 peer-checked:ring-myorange peer-checked:ring-opacity-50"
          >
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="blue-orange"
            value="blue-orange"
            className="hidden peer"
            required
            {...register}
          />
          <label
            htmlFor="blue-orange"
            className="inline-flex items-center justify-between w-10 h-10 p-5 bg-gradient-to-br from-myorange rounded-full to-myblue border cursor-pointer peer-checked: ring-offset-2 peer-checked:ring-4 peer-checked:ring-myorange peer-checked:ring-opacity-50"
          >
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AvatarRadio;
