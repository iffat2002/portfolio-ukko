"sue client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ToggleHolder = ({ open, openVal }: { open: any; openVal: any }) => {
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

  useEffect(() => {
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
      threshold: 0.2, // Adjust the threshold as needed
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
  }, [sections]);

  return (
    <div className="toggle-holder">
      <div id={`toggle`} className={`${openVal && "on"}`} onClick={() => open()}>
        <div className="menu-line"></div>
      </div>
      <div className="top-pagination mobile">
        <motion.div
          className="current-num"
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
        >
          {" "}
          <span>{`0${currentPage}`}</span>
        </motion.div>
        <div className="pagination-div">/</div>
        <div className="total-pages-num">{`0${sections.length}`}</div>
      </div>
    </div>
  );
};

export default ToggleHolder;
