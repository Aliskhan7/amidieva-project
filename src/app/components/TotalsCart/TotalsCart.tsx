import React from "react";

const TotalsCart = () => {
  return (
    <div className="p-10">
      <h2 className="text-[26px] text-black">Cart totals</h2>
      <div className="mt-11">
        <div className="flex-between-center">
          <span>SUBTOTAL</span>
          <span>$ 65,00</span>
        </div>
        <div className="flex justify-between items-start">
          <span>SHIPPING</span>
          <span>
            Shipping costs will be calculated once you have provided address.
          </span>
        </div>
      </div>
      <div className="flex-between-center">
        <span>TOTAL</span>
        <span>$ 87,00</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default TotalsCart;
