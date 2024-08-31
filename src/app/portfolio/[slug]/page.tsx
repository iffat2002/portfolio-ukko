"use client";

import HeaderHolder from "@/app/components/HeaderHolder/HeaderHolder";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ToggleHolder from "@/app/components/ToggleHolder/ToggleHolder";
import Link from "next/link";

import { motion } from "framer-motion";

const data = [
  {
    slug: "item-1",
    imgs: [
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item1.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item2.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item3.jpg",
    ],
    title: "ART OF CAMERA",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly dancing lorem ipsum.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.`,
  },
  {
    slug: "item-2",
    imgs: [
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item1.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item2.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item3.jpg",
    ],
    title: "ART OF CAMERA",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly dancing lorem ipsum.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.`,
  },
  {
    slug: "item-3",
    imgs: [
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item1.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item2.jpg",
      "https://demo.cocobasic.com/ukko-wp/wp-content/uploads/2019/11/item3.jpg",
    ],
    title: "ART OF CAMERA",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly dancing lorem ipsum.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.`,
  },
];

const Portfolio = ({ params }: { params: { slug: string } }) => {
  const currnet = data.filter((item) => item.slug === params.slug)[0];

  console.log("current",currnet);
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <div className="portfolio-page">
      <ToggleHolder open={openMenu} openVal={open} />
      <HeaderHolder open={openMenu} close={closeMenu} openVal={open} />
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="content_wrap"
      >
        <Link href="/" className="back-port">
          <img src="/back.png" alt="" />
        </Link>
        {currnet ? (
          <>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-dot">${
                    index + 1
                  }</span>`;
                },
              }}
              className="swiper-portfolio"
            >
              {currnet.imgs.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="slide-content">
                    <img src={img} alt="" className="slide_img_portfolio" />
                  </div>
                </SwiperSlide>
              ))}

              <div className="custom-pagination"></div>
            </Swiper>

            <div className="content_data">
              <h1>{currnet.title}</h1>
              <h3>{currnet.subtitle}</h3>
              <p dangerouslySetInnerHTML={{ __html: currnet.desc }}></p>
            </div>
          </>
        ) : (
          <>NO Portfolio found for this slug : {params.slug}</>
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;
