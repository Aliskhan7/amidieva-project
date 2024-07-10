"use client";
import React from "react";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full pt-[72px] pb-[24px]">
      LOGO
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center gap-x-16 mr-12">
          <li>
            <Link href="/shop">Магазин</Link>
          </li>
          <li>
            <Link href="/blog">Блог</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
        </ul>
        <div className="flex justify-between items-center gap-x-10 ml-12">
          <MagnifyingGlass size={20} weight="thin" />
          <ShoppingCart size={20} weight="thin" />
          <User size={20} weight="thin" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
