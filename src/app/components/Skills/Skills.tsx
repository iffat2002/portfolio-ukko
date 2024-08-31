'use client'

import React, { useEffect, useRef } from 'react'

const Skills = () => {
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = skillsSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        document.querySelectorAll('[data-fill]').forEach(elem => {
          elem.style.width = elem.getAttribute('data-fill');
          elem.style.transition = 'width 2s ease-in-out';
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case the section is already in view
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
     
      className="elementor-section elementor-top-section elementor-element elementor-element-79b8e72a op-section elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="79b8e72a"
      data-element_type="section"
      id="skills"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7b7cebf6" data-id="7b7cebf6" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-81ce8d7 elementor-widget elementor-widget-heading" data-id="81ce8d7" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">SKILLS</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-e7b4a8f elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="e7b4a8f" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container"> Lorem ipsum dolor sit amet consectetu adipiscing elit viverra tristique placerat</div>
            </div>
            <div className="elementor-element elementor-element-f14a1ee elementor-widget elementor-widget-text-editor" data-id="f14a1ee" data-element_type="widget" data-widget_type="text-editor.default">
              <div className="elementor-widget-container"> Viverra tristique placerat in sat massa consectetur quisque. Nunc aces fames lectus in libero aliquet ertare feraso est lorem nunc dolor sit amet settera aces volutpat in voltare lupar est phasellus. Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.</div>
            </div>
            <div className="elementor-element elementor-element-47441a70 extra-width elementor-widget elementor-widget-coco-timeline" data-id="47441a70" data-element_type="widget" data-widget_type="coco-timeline.default">
              <div className="elementor-widget-container">
                <ul className="timeline-holder global-background-color">
                  <li>
                    <span className="date">2016</span>
                    <p><b>2015 - 2016</b> placerat in massa consectetur quisque. Nunc ac fames lectus in libero aliquet est setera nunc.</p>
                  </li>
                  <li>
                    <span className="date">2017</span>
                    <p><b>2016 - 2017</b> Turpis metus sit diam purus leo in variusquam. Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod mauris in vitae viverra blandit lectus diam feugiat.</p>
                  </li>
                  <li>
                    <span className="date">2019</span>
                    <p><b>2017 - 2019</b> Nunc amet tristique volutpat adipiscing vulputate phasellus. Eget enim aliquam euismod.</p>
                  </li>
                  <li>
                    <span className="date">2023</span>
                    <p><b>2019 - 2023</b> Eget enim aliquam euismod mauris in vitae viverra blandit lectus faucibus diam consequat maecenas turpis metus sit diam purus leo in varius.</p>
                  </li>
                </ul>
              </div>
            </div>
            <section  ref={skillsSectionRef} className="elementor-section elementor-inner-section elementor-element elementor-element-457d247 elementor-section-full_width full-width elementor-section-height-default elementor-section-height-default" data-id="457d247" data-element_type="section">
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d35a9fb" data-id="4d35a9fb" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-3e1321e2 elementor-widget elementor-widget-coco-skills-lines" data-id="3e1321e2" data-element_type="widget" data-widget_type="coco-skills-lines.default">
                      <div className="elementor-widget-container">
                        <div className="skills-holder">
                          <div className="skill-holder">
                            <div className="skill-text">PHOTOSHOP</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="78%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">MARKETING</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="38%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">AFFINITY</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="55%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">EDUCATION</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="87%"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-58db6117" data-id="58db6117" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-31c58e0 elementor-widget elementor-widget-coco-skills-lines" data-id="31c58e0" data-element_type="widget" data-widget_type="coco-skills-lines.default">
                      <div className="elementor-widget-container">
                        <div className="skills-holder">
                          <div className="skill-holder">
                            <div className="skill-text">ILLUSTRATOR</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="42%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">CREATIVITY</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="92%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">LANGUAGES</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="70%"></div>
                            </div>
                          </div>
                          <div className="skill-holder">
                            <div className="skill-text">DEVELOPING</div>
                            <div className="skill">
                              <div className="skill-fill global-background-color" data-fill="52%"></div>
                            </div>
                          </div>
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

export default Skills
