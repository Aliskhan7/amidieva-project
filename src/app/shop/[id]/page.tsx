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
    <>
      <Product
        id={product.id}
        url={product.url}
        title={product.title}
        price={product.price}
        desc={product.desc}
      />
    </>
  );
};

export default ProductPage;
