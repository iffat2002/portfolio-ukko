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
        item.addEventListener("click", () =>
          handlePortfolioClick(slug, Number(itemId))
        );
      }
    };

    const removeClickListener = (item: Element) => {
      const itemIdAttr = item.getAttribute("id");
      if (itemIdAttr) {
        const itemId = itemIdAttr.split("-")[2];
        const slug = `item-${itemId}`;
        item.removeEventListener("click", () =>
          handlePortfolioClick(slug, Number(itemId))
        );
      }
    };

    items.forEach(addClickListener);

    return () => {
      items.forEach(removeClickListener);
    };
  }, []);

  useEffect(() => {
    if (clicked && isotopeInstance.current) {
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
    const current = data.filter((item) => item.layoutNo === slug)[0];
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
          id={`p-item-${data[4].id}`}
          onClick={() =>
            functionMap[data[4].function](data[4].layoutNo, data[4].id)
          }
          className={`grid-item element-item ${data[4].size}`}
          data-top={data[4].datatop}
          data-left={data[4].dataleft}
        >
          <a className="item-link ajax-portfolio" data-id={data[4].id}>
            <img
              loading="lazy"
              decoding="async"
              width={data[4].width}
              height={data[4].height}
              src={data[4]["img-src"]}
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              srcSet={data[4].srcset}
              sizes={data[4].imagesizes}
            />
            <div className="portfolio-text-holder">
              <div className="portfolio-text-wrapper">
                <p className="portfolio-text">{data[4]["portfolio-text"]}</p>
                <p className="portfolio-cat">{data[4]["portfolio-cat"]}</p>
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
  const functionMap = {
    handlePortfolioClick,
    getOverlay,
  };
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
              <PortfolioPreview layoutNo={selectedSlug} onBack={handleBack} />
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

                      {/* mapping thorugh json data for grid layout */}

                      {data.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          id={`p-item-${item.id}`}
                          onClick={() =>
                            functionMap[item.function](item.layoutNo, item.id)
                          }
                          className={`grid-item element-item ${item.size}`}
                          data-top={item.datatop}
                          data-left={item.dataleft}
                        >
                          <a
                            className="item-link ajax-portfolio"
                            data-id={item.id}
                          >
                            <img
                              loading="lazy"
                              decoding="async"
                              width={item.width}
                              height={item.height}
                              src={item["img-src"]}
                              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                              alt=""
                              srcSet={item.srcset}
                              sizes={item.imagesizes}
                            />
                            <div className="portfolio-text-holder">
                              <div className="portfolio-text-wrapper">
                                <p className="portfolio-text">
                                  {item["portfolio-text"]}
                                </p>
                                <p className="portfolio-cat">
                                  {item["portfolio-cat"]}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}

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
        <VideoOverlay url={layoutData.url} closeModal={closeModal} />
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
