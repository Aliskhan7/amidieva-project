import React from "react";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import { IProduct } from "@/app/types/types";

interface ProductListProps {
  product: IProduct[];
}

const ProductsList: React.FC<ProductListProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-20">
      {product?.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
