"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface ToggleHolderProps {
  open: () => void;
  openVal: boolean;
  dynamicSection: string;
}

const ToggleHolder: React.FC<ToggleHolderProps> = ({
  open,
  openVal,
  dynamicSection,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSection, setActiveSection] = useState<string>("");
  const sections = [
    "home",
    "services",
    "about",
    "portfolio",
    "blog",
    "skills",
    "contact",
  ];
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  useEffect(() => {
    if (isHomePage) {
      const scrollPosition = localStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem("scrollPosition");
      }
      const scrollRoot = document.querySelector("[data-scroller]");
      const options = {
        root: scrollRoot || null,
        rootMargin: "0px",
        threshold: 0.3,
      };
      const onIntersect = (entries) => {
        entries.forEach((entry) => {
          if (dynamicSection === "portfolio") {
            setActiveSection(dynamicSection);
            const pageIndex = sections.indexOf(dynamicSection) + 1;
            setCurrentPage(pageIndex);
          } else {
            const section = entry.target.getAttribute("id");
            if (entry.isIntersecting && section) {
              setActiveSection(section);
              const pageIndex = sections.indexOf(section) + 1;
              setCurrentPage(pageIndex);
            }
          }
        });
      };
      const observer = new IntersectionObserver(onIntersect, options);
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
      setCurrentPage(1);
    }
  }, [sections, isHomePage]);

  return (
    <div className="toggle-holder">
      <div id="toggle" className={`${openVal ? "on" : ""}`} onClick={open}>
        <div className="menu-line"></div>
      </div>
      <div className="top-pagination mobile">
        <motion.div
          className="current-num"
          key={currentPage}
          initial={{ x: "-20px", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          <span>{`0${currentPage}`}</span>
        </motion.div>
        <div className="pagination-div">/</div>
        <div className="total-pages-num">
          {isHomePage ? `0${sections.length}` : "01"}
        </div>
      </div>
    </div>
  );
};

export default ToggleHolder;
