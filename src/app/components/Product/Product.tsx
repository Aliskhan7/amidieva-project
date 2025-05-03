"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperType from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../styles/global.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IProduct } from "@/app/types/types";
import Counter from "@/app/components/UI/Counter";
import {
  InstagramLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Tabs from "@/app/components/UI/Tabs";
import { dataProducts } from "@/app/components/ProductsList/data";
import { motion } from "framer-motion";

const titleProducts = ["Description", "Aditional information"];

const Product = ({ id, url, title, price, desc }: IProduct) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
  return (
    <motion.section initial="hidden" whileInView="visible">
      <motion.div
        key={id}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-start mt-40 mb-24 "
      >
        <motion.div variants={leftAnimated}>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image src={url} alt="img" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper "
          >
            <SwiperSlide>
              <Image src={url} alt="img" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
        <motion.div variants={rightAnimated}>
          <h2 className="text-2xl text-black mb-6">{title}</h2>
          <span className="text-xl text-gold-400">$ {price}</span>
          <div className="mt-12 mb-20">
            <p className="text-base text-black">{desc}</p>
            <div className="mt-12 flex-between-center gap-x-6">
              {/*<Counter counter={1} />*/}
              <button className="bg-transparent border border-black hover:bg-black hover:text-white ease-in duration-150 rounded py-4 w-full text-black text-base">
                Оставить заявку
              </button>
            </div>
          </div>
          <div className="flex-between-center gap-x-3 w-fit mb-8">
            <a href="#">
              <TelegramLogo size={24} color="#979797" />
            </a>
            <a href="#">
              <InstagramLogo size={24} color="#979797" />
            </a>
            <a href="#">
              <WhatsappLogo size={24} color="#979797" />
            </a>
          </div>
          <div>
            <p className="text-base ">
              Категория: <span className="text-gray-400">Fashion, style</span>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div>
        <Tabs titleTab={titleProducts} items={dataProducts} />
      </div>
    </motion.section>
  );
};

export default Product;
