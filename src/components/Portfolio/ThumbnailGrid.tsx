
import thumbnailLayouts from "../../util/thumbnail-layouts";
import data from "./portfolio.json";

type ThumbnailGridProps = {
  sliceIndex: number;
  gridItems: JSX.Element[];
  handlePortfolioClick: (id: number, showOverlay: boolean) => void;
  handleLoadMoreClick: () => void;
  loading: boolean;
  hasMorePosts: boolean;
};

const ThumbnailGrid: React.FC<ThumbnailGridProps> = ({
  sliceIndex,
  gridItems,
  handlePortfolioClick,
  handleLoadMoreClick,
  loading,
  hasMorePosts,
}) => {
  return (
    <div
      className="elementor-element elementor-element-1b02fb93 elementor-widget elementor-widget-coco-portfolio"
      data-id="1b02fb93"
      data-element_type="widget"
      data-widget_type="coco-portfolio.default"
    >
      <div className="elementor-widget-container">
        <div id="portfolio-wrapper" className="relative">
          <div className="portfolio-load-content-holder content-670"></div>
          <div className="grid" id="portfolio-grid">
            <div className="grid-sizer"></div>
            {/* Mapping through JSON data for grid thumbnails */}
            {data.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                id={`p-item-${item.id}`}
                onClick={() => handlePortfolioClick(item.id, item.showOverlay)}
                className={`grid-item element-item ${
                  thumbnailLayouts[item.thumbnailLayout].size
                } `}
                data-top={thumbnailLayouts[item.thumbnailLayout].datatop}
                data-left={thumbnailLayouts[item.thumbnailLayout].dataleft}
              >
                <a className="item-link ajax-portfolio" data-id={item.id}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width={thumbnailLayouts[item.thumbnailLayout].width}
                    height={thumbnailLayouts[item.thumbnailLayout].height}
                    src={item["img-src"]}
                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                    alt=""
                    srcSet={item.srcset}
                    sizes={item.imagesizes}
                  />
                  <div className="portfolio-text-holder">
                    <div className="portfolio-text-wrapper">
                      <p className="portfolio-text">{item["portfolio-text"]}</p>
                      <p className="portfolio-cat">{item["portfolio-cat"]}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            {gridItems.map((item) => item)}
          </div>
          <div className="clear"></div>
        </div>
        <div className="block center-relative center-text more-posts-portfolio-holder">
          {loading && (
            <span className="more-posts-portfolio-loading">LOADING</span>
          )}
          {!loading && hasMorePosts && (
            <span
              onClick={handleLoadMoreClick}
              className="more-posts-portfolio"
            >
              LOAD MORE
            </span>
          )}
          {!loading && !hasMorePosts && (
            <span className="no-more-posts-portfolio">NO MORE</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThumbnailGrid;
