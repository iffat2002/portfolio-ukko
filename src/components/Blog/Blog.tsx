import React from "react";
import data from "./blog.json";
import {motion} from 'framer-motion'
const Blog = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-70c2f970 op-section full-width elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="70c2f970"
      data-element_type="section"
      id="blog"
    >
      <motion.div   initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2acffe1b"
          data-id="2acffe1b"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-442532ad elementor-widget elementor-widget-heading"
              data-id="442532ad"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default blog_weight">
                  BLOG
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7c29fe38 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="7c29fe38"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                {" "}
                Viverra tristique placerat massa est consectetur quisque nu
                fames lorem
              </div>
            </div>
            <div
              className="elementor-element elementor-element-14c2b970 elementor-widget elementor-widget-coco-blog"
              data-id="14c2b970"
              data-element_type="widget"
              data-widget_type="coco-blog.default"
            >
              <div className="elementor-widget-container">
                <ul className="home-blog-list">
                  {data.slice(0, 3).map((item, index) => (
                    <li key={index}>
                      <h4 className="entry-title">
                        <a className="blog_weight" href={`/blog/${item.slug}`}>
                          {item.title}
                        </a>
                      </h4>
                      <div className="blog-list-info">
                        <div className="entry-date published">{item.date}</div>
                        <div className="cat-links-wrapper">
                          <ul className="cat-links global-color">
                            <li>
                              <a className="global-color" href="">
                                {item.category}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-867a4a4 elementor-widget elementor-widget-coco-button"
              data-id="867a4a4"
              data-element_type="widget"
              data-widget_type="coco-button.default"
            >
              <div className="elementor-widget-container">
                {" "}
                <a href="/blog" className="service-link slow-scroll">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
