import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  url: StaticImageData;
  title: string;
  price: number;
}
