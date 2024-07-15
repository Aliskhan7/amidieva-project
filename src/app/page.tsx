import Main from "@/app/components/Main/Main";
import Products from "@/app/components/Products/Products";
import React from "react";

export default function Home() {
  return (
    <main>
      <Main />
      <section className="w-full mt-16">
        <h2 className="title-h2 mb-10">Новинки</h2>
        <Products />
      </section>
    </main>
  );
}
