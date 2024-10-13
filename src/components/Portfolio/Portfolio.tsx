"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioPreview from "./PortfolioPreview";
import Isotope from "isotope-layout";
import data from "./portfolio.json";
import VideoOverlay from "./Layouts/VideoOverlay";
import SliderOverlay from "./Layouts/SliderOverlay";
const Portfolio = () => {
  const timeoutIds = useRef<(number | NodeJS.Timeout)[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const portfolioSectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridItems, setGridItems] = useState<JSX.Element[]>([]);
  const isotopeInstance = useRef<any>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

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
        // Reset display property of items to avoid style issues
        const items = document.querySelectorAll(".grid-item");
        items.forEach((item) => {
          (item as HTMLElement).style.display = ""; // Reset display
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
    callback(); // Trigger next action after hiding
  };

  const scrollToPortfolio = (callback: () => void) => {
    if (portfolioSectionRef.current) {
      const offsetTop = portfolioSectionRef.current.offsetTop;
      window.scrollTo({ top: offsetTop + 140, behavior: "smooth" });
    }
    const timeoutId1 = setTimeout(callback, 1000);
    timeoutIds.current.push(timeoutId1);
  };

  const handlePortfolioClick = (slug: string, id: number) => {
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
          setSelectedSlug(slug);
          setIsPreviewVisible(true);
        });
      });
    });
  };

  useEffect(() => {
    const items = document.querySelectorAll(".grid-item");
    const addClickListener = (item: Element) => {
      const itemIdAttr = item.getAttribute("id");
      if (itemIdAttr) {
        const itemId = itemIdAttr.split("-")[2];
        const slug = `item-${itemId}`;
        item.addEventListener("click", () => handlePortfolioClick(slug, Number(itemId)));
      }
    };
  
    const removeClickListener = (item: Element) => {
      const itemIdAttr = item.getAttribute("id");
      if (itemIdAttr) {
        const itemId = itemIdAttr.split("-")[2];
        const slug = `item-${itemId}`;
        item.removeEventListener("click", () => handlePortfolioClick(slug, Number(itemId)));
      }
    };
  
    items.forEach(addClickListener);
  
    return () => {
      items.forEach(removeClickListener);
    };
  }, []);
  
  //////////////////////////////

  // Append new grid items and re-layout when `clicked` is true
  useEffect(() => {
    if (clicked && isotopeInstance.current) {
      // Reinitialize Isotope after adding new elements
      const newGridItems = document.querySelectorAll(".new-grid-item");
      isotopeInstance.current.appended(newGridItems);
      isotopeInstance.current.layout();
    }
  }, [clicked, gridItems]);

 
  const handleBack = () => {
    setSelectedSlug(null);

  };

  const [layoutData, setLayoutData] = useState("");
  const getOverlay = (slug: string) => {
    const current = data.filter((item) => item.slug === slug)[0];
    setLayoutData(current);
    setIsModalOpen(true);
  };
  const [slide, setSlide] = useState(2);
  const closeModal = () => {
    setIsModalOpen(false);
    setSlide(2);
  };

  const [loading, setLoading] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const handleLoadMoreClick = () => {
    setClicked(true);
    setLoading(true);

    const timeoutId2 = setTimeout(() => {
      setGridItems((prevItems) => [
        ...prevItems,
        <div
          key={`new-item-${prevItems.length}`}
          className="grid-item element-item p_one new-grid-item"
          data-top="1350px"
        >
          <a
            className="item-link ajax-portfolio"
            data-id="69"
            onClick={() => getOverlay("item-5")}
          >
            <img
              loading="lazy"
              decoding="async"
              width="800"
              height="400"
              src="/images/portfolio5-1.jpg"
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              srcSet="/images/portfolio5-1.jpg 800w, /images/portfolio5-1.jpg 300w, /images/portfolio5-1.jpg 768w"
              sizes="(max-width: 800px) 100vw, 800px"
            />
            <div className="portfolio-text-holder">
              <div className="portfolio-text-wrapper">
                <p className="portfolio-text">Art</p>
                <p className="portfolio-cat">Text</p>
              </div>
            </div>
          </a>
        </div>,
      ]);
      setLoading(false);
    }, 1000);
    timeoutIds.current.push(timeoutId2);
  };
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
      setHasMorePosts(false);
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
              <PortfolioPreview slug={selectedSlug} onBack={handleBack} />
            ) : (
              <div
                className={`elementor-element elementor-element-1b02fb93 elementor-widget elementor-widget-coco-portfolio ${
                  fadeOut ? "fade-out" : ""
                }`}
                data-id="1b02fb93"
                data-element_type="widget"
                data-widget_type="coco-portfolio.default"
              >
                <div className="elementor-widget-container">
                  <div id="portfolio-wrapper" className="relative">
                    <div className="portfolio-load-content-holder content-670"></div>
                    <div className="grid" id="portfolio-grid">
                      <div className="grid-sizer"></div>
                      <div
                        id="p-item-65"
                        onClick={() => handlePortfolioClick("item-1", 65)}
                        className="grid-item element-item p_one"
                        data-top="0px"
                        data-left="0%"
                      >
                        <a className="item-link ajax-portfolio" data-id="65">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="800"
                            height="400"
                            src="/imges/portfolio1.jpg"
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                            alt=""
                            srcSet="/images/portfolio1.jpg 800w, /images/portfolio1-300x150.jpg 300w, /images/portfolio1-768x384.jpg 768w"
                            sizes="(max-width: 800px) 100vw, 800px"
                          />
                          <div className="portfolio-text-holder">
                            <div className="portfolio-text-wrapper">
                              <p className="portfolio-text">Sneakers</p>
                              <p className="portfolio-cat">Text</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        id="p-item-62"
                        onClick={() => handlePortfolioClick("item-2", 62)}
                        className="grid-item element-item p_one_half"
                        data-top="450px"
                        data-left="0%"
                      >
                        <a className="item-link ajax-portfolio" data-id="62">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="800"
                            src="/images/portfolio2-1.jpg"
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                            alt=""
                            srcSet="/images/portfolio2-1.jpg 400w, /images/portfolio2-1-150x300.jpg 150w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                          <div className="portfolio-text-holder">
                            <div className="portfolio-text-wrapper">
                              <p className="portfolio-text">Stairways</p>
                              <p className="portfolio-cat">Text</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        id="p-item-59"
                        onClick={() => handlePortfolioClick("item-3", 59)}
                        className="grid-item element-item p_one_half"
                        data-top="450px"
                        data-left="50%"
                      >
                        <a className="item-link ajax-portfolio" data-id="59">
                          <img
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="400"
                            src="/images/portfolio3-1.jpg"
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                            alt=""
                            srcSet="/images/portfolio3-1.jpg 400w, /images/portfolio3-1-300x300.jpg 300w, /images/portfolio3-1-150x150.jpg 150w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                          <div className="portfolio-text-holder">
                            <div className="portfolio-text-wrapper">
                              <p className="portfolio-text">Nature</p>
                              <p className="portfolio-cat">Text</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div
                        className="grid-item element-item p_one_half"
                        data-top="900px"
                        data-left="50%"
                      >
                        <a
                          className="item-link"
                          // onClick={() =>
                          //   handleItemClick(
                          //     "https://player.vimeo.com/video/199192931"
                          //   )
                          // }
                          onClick={() => getOverlay("item-4")}
                          data-rel="prettyPhoto[portfolio1]"
                          rel="prettyPhoto[portfolio1]"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            width="400"
                            height="400"
                            src="/images/portfolio4-1.jpg"
                            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                            alt=""
                            srcSet="/images/portfolio4-1.jpg 400w, /images/portfolio4-1-300x300.jpg 300w, /images/portfolio4-1-150x150.jpg 150w"
                            sizes="(max-width: 400px) 100vw, 400px"
                          />
                          <div className="portfolio-text-holder">
                            <div className="portfolio-text-wrapper">
                              <p className="portfolio-text">Architecture</p>
                              <p className="portfolio-cat">Video</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      {gridItems.map((item) => item)}
                    </div>
                    <div className="block  center-relative center-text more-posts-portfolio-holder">
                      {loading && (
                        <span className="more-posts-portfolio-loading">
                          LOADING
                        </span>
                      )}
                      {!loading && hasMorePosts && (
                        <span
                          onClick={handleLoadMoreClick}
                          className="more-posts-portfolio"
                        >
                          LOAD MORE
                        </span>
                      )}
                      {!loading && !hasMorePosts && (
                        <span className="no-more-posts-portfolio">NO MORE</span>
                      )}
                    </div>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {/* Overlay Layouts */}
      {layoutData?.layout === "video-overlay" && isModalOpen && (
        <VideoOverlay
          url={layoutData.url}
          closeModal={closeModal} // Pass the close function
        />
      )}
      {layoutData?.layout === "slider-overlay" && isModalOpen && (
        <SliderOverlay
          url={layoutData.url}
          content={layoutData.content}
          closeModal={closeModal}
          slide={2}
        />
      )}
    </section>
  );
};

export default Portfolio;
