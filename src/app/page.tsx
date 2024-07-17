import Main from "@/app/components/Main/Main";
import ProductsList from "@/app/components/ProductsList/ProductsList";
import React from "react";
import { dataProducts } from "@/app/components/ProductsList/data";

export default function Home() {
  return (
    <main>
      <Main />
      <section className="w-full mt-16">
        <h2 className="title-h1 mb-10">Новинки</h2>
        <ProductsList product={dataProducts} />
      </section>
    </main>
  );
}
