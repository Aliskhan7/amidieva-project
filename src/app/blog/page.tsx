"use client";
import React from "react";
import BlogList from "@/app/components/BlogList/BlogList";
import { dataBlog } from "@/app/components/BlogList/data";
import { motion } from "framer-motion";

const Blog = () => {
  const bottomAnimated = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="w-full my-16"
    >
      <motion.div variants={bottomAnimated}>
        <BlogList blogs={dataBlog} />
      </motion.div>
    </motion.section>
  );
};

export default Blog;
