import React from "react";
import { Package, Droplet, Rocket } from "lucide-react";
import { jarallax, jarallaxVideo } from "jarallax";
import services from "./services.json";
import "jarallax/dist/jarallax.min.css";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6071e02c op-section elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="6071e02c"
      data-element_type="section"
      id="services"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="elementor-container elementor-column-gap-no"
      >
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20dd8613"
          data-id="20dd8613"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
              {services.elements.map((section, index) => {
               switch (section.type) {
                case "heading":
                  return (
                    <div
                      key={index}
                      className="elementor-element elementor-element-384378cf elementor-widget elementor-widget-heading"
                      data-id={section.id}
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          {section.content}
                        </h2>
                      </div>
                    </div>
                  );
                case "text":
                  return (
                    <div
                      key={index}
                      className={`elementor-element elementor-element-${section.id} ${section.widget} elementor-widget elementor-widget-text-editor`}
                      data-id={section.id}
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div
                        className="elementor-widget-container"
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      ></div>
                    </div>
                  );
                case "section":
                  return (
                    <section
                      key={index}
                      className="elementor-section top-30 elementor-inner-section elementor-element elementor-element-57f61afc extra-width parallax_0_30 global-background-color elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="57f61afc"
                      data-element_type="section"
                      data-jarallax-element="0 30"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div
                          className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-32e9d002"
                          data-id="32e9d002"
                          data-element_type="column"
                        >
                          <div className="elementor-widget-wrap elementor-element-populated">
                            {section.content.map((item, idx) => (
                              <div
                                key={idx}
                                className={`elementor-element elementor-element-${item.id} elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-coco-button`}
                                data-id={item.id}
                                data-element_type="widget"
                                data-widget_type="coco-button.default"
                              >
                                <div className="elementor-widget-container">
                                  <a
                                    className="service-link slow-scroll"
                                    href={item.link}
                                    target={item.target || "_self"}
                                    rel={
                                      item.target === "_blank"
                                        ? "noopener noreferrer"
                                        : ""
                                    }
                                  >
                                    {item.text}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div id="jarallax-container-2">
                        <div></div>
                      </div>
                    </section>
                  );
                case "services":
                  return (
                    <section
                      className={`elementor-section elementor-inner-section elementor-element elementor-element-${section.id} elementor-section-full_width elementor-section-height-default elementor-section-height-default`}
                      data-id={section.id}
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        {section?.content.map((item, idx) => (
                          <div
                            key={idx}
                            className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${item.id} service-holder`}
                            data-id={item.id}
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className={`elementor-element elementor-element-${item.subid} elementor-widget elementor-widget-image`}
                                data-id={item.subid}
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    decoding="async"
                                    width="200"
                                    height="140"
                                    src={item.image}
                                    className="attachment-full size-full wp-image-189"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div
                                className={`elementor-element elementor-element-${item.titleid} service-title elementor-widget elementor-widget-heading`}
                                data-id={item.titleid}
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h4 className="elementor-heading-title elementor-size-default">
                                    {item.title}
                                  </h4>
                                </div>
                              </div>
                              <div
                                className={`elementor-element elementor-element-${item.descid} elementor-widget elementor-widget-text-editor`}
                                data-id={item.descid}
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  );
                default:
                  return null;
              }              
              })}

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
