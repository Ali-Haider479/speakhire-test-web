"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import YouTube from "react-youtube";

interface ImpactsLivesSectionProps {
  data: {
    impactLivesTitleSubtext1: string;
    impactLivesTitleSubtext2: string;
    impactLivesTitleSubtext3: string;
    impactLivesDescription: string;
    impactLivesVideoLink1: string;
    impactLivesVideoLink2: string;
    impactLivesVideoLink3: string;
  };
}

function extractYouTubeID(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return match ? match[1] : null;
}

const ImpactsLivesSection = ({ data }: ImpactsLivesSectionProps) => {
  // Sample array of YouTube video IDs (replace with your actual video IDs)
  //   const videoIds = ["rH6EZrsBJG4", "4zokzUxKPLs", "mT1yas4HOlU"];
  const videoLinks = [
    data.impactLivesVideoLink1,
    data.impactLivesVideoLink2,
    data.impactLivesVideoLink3,
  ];
  console.log(videoLinks);

  // Options for YouTube player (customize as needed)
  const youtubeOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0, // Disable autoplay
      controls: 1, // Show controls
      modestbranding: 1, // Hide YouTube logo
      rel: 0, // Don't show related videos
    },
  };
  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: "#FFFFFF", // White background
        textAlign: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 400,
          marginBottom: "16px",
          color: "#1D1B20", // Dark color for main text
          lineHeight: "1.2",
        }}
      >
        {data.impactLivesTitleSubtext1}{" "}
        <span style={{ color: "#08547A" }}>
          {data.impactLivesTitleSubtext2}{" "}
        </span>{" "}
        {data.impactLivesTitleSubtext3}
      </Typography>
      <Box
        sx={{
          textAlign: "center", // Centered the text alignment
          width: "100vw",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            marginBottom: "32px",
            fontWeight: 500,
            lineHeight: "1.5",
            width: "40vw",
            margin: "0 auto", // Centers the text horizontally within its container
          }}
        >
          {data.impactLivesDescription}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "24px", // Spacing between stats
          flexWrap: "wrap", // Responsive wrapping
          width: "80vw",
          margin: "0 auto",
          marginTop: 5,
        }}
      >
        {videoLinks.map((link, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              height: "35vh",
              aspectRatio: "16/9", // Maintain 16:9 aspect ratio for videos
              backgroundColor: "#F2FAFD", // Light blue background for video containers
              borderRadius: "40px", // Rounded corners
              overflow: "hidden", // Ensures video stays within rounded corners
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Optional shadow
              position: "relative", // For positioning YouTube player
            }}
          >
            <YouTube
              videoId={extractYouTubeID(link)?.toString()}
              opts={youtubeOptions}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "40px", // Matches the box's rounded corners
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImpactsLivesSection;
