import React from "react";
import ProductCart from "@/app/components/ProductCart/ProductCart";
import { dataProducts } from "@/app/components/ProductsList/data";
import { IProduct } from "@/app/types/types";
import TotalsCart from "@/app/components/TotalsCart/TotalsCart";

const Cart = () => {
  return (
    <div className="mt-24 w-full">
      <h1 className="title-h1 text-center">Shopping Cart</h1>
      <div className="flex mt-16 justify-between gap-x-20 items-start">
        <div className="flex flex-col gap-y-16">
          {dataProducts.map((product: IProduct) => {
            return <ProductCart {...product} />;
          })}
        </div>
        <TotalsCart />
      </div>
    </div>
  );
};

export default Cart;
