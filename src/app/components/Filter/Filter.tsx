import React from "react";
import Switcher from "@/app/components/UI/Switcher";
import SelectUI from "@/app/components/UI/SelectUI";

const Filter = () => {
  return (
    <div className="flex flex-col w-full">
      <input
        type="text"
        placeholder="Search..."
        className="border-b border-b-gray-200 px-0 py-2 mb-10"
      />
      <select
        name=""
        id=""
        className="border border-gray-200 rounded px-3 py-4 mb-4"
      >
        <option value="">Shop By</option>
      </select>
      <select
        name=""
        id=""
        className="border border-gray-200 rounded px-3 py-4 mb-4"
      >
        <option value="">Sort By</option>
      </select>
      <div className="mt-10">
        <div className="flex-between-center mb-6">
          <label htmlFor="">On sale</label>
          <Switcher defaultEnabled />
        </div>
        <div className="flex-between-center mb-6">
          <label htmlFor="">In stock</label>
          <Switcher defaultEnabled />
        </div>
      </div>
    </div>
  );
};

export default Filter;
