import React from "react";
import { IBlog, IProduct } from "@/app/types/types";

const Blog = ({ id, url, title, desc }: IBlog) => {
  return (
    <div>
      {url}
      {title}
      {desc}
    </div>
  );
};

export default Blog;
