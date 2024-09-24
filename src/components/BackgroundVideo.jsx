// src/components/BackgroundVideo.jsx

import React from 'react';
import '../styles/BackgroundVideo.css'; // Ensure this CSS file exists

function BackgroundVideo() {
  return (
    <div className="video-background">
      <video
        className="background-video"
        src="/assets/videos/background.mp4" // Path to your video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true" // Hides the video from assistive technologies
        poster="/assets/images/fallback.jpg" // Optional: Fallback image
      >
        Your browser does not support the video tag.
      </video>
      {/* Optional Overlay for Better Readability */}
      <div className="video-overlay"></div>
    </div>
  );
}

export default BackgroundVideo;
