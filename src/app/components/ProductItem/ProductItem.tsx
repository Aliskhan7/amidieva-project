"use client";
import React from "react";
import { IProduct } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
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
    <motion.div initial="hidden" whileInView="visible">
      <motion.div>
        <Link href={`/shop/${product.id}`}>
          <Image
            src={product.url}
            className="rounded-xl overflow-hidden"
            alt="product"
          />
          <div className="mt-6">
            <h3 className="text-2xl text-black mb-4">{product.title}</h3>
            <span className="text-2xl text-gold-400">$ {product.price}</span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProductItem;
