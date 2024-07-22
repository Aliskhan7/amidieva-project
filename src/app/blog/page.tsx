import React from "react";
import BlogList from "@/app/components/BlogList/BlogList";
import { dataBlog } from "@/app/components/BlogList/data";

const Blog = () => {
  return (
    <div>
      <BlogList blogs={dataBlog} />
    </div>
  );
};

export default Blog;
