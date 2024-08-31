'use client'

import React, { useState, useRef } from 'react'
import PortfolioPreview from './PortfolioPreview';

const loadIsotope = () => require('isotope-layout');
let Isotope;

const Portfolio = () => {
   const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
   const portfolioSectionRef = useRef<HTMLElement>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
const [videoUrl, setVideoUrl] = useState('');

  React.useEffect(() => {

    // load Isotope
    Isotope = loadIsotope();

   // use Isotope
   var grid = document.querySelector('.grid');
   var iso = new Isotope( grid, {
     percentPosition: true,
     itemSelector: '.grid-item',
     masonry: {
       columnWidth: '.grid-sizer'
     }
   });     

  }, [selectedSlug])

  const handlePortfolioClick = (slug: string) => {
   if (portfolioSectionRef.current) {
      const offsetTop = portfolioSectionRef.current.offsetTop;
      window.scrollTo({ top: offsetTop + 120, behavior: 'smooth' }); // Scrolls 100 pixels below the section
    }
   setSelectedSlug(slug);
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
                <div className="elementor-element elementor-element-1b02fb93 elementor-widget elementor-widget-coco-portfolio" data-id="1b02fb93" data-element_type="widget" data-widget_type="coco-portfolio.default">
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
                            

                         </div>
                         <div className="clear"></div>
                      </div>
                      <div className="block center-relative center-text more-posts-portfolio-holder"><span className="more-posts-portfolio">LOAD MORE</span><span className="more-posts-portfolio-loading">LOADING</span><span className="no-more-posts-portfolio">NO MORE</span></div>
                   </div>
                </div>) }
             </div>
          </div>
       </div>
         {/* Video Modal */}
         {isModalOpen && (
        <div className="video-modal-overlay" style={{position
        :"fixed", zIndex:"1000"}}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <iframe
              src={videoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen"
              title="Video Modal"
            ></iframe>
            <button className="video-modal-close" onClick={closeModal}>x</button>
          </div>
        </div>
      )} 
    </section>
  )
}

export default Portfolio
