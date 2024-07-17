import React from "react";
import Filter from "@/app/components/Filter/Filter";
import ProductsList from "@/app/components/ProductsList/ProductsList";
import { dataProducts } from "@/app/components/ProductsList/data";

export default function Shop() {
  return (
    <section className="w-full mt-16">
      <h2 className="title-h1 mb-10">Новинки</h2>
      <div className="grid grid-cols-4 gap-x-8">
        <Filter />
        <div className="col-span-3">
          <ProductsList product={dataProducts} />
        </div>
      </div>
    </section>
  );
}
