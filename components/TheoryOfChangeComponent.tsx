"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import YouTube from "react-youtube";

interface TheoryOfChangeComponentProps {
  data: {
    title: string;
    descriptionTitle: string;
    description: string;
    link: any;
  };
}

function extractYouTubeID(url: string) {
  const match = url?.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return match ? match[1] : null;
}

export default function TheoryOfChangeComponent({
  data,
}: TheoryOfChangeComponentProps) {
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

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const part1 = words.slice(0, 1).join(" ");
      const part2 = words[2];
      const part3 = words[3];
      const part4 = words[4];
      const part5 = words.slice(5).join(" ");

      return (
        <>
          {part1}
          <span style={{ color: "#0F99C3" }}> {part2} </span> {part3}
          <span style={{ color: "#0F99C3" }}> {part4} </span> {part5}
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F2FAFD",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens, side-by-side on medium+
        justifyContent: "center",
        alignItems: "center",
        marginTop: { xs: 3, md: 5 },
        height: "auto", // Height auto for mobile
        px: { xs: "10px", md: "20px" },
        py: { xs: 2, md: 5 },
      }}
    >
      {/* Left section with text content */}
      <Box
        sx={{
          width: { xs: "90%", md: "45vw" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "20px", md: "0 150px 0 20px" },
        }}
      >
        <Typography
          variant="h2" // Reduced font size for better mobile readability
          sx={{
            fontWeight: "bold",
            marginBottom: { xs: 5, md: 10 },
            color: "#333333",
            mt: 5,
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {data.title}
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "medium",
              marginBottom: 1,
              fontSize: { xs: "1.5rem", md: "2.25rem" },
            }}
          >
            {HighlightText(data.descriptionTitle)}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            color: "#555555",
            lineHeight: 1.7,
            fontSize: { xs: "1rem", md: "1.25rem" }, // Smaller font size for readability on mobile
          }}
        >
          {data.description}
        </Typography>
      </Box>

      {/* Right section with YouTube video */}
      <Box
        sx={{
          width: { xs: "80%", md: "35vw" },
          height: { xs: "250px", md: "400px" },
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          mt: { xs: 3, md: 5 }, // Margin added only for mobile view
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "#F2FAFD",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <YouTube
            videoId={
              data?.link?.url
                ? extractYouTubeID(data?.link?.url)?.toString()
                : ""
            }
            opts={youtubeOptions}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
