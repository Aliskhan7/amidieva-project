"use client";
import { dataProducts } from "@/app/components/ProductsList/data";
import { useParams } from "next/navigation";
import Product from "@/app/components/Product/Product";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  const product = dataProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Product />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.desc}</p>
    </div>
  );
};

export default ProductPage;
