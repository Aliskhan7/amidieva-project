import React from "react";
import { IBlog } from "@/app/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

const Blog = ({ id, url, title, desc, descContent }: IBlog) => {
  const topAnimated = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };

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

  const rightAnimated = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };

  const leftAnimated = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };
  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className="pt-24 mx-auto container">
        <motion.div variants={topAnimated} className="text-center mb-10">
          <h1 className="title-h1 mb-4">{title}</h1>
          <p className="text-base text-black">by ANNY JOHNSON - </p>
        </motion.div>
        <motion.div variants={bottomAnimated}>
          <Image src={url[0]} alt="photo" />
        </motion.div>
        <div className="w-[670px] mx-auto mt-16">
          <motion.div variants={rightAnimated}>
            <p>{desc}</p>
          </motion.div>
          <motion.div variants={leftAnimated} className="mt-14">
            <Image src={url[1]} alt="photo" className="mb-12" />
            <h2 className="text-2xl text-black mb-6">Top trends</h2>
            <p>{descContent}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
