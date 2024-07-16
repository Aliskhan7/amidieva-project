import React from "react";
import Image from "next/image";
import about_1 from "../../../public/assets/images/about_img_1.jpg";
import about_2 from "../../../public/assets/images/about_img_2.jpg";

const About = () => {
  return (
    <div className="w-[700px] mx-auto   mt-24">
      <div className="mb-10">
        <div className="mb-12 text-center">
          <h1 className="title-h1 mb-6">About</h1>
          <p className="text-xl text-black">
            Who we are and why we do what we do!
          </p>
        </div>
        <p className="text-base text-black">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-[26px] text-black mb-6">Top trends</h2>
        <Image src={about_1} alt="photo" />
        <p className="text-base text-black mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
        <ul className="text-base text-black mt-4">
          <li>● consectetur adipiscing elit. Aliquam placerat</li>
          <li>● Lorem ipsum dolor sit amet consectetur </li>
        </ul>
      </div>
      <div>
        <h2 className="text-[26px] text-black mb-6">Produced with care</h2>
        <Image src={about_2} alt="photo" />
        <p className="text-base text-black mt-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendu.
        </p>
      </div>
    </div>
  );
};

export default About;
