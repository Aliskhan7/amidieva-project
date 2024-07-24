import React from "react";
import { IBlog } from "@/app/types/types";
import Image from "next/image";

const Blog = ({ id, url, title, desc, data }: IBlog) => {
  return (
    <div className="pt-24 mx-auto container">
      <div className="text-center mb-10">
        <h1 className="title-h1 mb-4">{title}</h1>
        <p className="text-base text-black">by ANNY JOHNSON - </p>
      </div>
      <Image src={url} alt="photo" />
      <div className="w-[670px] mx-auto mt-16">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Blog;
