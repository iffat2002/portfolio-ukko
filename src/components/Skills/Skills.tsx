"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import skills from "./skills.json";

const Skills = () => {
  const skillsSectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const section = skillsSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        document.querySelectorAll("[data-fill]").forEach((elem) => {
          elem.style.width = elem.getAttribute("data-fill");
          elem.style.transition = "width 2s ease-in-out";
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-79b8e72a op-section elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="79b8e72a"
      data-element_type="section"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="elementor-container elementor-column-gap-no"
      >
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b7cebf6"
          data-id="7b7cebf6"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            {skills.section.content.map((item, index) => {
              switch (item.type) {
                case "heading":
                  return (
                    <div
                      key={index}
                      className="elementor-element elementor-element-81ce8d7 elementor-widget elementor-widget-heading"
                      data-id="81ce8d7"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h2 className="elementor-heading-title elementor-size-default">
                          {item.text}
                        </h2>
                      </div>
                    </div>
                  );
                case "subheading":
                  return (
                    <div
                      key={index}
                      className="elementor-element elementor-element-e7b4a8f elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                      data-id="e7b4a8f"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        {item.text}
                      </div>
                    </div>
                  );
                case "text":
                  return (
                    <div
                      key={index}
                      className="elementor-element elementor-element-f14a1ee elementor-widget elementor-widget-text-editor"
                      data-id="f14a1ee"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        {item.text}
                      </div>
                    </div>
                  );
                case "timeline":
                  return (
                    <div
                      key={index}
                      className="elementor-element elementor-element-47441a70 extra-width elementor-widget elementor-widget-coco-timeline"
                      data-id="47441a70"
                      data-element_type="widget"
                      data-widget_type="coco-timeline.default"
                    >
                      <div className="elementor-widget-container">
                        <ul className="timeline-holder global-background-color">
                          {item.items.map((timelineItem, idx) => (
                            <li key={idx}>
                              <span className="date">{timelineItem.date}</span>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: timelineItem.text,
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                case "skills":
                  return (
                    <section
                      key={index}
                      ref={skillsSectionRef}
                      className="elementor-section elementor-inner-section elementor-element elementor-element-457d247 elementor-section-full_width full-width elementor-section-height-default elementor-section-height-default"
                      data-id="457d247"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        {item.columns.map((column, colIdx) => (
                          <div
                            className={`elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-${column.id}`}
                            data-id={column.id}
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-3e1321e2 elementor-widget elementor-widget-coco-skills-lines"
                                data-id="3e1321e2"
                                data-element_type="widget"
                                data-widget_type="coco-skills-lines.default"
                              >
                                <div className="elementor-widget-container">
                                  <div key={colIdx} className="skills-holder">
                                    {column.skills.map((skill, skillIdx) => (
                                      <div
                                        key={skillIdx}
                                        className="skill-holder"
                                      >
                                        <div className="skill-text">
                                          {skill.name}
                                        </div>
                                        <div className="skill">
                                          <div className="skill">
                                            <div
                                              className="skill-fill global-background-color"
                                              data-fill={skill.fill}
                                            ></div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
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

export default Skills;
