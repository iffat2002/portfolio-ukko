import React from 'react'

const SimpleLayout = ({ title, subtitle, desc, imgs, texts }) => {
  return (
    <>
    <div className="elementor-widget-wrap elementor-element-populated content_data"  style={{marginTop: '0px'}}>
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

      {/* Subtitle */}
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

      {/* Description */}
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
      <div className="slide-content" style={{ height: "100%" }} key={index}>
        {/* Image */}
        <img src={img} alt="sample" />
        
        {/* Text */}
        <div className="content_data">
          <div
            className="elementor-element elementor-element-f14a1ee elementor-widget elementor-widget-text-editor"
            data-id="f14a1ee"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              {texts[index]}
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
  )
}

export default SimpleLayout