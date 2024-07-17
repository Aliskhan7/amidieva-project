import React from "react";
import { IProduct } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
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
  );
};

export default ProductItem;
