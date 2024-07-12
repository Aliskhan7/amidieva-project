import { StaticImageData } from "next/image";

export interface IProduct {
  product: {
    id: number;
    url: StaticImageData;
    title: string;
    price: number;
  };
}
