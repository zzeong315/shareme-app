import React from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

const Edit = () => {
  return (
    <Layout hasTabBar>
      <h1 className="mt-8 text-darkgray font-semibold text-2xl text-center">EDIT NAME</h1>
      <form className="p-5 mt-4">
        <Input
          label={"Name"}
          name={"name"}
          required={true}
          placeholder={"Enter Your Name"}
          type={"text"}
        />
        <Button text={"SUBMIT"} addClassName={"from-myyellow to-myblue mt-8"}/>
      </form>
    </Layout>
  );
};

export default Edit;
