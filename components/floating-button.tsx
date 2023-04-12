import Link from 'next/link';
import React from 'react'
import { PlusIcon } from './icons/plus';

const FloationgButton = () => {
  return (
    <Link href={"/tweet/write"}>
      <a className="fixed border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-gradient-to-br from-mypink to-myyellow rounded-full w-14 flex items-center justify-center text-white hover:scale-105">
        <PlusIcon className="w-6 h-6" />
      </a>
    </Link>
  )
}

export default FloationgButton;
