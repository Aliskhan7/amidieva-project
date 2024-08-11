"use client";
import React from "react";
import Tabs from "@/app/components/UI/Tabs";

const Account = () => {
  const titleAccountTabs = ["Dashboard", "Orders", "Account details"];
  const accountTabs = [
    {
      id: "1",
      desc: "Hello Vitatheme (not Vitatheme? Log out) ",
    },
    {
      id: "2",
      desc: "Hello Vitatheme (not Vitatheme? Log out) ",
    },
  ];
  return (
    <div className="py-24 w-full">
      <div>
        <h1 className="title-h1 text-center mb-16">My Account</h1>
        <div>
          <Tabs titleTab={titleAccountTabs} items={accountTabs} />
        </div>
      </div>
    </div>
  );
};

export default Account;
