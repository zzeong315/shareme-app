import React from "react";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";

const Write = () => {
  return (
    <Layout hasTabBar canGoBack>
      <div className="p-4 pt-6">
        <div className="flex items-center">
          <div className="bg-rose-300 rounded-full w-6 h-6 mb-1 mr-1"></div>
          <span className="m-1 font-semibold text-lg">DingDing</span>
        </div>
        <form>
        <Textarea addClassName={"h-[60vh]"} placeholder="write your message..." required/>
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
