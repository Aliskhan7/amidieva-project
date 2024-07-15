import React from "react";
import { dataProducts } from "@/app/components/Products/data";
import Image from "next/image";
import Card from "@/app/components/Card/Card";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-20">
      {dataProducts.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Products;
