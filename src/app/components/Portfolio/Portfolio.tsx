'use client'

import React, { useState, useRef, useEffect } from 'react'
import PortfolioPreview from './PortfolioPreview';
import Isotope from "isotope-layout";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = () => {
   const [fadeOut, setFadeOut] = useState(false);
const [clicked, setClicked] = useState(false)
console.log("clicked", clicked)
const sliderRef = useRef(null);
   const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
   const portfolioSectionRef = useRef<HTMLElement>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
const [videoUrl, setVideoUrl] = useState('');
const [gridItems, setGridItems] = useState<any[]>([]);
const isotopeInstance = useRef<Isotope | null>(null);
useEffect(() => {
   // Initialize Isotope
   isotopeInstance.current = new Isotope('.grid', {
     percentPosition: true,
     itemSelector: '.grid-item',
     masonry: {
       columnWidth: '.grid-sizer',
     },
   });
 }, [selectedSlug]);

 useEffect(() => {
   if (clicked && isotopeInstance.current) {
     // Reinitialize Isotope after adding the new element
     isotopeInstance.current.appended(document.querySelectorAll('.new-grid-item'));
     isotopeInstance.current.layout();
   }
 }, [clicked, gridItems]);
  const handlePortfolioClick = (slug: string) => {
   setFadeOut(true); // Start fade-out effect
   
   setTimeout(() => {
     if (portfolioSectionRef.current) {
       const offsetTop = portfolioSectionRef.current.offsetTop;
       window.scrollTo({ top: offsetTop + 120, behavior: 'smooth' });
     }
     
     setSelectedSlug(slug);
     setFadeOut(false); // Reset fade-out effect
   }, 500); // Match this duration with CSS transition duration
 };
 const handleBack = () => {
   setSelectedSlug(null);
 };
 const handleItemClick = (videoSrc: string) => {
   setVideoUrl(videoSrc);
   setIsModalOpen(true);
 };
 const closeModal = () => {
   setIsModalOpen(false);
   
 };
 
  // State to track loading state
  const [loading, setLoading] = useState(false);
const [hasMorePosts, setHasMorePosts] = useState(true)
 const handleLoadMoreClick = () => {
   setClicked(true);
   setLoading(true);
   
   setTimeout(() => {

   setGridItems((prevItems) => [
     ...prevItems,
     <div key={`new-item-${prevItems.length}`} id="p-item-65" className="grid-item element-item p_one new-grid-item" data-top="1350px">
       <a className="item-link ajax-portfolio" data-id="65" onClick={handleImageClick}>
     
                                  <img 
                                    loading="lazy" 
                                    decoding="async" 
                                    width="800" 
                                    height="400" 
                                    src="portfolio5-1.jpg" 
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="" 
                                    srcSet="/portfolio5-1.jpg 800w, /portfolio5-1.jpg 300w, /portfolio5-1.jpg 768w" 
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
   ]); setLoading(false);
}, 1000); // Simulated delay
 };
 useEffect(() => {
   if (isotopeInstance.current) {
     isotopeInstance.current.reloadItems();
     isotopeInstance.current.arrange();
   }
 }, [gridItems]);

 useEffect(() => {
   if (!loading && clicked) {
     // Once loading is complete and items are added, set hasMorePosts to false
     setHasMorePosts(false);
    
   }
 }, [loading, clicked]);
 const [showOverlay, setShowOverlay] = useState(false);
 const content = [
   { type: 'image', img: '/item2.jpg' },
   { type: 'video', videoSrc: 'https://player.vimeo.com/video/199192931' },
   // Add more content if necessary
]

 const handleImageClick = () => {
     setShowOverlay(true);
 };

 const handleCloseOverlay = () => {
     setShowOverlay(false);
 };
 const [currentSlide, setCurrentSlide] = useState(1);
 const isVideoSlide = content[currentSlide]?.type === 'video';
 const settings = {
   dots: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   afterChange: (index) => setCurrentSlide(index + 1),
   
};
const handleNext = () => {
   sliderRef.current.slickNext();
};

const handlePrev = () => {
   sliderRef.current.slickPrev();
};

  return (
    <section style={{zIndex:'100000', height:"max-content"}} className="elementor-section elementor-top-section elementor-element elementor-element-51c27d18 op-section extra-width extra-width-portfolio elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="51c27d18" data-element_type="section" id="portfolio"   ref={portfolioSectionRef} >
       <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64adf03d" data-id="64adf03d" data-element_type="column">
             <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-4c690d57 elementor-widget elementor-widget-heading" data-id="4c690d57" data-element_type="widget" data-widget_type="heading.default">
                   <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">PORTFOLIO</h2>
                   </div>
                </div>
                <div className="elementor-element elementor-element-e5b9056 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="e5b9056" data-element_type="widget" data-widget_type="text-editor.default">
                   <div className="elementor-widget-container">
                      <p>Nam ultrices ultrices nec tortor pulvinar fermentum milovo selicon perotation wilmo.</p>
                   </div>
                </div>
                {selectedSlug ? (<PortfolioPreview slug={selectedSlug} onBack={handleBack} />)
               :(
                  
                <div className={`elementor-element elementor-element-1b02fb93 elementor-widget elementor-widget-coco-portfolio ${fadeOut ? 'fade-out' : ''}`} data-id="1b02fb93" data-element_type="widget" data-widget_type="coco-portfolio.default">
                   <div className="elementor-widget-container">
                      <div id="portfolio-wrapper" className="relative">
                         <div className="portfolio-load-content-holder content-670"></div>
                         <div className="grid" id="portfolio-grid">
                            <div className="grid-sizer"></div>
                            <div id="p-item-65"  onClick={() => handlePortfolioClick("item-1") } className="grid-item element-item p_one" data-top="0px" data-left="0%">
                               <a className="item-link ajax-portfolio" data-id="65">
                                  <img 
                                    loading="lazy" 
                                    decoding="async" 
                                    width="800" 
                                    height="400" 
                                    src="/portfolio1.jpg" 
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="" 
                                    srcSet="/portfolio1.jpg 800w, /portfolio1-300x150.jpg 300w, /portfolio1-768x384.jpg 768w" 
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
                            <div id="p-item-62" onClick={() => handlePortfolioClick("item-2") } className="grid-item element-item p_one_half" data-top="450px" data-left="0%">
                               <a className="item-link ajax-portfolio" data-id="62">
                                  <img 
                                    loading="lazy" 
                                    decoding="async" 
                                    width="400" 
                                    height="800" 
                                    src="/portfolio2-1.jpg" 
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="" 
                                    srcSet="/portfolio2-1.jpg 400w, /portfolio2-1-150x300.jpg 150w" 
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
                            <div id="p-item-59" onClick={() => handlePortfolioClick("item-3") } className="grid-item element-item p_one_half" data-top="450px" data-left="50%">
                               <a className="item-link ajax-portfolio" data-id="59">
                                  <img 
                                    loading="lazy" 
                                    decoding="async" 
                                    width="400" 
                                    height="400" 
                                    src="/portfolio3-1.jpg" 
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="" 
                                    srcSet="/portfolio3-1.jpg 400w, /portfolio3-1-300x300.jpg 300w, /portfolio3-1-150x150.jpg 150w" 
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
                            <div className="grid-item element-item p_one_half" data-top="900px" data-left="50%">
                               <a className="item-link" onClick={() => handleItemClick('https://player.vimeo.com/video/199192931')} data-rel="prettyPhoto[portfolio1]" rel="prettyPhoto[portfolio1]">
                                  <img 
                                    loading="lazy" 
                                    decoding="async" 
                                    width="400" 
                                    height="400" 
                                    src="/portfolio4-1.jpg" 
                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image" 
                                    alt="" 
                                    srcSet="/portfolio4-1.jpg 400w, /portfolio4-1-300x300.jpg 300w, /portfolio4-1-150x150.jpg 150w" 
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
                         <div  
                          className="block  center-relative center-text more-posts-portfolio-holder">
                        {loading && (
          <span className="more-posts-portfolio-loading">
            LOADING
          </span>
        )}
        {!loading && hasMorePosts && (
          <span onClick={handleLoadMoreClick} className="more-posts-portfolio">
            LOAD MORE
          </span>
        )}
        {!loading && !hasMorePosts && (
          <span className="no-more-posts-portfolio">
            NO MORE
          </span>
        )}
   </div>
                         <div className="clear"></div>
                      
                         
                      </div>
                   

                   </div>
                </div>) }
             </div>
          </div>
       </div>
         {/* Video Modal */}
         {isModalOpen && (
        <div className="video-modal-overlay" style={{position
        :"fixed", zIndex:"1000"}}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            
            <iframe
            style={{position:"relative", zIndex:"10000"}}
              src={videoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              title="Video Modal"
            ></iframe>
           <div className="overlay-footer" style={{justifyContent:"flex-end"}}>
                          
                        
                            
                            <button className="overlay-close" onClick={closeModal}><img src="close.png" alt="close video" ></img></button>
                        </div>
          </div>
          
        </div>
      )} 
     {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                    <Slider {...settings} ref={sliderRef}>
                            {content.map((item, index) => (
                                <div key={index}>
                                    {item.type === 'image' ? (
                                        <img src={item.img} alt={`Slide ${index + 1}`} />
                                    ) : (
                                        <iframe
                                            width="100%"
                                            height="410"
                                            src={item.videoSrc}
                                            title={`Video ${index + 1}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                </div>
                            ))}
                        </Slider>
                        <div className="overlay-footer" style={{
                    marginTop: isVideoSlide ? '-20px' : '20px',
                }}>
                           <div style={{display:'flex'}}>
                        <button className="custom-prev" onClick={handlePrev}><img src="/nav_left.png" alt="swipe to previous slide" ></img></button>
                        <button className="custom-next" onClick={handleNext}><img src="/nav_right.png" alt="swipe to next slide" ></img></button>
                            <span className='portfolio-slide-count'>{currentSlide}/{content.length}</span>
                            </div>
                            <button className="overlay-close" onClick={handleCloseOverlay}><img src="close.png" alt="close video" ></img></button>
                        </div>
                    </div>
                </div>
            )}
    </section>
  )
}

export default Portfolio
