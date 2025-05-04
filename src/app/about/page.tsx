"use client";
import React from "react";
import Image from "next/image";
import about_1 from "../../../public/assets/images/about_img_1.jpg";
import about_2 from "../../../public/assets/images/about_img_2.jpg";
import { motion } from "framer-motion";

const About = () => {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="w-[700px] mx-auto mt-24"
    >
      <motion.div className="mb-10">
        <motion.div variants={topAnimated} className="mb-12 text-center">
          <h1 className="title-h1 mb-6">О нас</h1>
          <p className="text-xl text-black">
            Кто мы и почему мы делаем то, что делаем!
          </p>
        </motion.div>
        <motion.div variants={bottomAnimated}>
          <p className="text-base text-black">
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
            eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
            magna et, placerat urna. Curabitur eu magna enim. Proin placerat
            tortor lacus, ac sodales lectus placerat quis.
          </p>
        </motion.div>
      </motion.div>
      <motion.div variants={rightAnimated} className="mb-10">
        <h2 className="text-[26px] text-black mb-6">Главные тренды</h2>
        <Image src={about_1} alt="photo" />
        <p className="text-base text-black mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
        <ul className="text-base text-black mt-4">
          <li>● consectetur adipiscing elit. Aliquam placerat</li>
          <li>● Lorem ipsum dolor sit amet consectetur </li>
        </ul>
      </motion.div>
      <motion.div variants={leftAnimated}>
        <h2 className="text-[26px] text-black mb-6">Произведено с заботой</h2>
        <Image src={about_2} alt="photo" />
        <p className="text-base text-black mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
