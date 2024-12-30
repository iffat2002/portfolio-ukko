"use client";
import React, { useState, useEffect } from "react";
import { jarallax, jarallaxElement } from "jarallax";
import { Element, animateScroll as scroll, scrollSpy } from "react-scroll";
import Head from "next/head";
import ToggleHolder from "../components/ToggleHolder/ToggleHolder";
import HeaderHolder from "../components/HeaderHolder/HeaderHolder";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Blog from "../components/Blog/Blog";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [dynamicSection, setdynamicSection] = useState<string>("");

  const updateSectionActive = (section: string) => {
    setdynamicSection(section);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("jarallax").then(({ jarallax, jarallaxElement }) => {
        jarallaxElement();

        const jarallaxElements = document.querySelectorAll(
          "[data-jarallax-element]"
        );
        jarallax(jarallaxElements, {
          speed: 0.2,
        });
      });
    }
  }, []);

  const openMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Ukko - Personal Portfolio</title>
        <meta name="description" content="A designer portfolio page" />
        <meta name="keywords" content="Next.js, SEO, React" />
      </Head>
      <main>
        <ToggleHolder
          open={openMenu}
          openVal={open}
          dynamicSection={dynamicSection}
        />
        <HeaderHolder
          open={openMenu}
          close={closeMenu}
          openVal={open}
          dynamicSection={dynamicSection}
          updateSectionActive={updateSectionActive}
        />
        <div id="content" className="site-content center-relative">
          <div className="content-holder content-800 post-181 page type-page status-publish hentry">
            <div className="content-670">
              <div
                data-elementor-type="wp-page"
                data-elementor-id="181"
                className="elementor elementor-181"
              >
                <Element name="home">
                  <Home />
                </Element>
                <Element name="services">
                  <Services />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="portfolio">
                  <Portfolio />
                </Element>
                <Element name="blog">
                  <Blog />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </div>
              <div className="clear"></div>
              <div id="comments" className="comments-holder">
                <div className="clear"></div>
              </div>
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
