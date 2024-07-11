import React from "react";
import Image from "next/image";
import mainBg from "@/../public/assets/images/main-bg.jpg";

const Main = () => {
  return (
    <div>
      <Image src={mainBg} alt="main" />
    </div>
  );
};

export default Main;
