import Link from "next/link";
import React from "react";
import FloationgButton from "../../components/floating-button";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";

const Bookmarks = () => {
  return (
    <Layout hasTabBar>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-myemerald to-myblue p-3 text-white font-semibold text-xl">
          My BookMarks
        </h1>
        <div>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Link href={`/tweet/${i}`}>
              <a>
                <Tweet key={i} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <FloationgButton />
    </Layout>
  );
};

export default Bookmarks;
