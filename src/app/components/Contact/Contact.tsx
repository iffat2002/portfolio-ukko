import React,{useState} from 'react'

import { jarallax, jarallaxVideo } from "jarallax";
import 'jarallax/dist/jarallax.min.css';

const Contact = () => {
   const [name, setName] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [subject, setSubject] = useState<string>('');


   const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value); 
    };
    
   const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value); 
    };
    
   const handleInputSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSubject(e.target.value); 
    };
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3889ef3f op-section elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3889ef3f" data-element_type="section" id="contact">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-102358d5" data-id="102358d5" data-element_type="column">
           <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-64c9b273 elementor-widget elementor-widget-heading" data-id="64c9b273" data-element_type="widget" data-widget_type="heading.default">
                 <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">CONTACT</h2>
                 </div>
              </div>
              <div className="elementor-element elementor-element-741b4645 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="741b4645" data-element_type="widget" data-widget_type="text-editor.default">
                 <div className="elementor-widget-container">
                    <p>Viverra tristique placerat massa estimos consectetur quisque nu fames lorem ipsum</p>
                 </div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-1371fab6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1371fab6" data-element_type="section">
                 <div className="elementor-container elementor-column-gap-no">
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2042a67d" data-id="2042a67d" data-element_type="column">
                       <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-5b7362e3 elementor-widget elementor-widget-text-editor" data-id="5b7362e3" data-element_type="widget" data-widget_type="text-editor.default">
                             <div className="elementor-widget-container">
                                <p><strong>FULL NAME:</strong> Jacob B. Hawkins<br/><strong>BIRTHDAY:</strong> 25. 03. 1987.<br/><strong>ADDRESS:</strong> Some Street 987, USA</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3a7d3c87" data-id="3a7d3c87" data-element_type="column">
                       <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-24fd1963 elementor-widget elementor-widget-text-editor" data-id="24fd1963" data-element_type="widget" data-widget_type="text-editor.default">
                             <div className="elementor-widget-container">
                                <p><strong>PHONE:</strong> (+98) 765 4321<br/><strong>EMAIL:</strong> company@youremail.com<br/><strong>WEBSITE:</strong> www.yourwebsite.com</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>
              <div className="elementor-element elementor-element-554e9c50 extra-width parallax_0_-20 elementor-widget elementor-widget-image" data-id="554e9c50" data-element_type="widget" data-widget_type="image.default" data-jarallax-element="0 -20">
                 <div className="elementor-widget-container"> 
                  <a href="https://www.google.com/maps/place/Central+Park/@40.7828647,-73.9653551,15z/data=!4m5!3m4!1s0x0:0xb9df1f7387a94119!8m2!3d40.7828647!4d-73.9653551" target="_blank" rel="nofollow"> 
                    <img 
                      loading="lazy" 
                      decoding="async" 
                      width="900" 
                      height="450" 
                      src="/map.png" 
                      className="attachment-large size-large wp-image-186" 
                      alt="" 
                      srcSet="/map.png 900w, /map-300x150.png 300w, /map-768x384.png 768w" 
                      sizes="(max-width: 900px) 100vw, 900px" 
                    /> 
                  </a>
                </div>
                <div id="jarallax-container-5">
                  <div></div>
                </div>
              </div>
              <div className="elementor-element elementor-element-21766d8d elementor-widget elementor-widget-shortcode" data-id="21766d8d" data-element_type="widget" data-widget_type="shortcode.default">
                 <div className="elementor-widget-container">
                    <div className="elementor-shortcode">
                       <div className="wpcf7 js" id="wpcf7-f8-p181-o1" lang="en-US" dir="ltr">
                          <div className="screen-reader-response">
                             <p role="status" aria-live="polite" aria-atomic="true"></p>
                             <ul></ul>
                          </div>
                          <form action="/ukko-wp/#wpcf7-f8-p181-o1" method="post" className="wpcf7-form init demo" aria-label="Contact form" noValidate="novalidate" data-status="init">
                              <div> 
                                <input type="hidden" name="_wpcf7" value="8" readOnly /> 
                                <input type="hidden" name="_wpcf7_version" value="5.9.4" readOnly /> 
                                <input type="hidden" name="_wpcf7_locale" value="en_US" readOnly /> 
                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f8-p181-o1" readOnly /> 
                                <input type="hidden" name="_wpcf7_container_post" value="181" readOnly /> 
                                <input type="hidden" name="_wpcf7_posted_data_hash" value="" readOnly />
                              </div>
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="your-name">
                                  <input size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="NAME" value={name} onChange={handleInputName}  type="text" name="your-name" />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="your-email">
                                  <input size="40" className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="EMAIL" value={email} onChange={handleInputEmail} type="email" name="your-email"  />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="your-subject">
                                  <input size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="SUBJECT" value={subject} onChange={handleInputSubject} type="text" name="your-subject"  />
                                </span>
                              </p>
                              <p>
                                <span className="wpcf7-form-control-wrap" data-name="your-message">
                                  <textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="MESSAGE" name="your-message"></textarea>
                                </span>
                              </p>
                              <p className="contact-submit-holder">
                                <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="SEND" readOnly />
                                <span className="wpcf7-spinner"></span>
                              </p>
                              <div className="wpcf7-response-output" aria-hidden="true"></div>
                          </form>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
