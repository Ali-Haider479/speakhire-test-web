"use client";  // Client Component

import React from "react";
import YouTube from "react-youtube";

interface YouTubePlayerProps {
  videoId: string;
}

const youtubeOptions = {
  width: "100%",
  height: "100%",
  playerVars: {
    autoplay: 0,
    controls: 1,
    modestbranding: 1,
    rel: 0,
  },
};

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => (
  <YouTube
    videoId={videoId}
    opts={youtubeOptions}
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "40px", // Matches the container's rounded corners
    }}
  />
);

export default YouTubePlayer;
