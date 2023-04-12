import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../lib/utils";
import { LogoIcon } from "./icons/logo";
import { UserIcon } from "./icons/user";
import { BookMarkIcon } from "./icons/bookmark";
import { HeartIcon } from "./icons/heart";
import { HomeIcon } from "./icons/home";
import { BackIcon } from "./icons/back";

interface LayoutProps {
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className="text-darkgray">
      <div className="bg-white w-full h-16 max-w-xl text-lg font-medium fixed text-darkgray top-0 flex flex-col justify-center">
        <div className="flex items-center justify-center">
          {canGoBack ? (
            <button onClick={onClick} className="absolute left-4">
              <BackIcon className="w-6 h-6" />
            </button>
          ) : null}
          <div>
            <LogoIcon width="60" height="40"/>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-gradient-to-r from-mypink to-myblue absolute bottom-0 "/>
      </div>

      <div className={cls("pt-16", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white max-w-xl text-darkgray border-t fixed bottom-0 w-full px-10 pb-5 pt-5 flex justify-between items-center ">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/"
                  ? "text-mygreen"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <HomeIcon className="w-8 h-8" />
            </a>
          </Link>
          <Link href="/profile/likes">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile/likes"
                  ? "text-mypink"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <HeartIcon className="w-8 h-8" strokeWidth="2" fillColor="none"/>
            </a>
          </Link>
          <Link href="/profile/bookmarks">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile/bookmarks"
                  ? "text-myblue"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <BookMarkIcon className="w-8 h-8" strokeWidth="2" fillColor="none"/>
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile"
                  ? "text-myyellow"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <UserIcon className="w-8 h-8" />
            </a>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}