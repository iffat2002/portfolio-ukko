import React from "react";
import ReactDOM from "react-dom";

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}><img src="cross.svg" alt=""></img></button>
        <iframe
         
          src={videoUrl}
          title="Video"
         
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
         
        ></iframe>
      </div>
    </div>,
    document.body
  );
};

export default VideoModal;
