import React from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

import { jarallax, jarallaxVideo } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

// Home Section 
const Home = () => {
  return (
      <section className="elementor-section elementor-top-section elementor-element elementor-element-5b0713de elementor-section-full_width op-section elementor-section-height-full elementor-section-height-default elementor-section-items-middle" data-id="5b0713de" data-element_type="section" id="home">
         <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40dcf5a6" data-id="40dcf5a6" data-element_type="column">
               <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-3dc739 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3dc739" data-element_type="section">
                     <div className="elementor-container elementor-column-gap-no">
                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-294fb7e0" data-id="294fb7e0" data-element_type="column">
                           <div className="elementor-widget-wrap elementor-element-populated">
                              <div className="elementor-element elementor-element-61546de elementor-widget elementor-widget-coco-home-section" data-id="61546de" data-element_type="widget" data-widget_type="coco-home-section.default">
                                 <div className="elementor-widget-container">
                                    <div className="home-section extra-width">
                                       <h1 style={{position:"absolute"}} className="entry-title global-color" data-jarallax-element="0 30">
                                          Hello <br/>I'm <span>Jacob<br/> Hawkins</span>
                                          <div id="jarallax-container-0">
                                             <div></div>
                                          </div>
                                       </h1>
                                       <img 
                                          fetchPriority="high" 
                                          decoding="async" 
                                          width="536" 
                                          height="830" 
                                          src="/photo-1.jpg" 
                                          className="main-photo" 
                                          alt="" 
                                          data-jarallax-element="0 -30" 
                                          srcSet="/photo-1.jpg 536w, /photo-1-194x300.jpg 194w" 
                                          sizes="(max-width: 536px) 100vw, 536px"
                                       /> 
                                       <a href="#services" rel="nofollow" className="main-btn slow-scroll">
                                          <img 
                                             decoding="async" 
                                             width="100" 
                                             height="100" 
                                             src="/ScrollIcon.png" 
                                             className="attachment-thumbnail size-thumbnail" 
                                             alt="" 
                                          />
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </section>
  )
}

export default Home
