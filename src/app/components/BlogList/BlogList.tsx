import React from "react";
import BlogItem from "@/app/components/BlogItem/BlogItem";
import { IBlog } from "@/app/types/types";
interface BlogListProps {
  blogs: IBlog[];
}
const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-20">
      {blogs?.map((blog) => {
        return <BlogItem key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogList;
