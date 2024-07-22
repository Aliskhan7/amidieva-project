import React from "react";
import Image from "next/image";
import { IBlog } from "@/app/types/types";
import Link from "next/link";

interface BlogListProps {
  blog: IBlog;
}

const BlogItem: React.FC<BlogListProps> = ({ blog }) => {
  return (
    <div>
      <Image
        src={blog.url}
        className="rounded-xl overflow-hidden"
        alt="product"
      />
      <div className="mt-6">
        <h3 className="text-2xl text-black mb-4">{blog.title}</h3>
        <span className="text-2xl text-gold-400">{blog.desc}</span>
        <Link href={`/blog/${blog.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogItem;
