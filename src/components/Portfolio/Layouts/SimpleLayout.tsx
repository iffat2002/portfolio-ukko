import React from "react";
type SimpleLayoutProps = {
  title: string;
  subtitle: string;
  desc: string;
  imgs: string[]; 
  texts: string[];   
};
const SimpleLayout: React.FC<SimpleLayoutProps> = ({ title, subtitle, desc, imgs, texts }) => {
  return (
    <>
      <div className="elementor-widget-wrap elementor-element-populated content_data mt-0">
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
          <div className="elementor-widget-container">{subtitle}</div>
        </div>
        <div
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
      </div>
      {imgs.map((img, index) => (
        <div className="slide-content h-full" key={index}>
          <img src={img} alt="sample" />
          <div className="content_data">
            <div
              className="elementor-element elementor-element-f14a1ee elementor-widget elementor-widget-text-editor"
              data-id="f14a1ee"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">{texts[index]}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SimpleLayout;
