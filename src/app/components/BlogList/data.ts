import blog_1 from "../../../../public/assets/images/blog-1.jpg";
import blog_2 from "../../../../public/assets/images/blog-2.jpg";
import { IBlog } from "@/app/types/types";

export const dataBlog: IBlog[] = [
  {
    id: 1,
    url: [blog_1, blog_2],
    title: "Top Trends From Spring",
    data: new Date(),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    descContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.",
  },
  {
    id: 2,
    url: [blog_1, blog_2],
    title: "Top Trends From Spring",
    data: new Date(),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    descContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.",
  },
  {
    id: 3,
    url: [blog_1, blog_2],
    title: "Top Trends From Spring",
    data: new Date(),
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    descContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.",
  },
];
