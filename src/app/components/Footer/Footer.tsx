"use client";
import React from "react";
import {
  Copyright,
  InstagramLogo,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="flex-between-center !items-end w-full mt-48 pt-12 pb-20 border-t border-t-gray-200">
      <div className="flex flex-col gap-y-12">
        <ul className="flex-between-center gap-x-10">
          <li>
            <a className="text-base text-gray-400" href="#">
              CONTACT
            </a>
          </li>
          <li>
            <a className="text-base text-gray-400" href="#">
              TERMS OF SERVICES
            </a>
          </li>
          <li>
            <a className="text-base text-gray-400" href="#">
              SHIPPING AND RETURNS
            </a>
          </li>
        </ul>
        <p>
          © 2024 Shelly.
          <a className="text-base text-gray-400" href="#">
            Terms of use
          </a>{" "}
          and{" "}
          <a className="text-base text-gray-400" href="#">
            privacy policy
          </a>
          .
        </p>
      </div>
      <div className="flex-between-center gap-x-7">
        <a href="#">
          <TelegramLogo size={24} color="#979797" />
        </a>
        <a href="#">
          <InstagramLogo size={24} color="#979797" />
        </a>
        <a href="#">
          <WhatsappLogo size={24} color="#979797" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
