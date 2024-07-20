import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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
const Tabs = () => {
  return (
    <div>
      <div className="flex w-full pt-4 px-4">
        <div className="w-full ">
          <TabGroup>
            <TabList className="flex gap-4">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-back focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm/6 transition hover:bg-black/5"
                      >
                        <a href="#" className="font-semibold text-back">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Deleniti molestiae quisquam unde? Autem commodi
                          dicta dignissimos, explicabo ipsa ipsum laboriosam
                          laudantium libero minima mollitia odit quas quia
                          quibusdam recusandae repellendus.
                        </p>
                      </li>
                    ))}
                  </ul>
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
