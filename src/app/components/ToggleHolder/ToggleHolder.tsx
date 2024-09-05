import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

const ToggleHolder = ({ open, openVal }: { open: any; openVal: any }) => {
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

  // Get the current path
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        let visibleSection = "";
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            visibleSection = entry.target.id;
            highestRatio = entry.intersectionRatio;
          }
        });

        if (visibleSection) {
          const pageIndex = sections.indexOf(visibleSection) + 1;
          setCurrentPage(pageIndex);
        }
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Simplified threshold for better performance
      });

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.observe(sectionElement);
        }
      });

      // Ensure the first section is correctly identified on page load
      const checkInitialSection = () => {
        const firstSectionInView = sections.find((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom > 0;
          }
          return false;
        });

        if (firstSectionInView) {
          const pageIndex = sections.indexOf(firstSectionInView) + 1;
          setCurrentPage(pageIndex);
        }
      };

      checkInitialSection();

      return () => {
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            observer.unobserve(sectionElement);
          }
        });
      };
    } else {
      // For non-home pages, set the current page and total pages to 1
      setCurrentPage(1);
    }
  }, [pathname, sections]);

  // Handle smooth scroll when clicking menu items
  const smoothScrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Add the smoothScrollToSection call when navigating to sections
  const handleSectionClick = (section: string) => {
    smoothScrollToSection(section);
  };

  return (
    <div className="toggle-holder">
      <div id="toggle" className={`${openVal && "on"}`} onClick={() => open()}>
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
          {pathname === "/" ? `0${sections.length}` : "01"}
        </div>
      </div>
    </div>
  );
};

export default ToggleHolder;
