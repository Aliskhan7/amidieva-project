"use client";
import React from "react";
import Image from "next/image";
import { IBlog } from "@/app/types/types";
import Link from "next/link";

interface BlogListProps {
  blog: IBlog;
}

const BlogItem: React.FC<BlogListProps> = ({ blog }) => {
  const truncateString = (s: string | undefined, w: number) =>
    s!.length > w ? s!.slice(0, w) + "..." : s;

  let data = new Date(blog.data.toString());

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = data.toLocaleDateString("ru-RU", options);

  return (
    <div>
      <Image
        src={blog.url[0]}
        className="rounded-xl overflow-hidden w-full h-full object-cover"
        alt="product"
      />
      <div className="mt-6">
        <span className="text-sm text-gray-400 ">
          Fashion - {formattedDate}
        </span>
        <h3 className="text-xl text-black mb-3.5 mt-2">{blog.title}</h3>
        <p className="text-base text-gray-400 mb-6 ">
          {truncateString(blog?.desc, 100)}
        </p>
        <Link
          href={`/blog/${blog.id}`}
          className="text-gold-400 text-base font-bold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
