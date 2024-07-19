import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../../styles/global.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { dataProducts } from "@/app/components/ProductsList/data";
import { IProduct } from "@/app/types/types";

const Product = ({ id, url, title, price, desc }: IProduct) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section>
      <div
        key={id}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-start mt-40 mb-24 "
      >
        <div>
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <Image src={url} alt="img" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper "
          >
            <SwiperSlide>
              <Image src={url} alt="img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <h2 className="text-2xl text-black mb-6">{title}</h2>
          <span className="text-xl text-gold-400">$ {price}</span>
          <div className="mt-12 mb-20">
            <p className="text-base text-black">{desc}</p>
            <div className="mt-12 flex-between-center gap-x-6">
              <div>counter</div>
              <button className="border border-black rounded py-4 w-full text-black text-base">
                ADD TO CART
              </button>
            </div>
          </div>
          <div>social</div>
          <div>
            <p>
              Категория: <span>Fashion, style</span>
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Product;
