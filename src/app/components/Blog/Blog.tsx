import React from "react";
import { IBlog } from "@/app/types/types";
import Image from "next/image";

const Blog = ({ id, url, title, desc, descContent }: IBlog) => {
  console.log(descContent);
  return (
    <div className="pt-24 mx-auto container">
      <div className="text-center mb-10">
        <h1 className="title-h1 mb-4">{title}</h1>
        <p className="text-base text-black">by ANNY JOHNSON - </p>
      </div>
      <Image src={url[0]} alt="photo" />
      <div className="w-[670px] mx-auto mt-16">
        <div>
          <p>{desc}</p>
        </div>
        <div className="mt-14">
          <Image src={url[1]} alt="photo" className="mb-12" />
          <h2 className="text-2xl text-black mb-6">Top trends</h2>
          <p>{descContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
