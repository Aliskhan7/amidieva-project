"use client";
import React from "react";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import { IProduct } from "@/app/types/types";
import { motion } from "framer-motion";

interface ProductListProps {
  product: IProduct[];
}

const ProductsList: React.FC<ProductListProps> = ({ product }) => {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-20"
    >
      {product?.map((product) => {
        return (
          <motion.div variants={rightAnimated}>
            <ProductItem key={product.id} product={product} />;
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ProductsList;
