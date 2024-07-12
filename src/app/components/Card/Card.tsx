import React from "react";
import Image from "next/image";
import { IProduct } from "@/app/types/types";

const Card = ({ product }: IProduct) => {
  return (
    <div>
      <Image
        src={product.url}
        className="rounded-xl overflow-hidden"
        alt="product"
      />
      <div className="mt-6">
        <h3 className="text-2xl text-black mb-4">{product.title}</h3>
        <span className="text-2xl text-gold-400">$ {product.price}</span>
      </div>
    </div>
  );
};

export default Card;
