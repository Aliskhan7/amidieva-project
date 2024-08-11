import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { IProduct } from "@/app/types/types";
import { AnimatePresence, motion } from "framer-motion";

interface TabsProps {
  titleTab: string[];
  items: IProduct[];
}
const Tabs: React.FC<TabsProps> = ({ titleTab, items }) => {
  return (
    <div>
      <div className="flex w-full pt-4 px-4">
        <div className="w-full ">
          <TabGroup>
            <TabList className="flex gap-x-10">
              {titleTab.map((title: string) => {
                return (
                  <Tab className="py-1 pb-8 text-xl text-gray-400 focus:outline-none data-[selected]:text-black  data-[selected]:border-b data-[selected]:border-black data-[focus]:outline-1 data-[focus]:outline-white">
                    {title}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels className=" border-t border-t-gray-200">
              {items.map((item: IProduct) => (
                <TabPanel key={item.id} className="rounded-xl bg-white/5 py-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ul>{item.desc}</ul>
                    </motion.div>
                  </AnimatePresence>
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
