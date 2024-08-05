"use client";
import React from "react";
import Image from "next/image";
import mainBg from "@/../public/assets/images/main-bg.jpg";
import { motion } from "framer-motion";

const Main = () => {
  const topAnimated = {
    hidden: {
      y: -500,
    },
    visible: {
      y: 0,
      transition: { duration: 0.2, delay: 0.2 },
    },
  };
  return (
    <motion.div initial="hidden" whileInView="visible">
      <motion.div variants={topAnimated}>
        <Image src={mainBg} alt="main" />
      </motion.div>
    </motion.div>
  );
};

export default Main;
