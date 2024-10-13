import React from 'react'

const VideoOverlay = ({url, closeModal}) => {
  const handleOverlayClick = (event) => {
  
    if (event.target.classList.contains('overlay')) {
      closeModal();
    }
  };
  return (
    <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={url}
              frameBorder="0"
              allow="autoplay; fullscreen"
              title="Video Modal"
              style={{
                maxWidth: "calc(177.778vh)",

              }}
            ></iframe>
            <div className="overlay-footer" style={{justifyContent:'end'}}>
              <button className="overlay-close" onClick={closeModal} >
                <img src="/images/close.png" alt="Close" />
              </button>
            </div>
          </div>
        </div>
  )
}

export default VideoOverlay