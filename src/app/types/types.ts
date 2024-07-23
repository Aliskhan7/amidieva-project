import { StaticImageData } from "next/image";

export interface IProduct {
  id: number;
  url: StaticImageData;
  title: string;
  desc?: string;
  price: number;
}
export interface IBlog {
  id: number;
  url: StaticImageData;
  data: Date;
  title: string;
  desc?: string;
}
