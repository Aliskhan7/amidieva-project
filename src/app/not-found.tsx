import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen relative">
      <div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px]">
        <h1 className="title-h1 mb-6">404 ERROR</h1>
        <p className="text-xl text-gray-400">
          This page not found; back to home and start again
        </p>
        <Link
          className="mt-16 inline-block bg-transparent border border-black hover:bg-black hover:text-white ease-in duration-150 text-base text-black w-full py-4 rounded uppercase font-bold"
          href="/"
        >
          HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
