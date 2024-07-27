import React from "react";
import ProductCart from "@/app/components/ProductCart/ProductCart";
import { dataProducts } from "@/app/components/ProductsList/data";
import { IProduct } from "@/app/types/types";

const Cart = () => {
  return (
    <div className="mt-24 w-full">
      <h1 className="title-h1 text-center">Shopping Cart</h1>
      {dataProducts.map((product: IProduct) => {
        return <ProductCart {...product} />;
      })}
    </div>
  );
};

export default Cart;
