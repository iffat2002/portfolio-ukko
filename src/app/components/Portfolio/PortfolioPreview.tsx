"use client";

import HeaderHolder from "@/app/components/HeaderHolder/HeaderHolder";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ToggleHolder from "@/app/components/ToggleHolder/ToggleHolder";
import Link from "next/link";

import { motion } from "framer-motion";

const data = [
  {
    slug: "item-1",
    imgs: [
      "/item1.jpg",
      "/item2.jpg",
      "/item3.jpg",
    ],
    title: "ART OF CAMERA",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly dancing lorem ipsum.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.`,
  },
  {
    slug: "item-2",
    imgs: [
      "/image_blog_01.jpg",
      "/image_blog_02.jpg",
    
    ],
    title: "PHOTO SESSION",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly dancing lorem ipsum.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus. Vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.`,
  },
  {
    slug: "item-3",
    imgs: 
    '/photo-1.jpg'
    ,
    title: "INSPIRATION",
    subtitle:
      "Two ghostly white figures in coveralls and helmets are softly.",
    desc: `Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus bangelis rich in heavy atomolo lorem lipsum forte bimiola.`,
  },
];
 
// Define the type for the component props
interface PortfolioPreviewProps {
    slug: string;
    onBack: () => void; 
  }
  
const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ slug, onBack }) => {
    const current = data.filter((item) => item.slug === slug)[0];
    console.log("current",current);
    const [open, setOpen] = useState(false);
    const openMenu = () => setOpen(!open);
    const closeMenu = () => setOpen(false);
  return (
    <div className="portfolio-page">
    
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.25, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
     
    >
      <div className="back-port" onClick={onBack}  >
        <img src="/back.png" alt="" />
      </div>
      {current.slug === "item-2" ? (<div> <div className="content_data">
            <h1>{current.title}</h1>
            <h3>{current.subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: current.desc }}></p>
           
          </div> 
          <div className="slide-content" style={{height:"100%"}}>
    <img src={current.imgs[0]} alt="" />
    <div className="content_data">
    <p >Cras pretium metus pulvinar ultricies auctor. In varius purus blandit sem mollis tristique. Curabitur sed lorem vel ligula pulvinar porttitor proin sit amet mauris</p>
   </div>
   </div>
   <div className="slide-content" style={{height:"100%"}}>
    <img src={current.imgs[1]} alt="" />
    <div className="content_data">
    <p>Veleifend amet, ullamcorper lacus vangelis rich in heavy atoms descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor.</p>
    </div>
  </div>

 </div>) : null }
 {current.slug ==="item-3" ? (<div className="nature-preview">
 <div className="content_data" style={{marginTop:"0px"}}>
            <h1>{current.title}</h1>
            <h3 style={{width:'100%'}}>{current.subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: current.desc }}></p>
            <p>Descended from astronomers dream of the mind’s cras pretium metus pulvinar ultricies auctor lorem lipsum optom poresiose mullu.</p>
            <a href="/blog/hundreds-of-thousands-a-still-more-glorious-nights-around-art-table/"><div className="block center-relative more-posts-portfolio-holder"><span className="more-posts-portfolio">READ MORE</span><span className="more-posts-portfolio-loading">LOADING</span><span className="no-more-posts-portfolio">NO MORE</span></div> </a>
          </div> 
          <img    src='/photo-1.jpg'
                                          fetchPriority="high" 
                                          decoding="async" 
                                          width="400" 
                                          height="830" 
                                       
                                          className="main-photo" 
                                          alt="" 
                                          data-jarallax-element="0 -30" 
                                      
                                          sizes="(max-width: 536px) 100vw, 536px"
                                       /> 
   
 </div>): null}
      {current.slug === "item-1" ? (
        <>
          <Swiper style={{ "--swiper-pagination-bullet-inactive-color": "#999999", "--swiper-pagination-bullet-inactive-opacity": "1",}}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-dot">${
                  index + 1
                }</span>`;
              },
            }}
            autoplay={{
              delay: 4000, // Delay between slides (in milliseconds)
              disableOnInteraction: false, // Autoplay will not be disabled after user interaction
            }}
            className="swiper-portfolio"
          >
            {current.imgs.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img src={img} alt="" className="slide_img_portfolio" />
                </div>
              </SwiperSlide>
            ))} 

            <div className="custom-pagination"></div>
          </Swiper>

          <div className="content_data">
            <h1>{current.title}</h1>
            <h3>{current.subtitle}</h3>
            <p dangerouslySetInnerHTML={{ __html: current.desc }}></p>
          </div>
        </>
      ) : (
        null
      )}
    </motion.div>
  </div>
  )
}

export default PortfolioPreview

