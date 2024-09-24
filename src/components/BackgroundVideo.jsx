// src/components/BackgroundVideo.jsx

import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/BackgroundVideo.css'; // We'll create this CSS file next

function BackgroundVideo() {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://youtu.be/tL7cuJkUkCI?si=R4b-MwqrVyRZIDH5" // Replace with your YouTube video URL
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="react-player"
        config={{
          youtube: {
            playerVars: { showinfo: 0, controls: 0, modestbranding: 1, autoplay: 1, loop: 1, playlist: 'YOUR_VIDEO_ID' }, // Replace YOUR_VIDEO_ID
          },
        }}
      />
      {/* Overlay to darken the video for better readability of content */}
      <div className="video-overlay"></div>
    </div>
  );
}

export default BackgroundVideo;
