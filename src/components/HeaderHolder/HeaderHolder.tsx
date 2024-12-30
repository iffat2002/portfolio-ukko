import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

const HeaderHolder = ({
  open,
  close,
  openVal,
  updateSectionActive,
}: {
  open: any;
  close: any;
  openVal: any;
  updateSectionActive: (section: string) => void;
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
    if (pathname !== "/") {
      localStorage.removeItem("scrollPosition");
      router.push(`/#${section}`);
    }
    close();
  };

  useEffect(() => {
    const saveScrollPosition = () => {
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);
  const [target, settarget] = useState("");
  const handleSetActive = (section:string) => {
    setActiveSection(section);
    settarget(section);
    updateSectionActive(section);
  };

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
        threshold: openVal ? 0.3 : 0.4,
      };
      const onIntersect = (entries:IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (target === "portfolio") {
            setActiveSection(target);
            const pageIndex = sections.indexOf(target) + 1;
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
    <div className={`header-holder ${openVal ? "open" : ""}`}>
      <div className="header-wrapper" data-header>
        <header>
          <div className="top-pagination">
            <motion.div
              key={currentPage}
              initial={{ x: "-20px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="current-num"
            >
              <span>{`0${isHomePage ? currentPage : 1}`}</span>
            </motion.div>
            <div className="pagination-div">/</div>
            <div className="total-pages-num">{`0${
              isHomePage ? sections.length : 1
            }`}</div>
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
                      className={`one-page-section cursor-p menu-item menu-item-type-custom menu-item-object-custom menu-item-${section} ${
                        activeSection === section ? "current" : ""
                      }`}
                      onClick={() => {
                        close();
                      }}
                    >
                      <Link
                        activeClass="active"
                        to={section}
                        spy={true}
                        smooth={true}
                        duration={1500}
                        onSetActive={handleSetActive}
                        onClick={() => handleSectionClick(section)}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </Link>
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
