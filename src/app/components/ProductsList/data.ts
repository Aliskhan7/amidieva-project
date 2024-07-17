import product_1 from "../../../../public/assets/images/product_1.jpg";
import product_2 from "../../../../public/assets/images/product_2.jpg";
import product_3 from "../../../../public/assets/images/product_3.jpg";
import { IProduct } from "@/app/types/types";

export const dataProducts: IProduct[] = [
  {
    id: 1,
    url: product_1,
    title: "Lira Earrings",
    price: 20,
  },
  {
    id: 2,
    url: product_2,
    title: "Hal Earrings",
    price: 24,
  },
  {
    id: 3,
    url: product_3,
    title: "Kaede Hair Pin Set Of 3 ",
    price: 40,
  },
  {
    id: 4,
    url: product_1,
    title: "Hair Pin Set of 3",
    price: 29,
  },
  {
    id: 5,
    url: product_2,
    title: "Plaine Necklace",
    price: 64,
  },
  {
    id: 6,
    url: product_3,
    title: "Yuki Hair Pin Set of 3",
    price: 140,
  },
];
