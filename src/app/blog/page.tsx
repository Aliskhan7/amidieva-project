import React from "react";
import BlogList from "@/app/components/BlogList/BlogList";
import { dataBlog } from "@/app/components/BlogList/data";

const Blog = () => {
  return (
    <section className="w-full mt-16">
      <BlogList blogs={dataBlog} />
    </section>
  );
};

export default Blog;
