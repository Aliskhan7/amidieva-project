import React from "react";
import ProductCart from "@/app/components/ProductCart/ProductCart";

const Cart = () => {
  return (
    <div className="mt-24 w-full">
      <h1 className="title-h1 text-center">Shopping Cart</h1>
      <ProductCart />
    </div>
  );
};

export default Cart;
