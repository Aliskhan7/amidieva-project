"use client";
import React from "react";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import Logo from "../../../../public/assets/images/logo";

const Header = () => {
  return (
    <div className="flex-between-center w-full pt-[72px] pb-[24px] border-b border-b-gray-200">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex-between-center">
        <ul className="flex-between-center gap-x-16 mr-12">
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
        <div className="flex-between-center gap-x-10 ml-12">
          <MagnifyingGlass size={20} weight="thin" />
          <Link href="/cart">
            <ShoppingCart size={20} weight="thin" />
          </Link>
          <Link href="/account">
            <User size={20} weight="thin" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
