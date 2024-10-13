"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface ToggleHolderProps {
  open: () => void;
  openVal: boolean;
}

const ToggleHolder: React.FC<ToggleHolderProps> = ({ open, openVal }) => {
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
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  const isHomePage = pathname === "/";

  useEffect(() => {
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
        threshold: 0.3,
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
      setCurrentPage(1);
    }
  }, [isHomePage]);

  useEffect(() => {}, [currentPage]);

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
