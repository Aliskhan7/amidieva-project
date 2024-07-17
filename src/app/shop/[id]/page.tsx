"use client";
import { useRouter } from "next/router";
import { dataProducts } from "@/app/components/ProductsList/data";
import { IProduct } from "@/app/types/types";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = dataProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductPage;
