"use client";

import React from "react";
import Image from "next/image";
import { IProduct } from "@/app/types/types";
import Counter from "@/app/components/UI/Counter";
import { motion } from "framer-motion";

const ProductCart = (product: IProduct) => {
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
  return (
    <motion.div initial="hidden" whileInView="visible">
      <motion.div
        variants={topAnimated}
        className="w-[600px] flex items-start gap-x-10"
      >
        <Image width={136} height={136} src={product.url} alt="product" />
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <p className="text-xl text-black mb-3.5">{product.title}</p>
            <span className="text-base text-gray-400">Black / Medium</span>
            <span className="text-base text-gold-400">$ {product.price}</span>
          </div>
          <div>
            <Counter counter={4} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCart;
