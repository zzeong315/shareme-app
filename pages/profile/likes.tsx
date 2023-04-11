import React from "react";
import Layout from "../../components/layout";
import Tweet from "../../components/tweet";

const Likes = () => {
  return (
    <Layout hasTabBar>
      <div className="flex flex-col w-full">
        <h1 className="w-full bg-gradient-to-r from-mypink to-myorange p-3 text-white font-semibold text-xl">
          My Likes
        </h1>
        <div>
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Tweet key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Likes;
