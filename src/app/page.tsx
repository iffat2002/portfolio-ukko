"use client";
import React, { useState } from "react";
import { jarallax, jarallaxElement } from "jarallax";

import Header from "./components/Header/Header";
import ToggleHolder from "./components/ToggleHolder/ToggleHolder";
import HeaderHolder from "./components/HeaderHolder/HeaderHolder";

import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

export default function Page() {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    // Add Element Extension.
    jarallaxElement();

    // Add Jarallax on DOM Node.
    jarallax(document.querySelectorAll("[data-jarallax-element]"));
  }, []);

  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* <Header/> */}
      <ToggleHolder open={openMenu} openVal={open} />
      <HeaderHolder open={openMenu} close={closeMenu} openVal={open} />
      <div id="content" className="site-content center-relative">
        <div className="content-holder content-800 post-181 page type-page status-publish hentry">
          <div className="content-670">
            <div
              data-elementor-type="wp-page"
              data-elementor-id="181"
              className="elementor elementor-181"
            >
              <Home />
              <Services />
              <About />
              <Portfolio />
              <Blog />
              <Skills />
              <Contact />
            </div>
            <div className="clear"></div>
            <div id="comments" className="comments-holder">
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
