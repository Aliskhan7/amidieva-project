"use client";
import React from "react";
import Link from "next/link";
import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import Logo from "../../../../public/assets/images/logo";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "Магазин", path: "/shop" },
  { id: 2, name: "Блог", path: "/blog" },
  { id: 3, name: "О нас", path: "/about" },
];

const Header = () => {
  const pathname = usePathname();

  console.log(pathname);
  const isActive = (path: any) => path === pathname;

  return (
    <div
      className={`flex-between-center w-full pt-[72px] pb-[24px] ${pathname !== "/" ? "border-b border-b-gray-200" : ""} `}
    >
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex-between-center">
        <ul className="flex-between-center gap-x-16 mr-12">
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={
                    isActive(link.path)
                      ? "font-medium border-b border-b-black pb-[33.8px]"
                      : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
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
