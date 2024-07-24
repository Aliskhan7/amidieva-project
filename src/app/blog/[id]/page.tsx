"use client";
import React from "react";
import { useParams } from "next/navigation";
import { dataProducts } from "@/app/components/ProductsList/data";
import Blog from "@/app/components/Blog/Blog";
import { dataBlog } from "@/app/components/BlogList/data";

const BlogPage = () => {
  const params = useParams();
  const { id } = params;
  const blog = dataBlog.find((p) => p.id === Number(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }
  return (
    <div>
      <Blog
        id={blog.id}
        url={blog.url}
        title={blog.title}
        desc={blog.desc}
        data={new Date()}
        descContent={blog.descContent}
      />
    </div>
  );
};

export default BlogPage;
