"use client";

import HeaderHolder from "../HeaderHolder/HeaderHolder";
import React, { useState,useEffect } from "react";
import ToggleHolder from "../ToggleHolder/ToggleHolder";
import data from "./portfolio.json";
import { motion } from "framer-motion";
import SwiperLayout from "./Layouts/SwiperLayout";
import GridLayout from "./Layouts/GridLayout";
import SimpleLayout from "./Layouts/SimpleLayout";


interface PortfolioPreviewProps {
  layoutNo: string;
  onBack: () => void;
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  layoutNo,
  onBack,
}) => {
  const current = data.filter((item) => item.layoutNo === layoutNo)[0];
  const [open, setOpen] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleBackClick = () => {
    setIsFadingOut(true); 
    const timeoutId = setTimeout(() => {
      onBack();
    }, 500); 
    return () => clearTimeout(timeoutId);
  };
  

  
  const renderLayout = () => {
    switch (current.layout) {
      case "simple-layout":
        return (
          <SimpleLayout
            imgs={current.imgs}
            title={current.title}
            subtitle={current.subtitle}
            desc={current.desc}
            texts={current.texts}
          />
        );

      case "grid-layout":
        return (
          <GridLayout
            imgs={current.imgs}
            title={current.title}
            subtitle={current.subtitle}
            desc={current.desc}
            link={current.link}
          />
        );

      case "swiper-layout":
        return (
          <SwiperLayout
            imgs={current.imgs}
            title={current.title}
            subtitle={current.subtitle}
            desc={current.desc}
          />
        );

      default:
        return null;
    }
  };
  return (
    <div  className={`portfolio-page ${isFadingOut ? 'fade-out' : ''}`} >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.25, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
      >
        <div className="back-port" onClick={handleBackClick}>
          <img src="/images/back.png" alt="" />
        </div>
        <div>{renderLayout()}</div>;
      </motion.div>
    </div>
  );
};

export default PortfolioPreview;
