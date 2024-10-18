"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioPreview from "./PortfolioPreview";
import Isotope from "isotope-layout";
import data from "./portfolio.json";
import VideoOverlay from "./Layouts/VideoOverlay";
import SliderOverlay from "./Layouts/SliderOverlay";
import ThumbnailGrid from "./ThumbnailGrid";
const Portfolio = () => {
  const timeoutIds = useRef<(number | NodeJS.Timeout)[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sliceIndex, setSliceIndex]= useState(4);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const portfolioSectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridItems, setGridItems] = useState<JSX.Element[]>([]);
  const isotopeInstance = useRef<any>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
const [showOverlay, setShowOverlay] =useState(false)
  useEffect(() => {
    const initializeIsotope = async () => {
      const Isotope = (await import("isotope-layout")).default;

      isotopeInstance.current = new Isotope(".grid", {
        percentPosition: true,
        itemSelector: ".grid-item",
        masonry: {
          columnWidth: ".grid-sizer",
        },
      });
    };

    initializeIsotope();

    return () => {
      if (isotopeInstance.current) {
        const items = document.querySelectorAll(".grid-item");
        items.forEach((item) => {
          (item as HTMLElement).style.display = ""; 
        });
      }
    };
  }, [selectedSlug]);

  const fadeOutItems = (items: NodeListOf<Element>, callback: () => void) => {
    let opacity = 1;
    const minOpacity = 0.3;
    const fadeDuration = 200; //
    const fadeStep = (1 - minOpacity) / (fadeDuration / 16);

    const fade = () => {
      opacity -= fadeStep;
      opacity = Math.max(opacity, minOpacity);

      items.forEach((item) => {
        (item as HTMLElement).style.opacity = `${opacity}`;
      });

      if (opacity > minOpacity) {
        requestAnimationFrame(fade);
      } else {
        callback();
      }
    };

    requestAnimationFrame(fade);
  };

  const hideItems = (items: NodeListOf<Element>, callback: () => void) => {
    items.forEach((item) => {
      (item as HTMLElement).style.display = "none"; // Hide the items
    });
    callback(); 
  };

  const scrollToPortfolio = (callback: () => void) => {
    if (portfolioSectionRef.current) {
      const offsetTop = portfolioSectionRef.current.offsetTop;
      window.scrollTo({ top: offsetTop + 140, behavior: "smooth" });
    }
    const timeoutId1 = setTimeout(callback, 1000);
    timeoutIds.current.push(timeoutId1);
  };

  const handlePortfolioClick = (id: number, showOverlay: Boolean) => {
    if(showOverlay === true){
      const current = data.filter((item) => item.id === id)[0];
      setLayoutData(current);
      setIsModalOpen(true);
    } else{
    const clickedItem = document.getElementById(`p-item-${id}`);
    const otherItems = document.querySelectorAll(
      `.grid-item:not(#p-item-${id})`
    );

    if (clickedItem) {
      clickedItem.classList.remove("fade-out", "hidden");
    }
    // Fade out the other items
    fadeOutItems(otherItems, () => {
      scrollToPortfolio(() => {
        hideItems(otherItems, () => {
          setSelectedSlug(id);
          setIsPreviewVisible(true);
        });
      });
    });}
  };


  const handleBack = () => {
    setSelectedSlug(null);
  };

  const [layoutData, setLayoutData] = useState("");

  const [slide, setSlide] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
    setSlide(layoutData?.defaultSlide);
  };

  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  useEffect(() => {
    if (clicked && isotopeInstance.current) {
      const newGridItems = document.querySelectorAll(".new-grid-item");
      isotopeInstance.current.appended(newGridItems);
      isotopeInstance.current.layout();
    }
  }, [clicked, gridItems]);
  const handleLoadMoreClick = () => {
    setClicked(true);
    setLoading(true);
    

    const timeoutId2 = setTimeout(() => {
      setGridItems((prevItems) => [
        ...prevItems,
      ]);
      
      setSliceIndex((prevIndex) => prevIndex + 1);  // Set sliceIndex independently
      setLoading(false); 
    }, 1000);
  }
  // Clean up the timeout when the component unmounts
  useEffect(() => {
    return () => {
      timeoutIds.current.forEach((id) => clearTimeout(id));
      timeoutIds.current = [];
    };
  }, []);
  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.reloadItems();
      isotopeInstance.current.arrange();
    }
  }, [gridItems]);

  useEffect(() => {
    if (!loading && clicked) {
      if(sliceIndex >= data.length){
      setHasMorePosts(false);
      }
    }
  }, [loading, clicked]);
 
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-51c27d18 op-section extra-width extra-width-portfolio elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="51c27d18"
      data-element_type="section"
      id="portfolio"
      ref={portfolioSectionRef}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="elementor-container elementor-column-gap-no"
      >
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64adf03d"
          data-id="64adf03d"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-4c690d57 elementor-widget elementor-widget-heading"
              data-id="4c690d57"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  PORTFOLIO
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-e5b9056 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="e5b9056"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Nam ultrices ultrices nec tortor pulvinar fermentum milovo
                  selicon perotation wilmo.
                </p>
              </div>
            </div>
            {isPreviewVisible && selectedSlug ? (
              <PortfolioPreview id={selectedSlug} onBack={handleBack} />
            ) : (
              <ThumbnailGrid   sliceIndex={sliceIndex}
              gridItems={gridItems}
              handlePortfolioClick={handlePortfolioClick}
              handleLoadMoreClick={handleLoadMoreClick}
              loading={loading}
              hasMorePosts={hasMorePosts} />
            )}
          </div>
        </div>
      </motion.div>
      {/* Overlay Layouts */}
      {layoutData?.layout === "video-overlay" && isModalOpen && (
        <VideoOverlay url={layoutData.url} closeModal={closeModal} />
      )}
      {layoutData?.layout === "slider-overlay" && isModalOpen && (
        <SliderOverlay
          url={layoutData.url}
          content={layoutData.content}
          closeModal={closeModal}
          slide={layoutData.defaultSlide}
        />
      )}
    </section>
  );
};

export default Portfolio;
