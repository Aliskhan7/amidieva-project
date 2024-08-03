import React from "react";

const TotalsCart = () => {
  return (
    <div className="p-10">
      <h2 className="text-[26px] text-black">Cart totals</h2>
      <div className="mt-11 ">
        <div className="grid grid-cols-2 gap-x-32 mb-6">
          <span className="text-base text-black">SUBTOTAL</span>
          <span className="text-base text-gray-400">$ 65,00</span>
        </div>
        <div className="grid grid-cols-2 gap-x-32 mb-6">
          <span className="text-base text-black">SHIPPING</span>
          <span className="text-base text-gray-400">
            Shipping costs will be calculated once you have provided address.
          </span>
        </div>
      </div>
      <div className="flex-between-center border-t border-t-gray-300 pt-11 mb-11">
        <span className="text-base text-black font-bold">TOTAL</span>
        <span className="text-base text-black font-bold">$ 87,00</span>
      </div>
      <button className="bg-black border border-black hover:bg-transparent hover:text-black ease-in duration-150 text-base text-white w-full py-4 rounded uppercase font-bold">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default TotalsCart;
