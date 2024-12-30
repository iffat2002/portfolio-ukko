import React from "react";
type VideoOverlayProps = {
   url: string;
   closeModal: () => void;
}
const VideoOverlay: React.FC<VideoOverlayProps> = ({ url, closeModal }) => {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement && event.target.classList.contains("overlay")) {
      closeModal();
    }
  };console.log("url", url)

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div
        className="overlay-content vid-slider"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={url}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Video Modal"
        ></iframe>
        <div className="overlay-footer end">
          <button className="overlay-close" onClick={closeModal}>
            <img src="/images/close.png" alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
