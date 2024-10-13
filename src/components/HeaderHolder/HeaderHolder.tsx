"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const HeaderHolder = ({
  open,
  close,
  openVal,
}: {
  open: any;
  close: any;
  openVal: any;
}) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sections = [
    "home",
    "services",
    "about",
    "portfolio",
    "blog",
    "skills",
    "contact",
  ];

  const pathname = usePathname();
  const isHomePage = pathname === "/"; 
  const handleSectionClick = (section: string) => {
    console.log("pathname", pathname, "section name:", section )
    if (pathname !== "/") {
      router.push(`/#${section}`);
    }
    close(); 
  };

  useEffect(() => {
    console.log("useeffect working")
    if (isHomePage) {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            const pageIndex = sections.indexOf(id) + 1;
            setCurrentPage(pageIndex);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.35, // Adjust the threshold as needed
      });

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });

      return () => {
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            observer.unobserve(sectionElement);
          }
        });
      };
    } else {
      // If not the home page, reset to 1 for current page and active section

      setCurrentPage(1);
    }
  }, [sections, isHomePage]);

  return (
    <div className={`header-holder ${openVal ? "open" : ""}`}>
      <div className="header-wrapper">
        <header>
          <div className="top-pagination">
            <motion.div
              key={currentPage}
              initial={{ x: "-20px", opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="current-num"
            >
              <span>{`0${isHomePage ? currentPage : 1}`}</span>
            </motion.div>
            <div className="pagination-div">/</div>
            <div className="total-pages-num">
              {`0${isHomePage ? sections.length : 1}`}
            </div>
          </div>
          <div className="site-title">JACOB HAWKINS</div>
          <div className="menu-holder">
            <div className="menu-wrapper relative">
              <nav id="header-main-menu" className="big-menu">
                <ul
                  id="menu-menu-1"
                  className="main-menu sm sm-clean"
                  data-smartmenus-id="17157766528931436"
                >
                  {sections.map((section) => (
                    <li
                      key={section}
                      className={`one-page-section menu-item menu-item-type-custom menu-item-object-custom menu-item-${section} ${
                        activeSection === section ? "current" : ""
                      }`}
                      onClick={() => close()}
                    >
                      <>
                        <Link
                          activeClass="active"
                          to={section}
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={1}
                          duration={1500}
                          delay={100}
                          isDynamic={false}
                          ignoreCancelEvents={true}
                          spyThrottle={500}
                          onClick={() => handleSectionClick(section)}
                          style={{ cursor: "pointer" }}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                      </>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="menu-social">
                <a href="#">TW.</a> <a href="#">IN.</a> <a href="#">FB.</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderHolder;
