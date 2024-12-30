import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
type SwiperLayoutProps = {
  title: string;
  subtitle: string;
  desc: string;
  imgs: string[]; 
   
};
const SwiperLayout: React.FC<SwiperLayoutProps>  = ({ imgs, title, subtitle, desc }) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }  as React.CSSProperties}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        loopAdditionalSlides={0}
        shortSwipes={false} // Prevent swiping back through all slides
        longSwipes={false}
        speed={1000}
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-dot"></span>`;
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="swiper-portfolio"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={img} alt="" className="slide_img_portfolio" />
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-pagination"></div>
      </Swiper>
      <div className="elementor-widget-wrap elementor-element-populated content_data">
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
          ></div>
        </div>
      </div>
    </>
  );
};

export default SwiperLayout;
