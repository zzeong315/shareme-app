import React from "react";
import Layout from "../../components/layout";

const Write = () => {
  return (
    <Layout hasTabBar canGoBack>
      <div className="p-4 pt-6">
        <div className="flex items-center">
          <div className="bg-rose-300 rounded-full w-6 h-6 mb-1 mr-1"></div>
          <span className="m-1 font-semibold text-lg">DingDing</span>
        </div>
        <form>
        <textarea className="mt-1 shadow-sm w-full my-5 h-[60vh] rounded-lg p-3 focus:outline-none resize-none" placeholder="write your message..."/>
        <button className="rounded-xl bg-gradient-to-r from-mygreen  to-myorange w-full mt-2 hover:scale-105">
          <span className="block text-white px-4 py-2 font-bold rounded-full w-full text-lg shadow-lg">
            SUBMIT
          </span>
        </button>
        </form>

      </div>
    </Layout>
  );
};

export default Write;
