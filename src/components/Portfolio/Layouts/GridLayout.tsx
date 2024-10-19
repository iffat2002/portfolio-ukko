import React from 'react';


const GridLayout = ({ title, subtitle, desc, imgs, link }) => {
  return (
    <div className="nature-preview">
      <div
        className="elementor-widget-wrap elementor-element-populated content_data mt-0"
      >
        <div
          className="elementor-element elementor-element-81ce8d7 elementor-widget elementor-widget-heading"
          data-id="81ce8d7"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              {title}
            </h2>
          </div>
        </div>

        <div
          className="elementor-element elementor-element-e7b4a8f elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
          data-id="e7b4a8f"
          data-element_type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            {subtitle}
          </div>
        </div>

        {desc?.map((desc, index) => (
          <div
            key={index}
            className="elementor-element elementor-element-f14a1ee elementor-widget elementor-widget-text-editor"
            data-id="f14a1ee"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div
              className="elementor-widget-container"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          </div>
        ))}

        <a href={link}>
          <div
            className="block center-relative more-posts-portfolio-holder mt-0"
          >
            <span className="more-posts-portfolio">READ MORE</span>
          </div>
        </a>
      </div>

      <img
        src={imgs[0]}
        decoding="async"
        width="400"
        height="830"
        className="main-photo"
        alt={title}
        data-jarallax-element="0 -30"
        srcSet={`${imgs[0]} 536w, ${imgs[0].replace(".jpg", "-194x300.jpg")} 194w`}
        sizes="(max-width: 536px) 100vw, 536px"
      />
    </div>
  );
};

export default GridLayout;
