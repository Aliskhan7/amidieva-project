import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { dataProducts } from "@/app/components/ProductsList/data";
import { IProduct } from "@/app/types/types";

const categories = [
  {
    name: "Description",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Aditional information",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
];
const Tabs = ({ titleTab, products }) => {
  return (
    <div>
      <div className="flex w-full pt-4 px-4">
        <div className="w-full ">
          <TabGroup>
            <TabList className="flex gap-4">
              {titleTab.map((title: string) => {
                return (
                  <Tab className="py-1 pb-8 text-xl text-gray-400 focus:outline-none data-[selected]:text-black  data-[selected]:border-b data-[selected]:border-black data-[focus]:outline-1 data-[focus]:outline-white">
                    {title}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels className=" border-t border-t-gray-200">
              {products.map((product: IProduct) => (
                <TabPanel
                  key={product.id}
                  className="rounded-xl bg-white/5 py-3"
                >
                  <ul>{product.desc}</ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
