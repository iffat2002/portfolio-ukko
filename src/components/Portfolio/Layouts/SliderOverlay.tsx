import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderOverlay = ({ slide, url, closeModal, content }) => {
  const [currentSlide, setCurrentSlide] = useState(slide);
  const sliderRef = useRef<Slider | null>(null);
  const isVideoSlide = content[currentSlide]?.type === "video";
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    fade: true, // Enable fade effect

    afterChange: (index) => {
      // Update the current slide count
      setCurrentSlide((prev) => (prev === 1 ? 2 : prev - 1)); // Adjust currentSlide accordingly
    },
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const handleOverlayClick = (event) => {
  
    if (event.target.classList.contains('overlay')) {
      closeModal();
    }
  };
  const containerClass = `slide-container ${isVideoSlide ? 'video-slide' : 'image-slide'}`;
  const footer=`overlay-footer ${isVideoSlide ?  'overlay-footer':'footer-800'}`;
  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="overlay-content">
        <Slider
          {...settings}
          ref={sliderRef}
           className={containerClass}>
        
          {content.map((item, index) => (
            <div key={index}>
              {item.type === "image" ? (
                <img src={item.img} alt={`Slide ${index + 1}`} />
              ) : (
                <div>
                  <iframe
                    src={item.videoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    title="Video Modal"
                    
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </Slider>
        <div
          className={footer}
          
        >
          <div className="elementor-button-content-wrapper ">
            <button className="custom-prev" onClick={handlePrev}>
              <img
                src="/images/nav_left.png"
                alt="swipe to previous slide"
              ></img>
            </button>
            <button className="custom-next" onClick={handleNext}>
              <img src="/images/nav_right.png" alt="swipe to next slide"></img>
            </button>
            <span className="portfolio-slide-count">{currentSlide}/2</span>
          </div>
          <button className="overlay-close" onClick={closeModal}>
            <img src="/images/close.png" alt="close video"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderOverlay;