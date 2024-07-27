import React from "react";
import Image from "next/image";

const ProductCart = () => {
  return (
    <div className="w-[600px] mt-16 flex items-start gap-x-10">
      <Image src="" alt="product" />
      <div>
        <p>Lira Earrings</p>
        <span>Black / Medium</span>
        <span>$ 20</span>
      </div>
    </div>
  );
};

export default ProductCart;
