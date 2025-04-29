"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { join } from "path";

interface SpeakerImpactProps {
  data: {
    title: string;
    description: string;
    speaker_impact: any[];
  };
}

export default function SpeakerImpact({ data }: SpeakerImpactProps) {
  // Speaker data
  const speakers = [
    { id: 1, imageUrl: "/stock1.jpg", alt: "Speaker 1" },
    { id: 2, imageUrl: "/stock2.jpg", alt: "Speaker 2" },
    { id: 3, imageUrl: "/stock1.jpg", alt: "Speaker 3" },
    { id: 4, imageUrl: "/stock2.jpg", alt: "Speaker 4" },
    { id: 5, imageUrl: "/stock1.jpg", alt: "Speaker 5" },
    { id: 6, imageUrl: "/stock2.jpg", alt: "Speaker 6" },
    { id: 7, imageUrl: "/stock1.jpg", alt: "Speaker 7" },
  ];

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWords = words[0];
      const highlightedWord = words[1];
      const restOfWords = words.slice(2).join(" ");

      return (
        <>
          {firstWords}
          <span style={{ color: "#005776" }}> {highlightedWord} </span>{" "}
          {restOfWords}
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box sx={{ textAlign: "center", py: 8, width: "100%", mx: "auto" }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          marginBottom: 1,
        }}
      >
        {HighlightText(data.title)}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 4,
          fontSize: 20,
        }}
      >
        {data.description}
      </Typography>

      {/* Speaker images container with zig-zag pattern */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          width: "100%",
          height: "auto", // Responsive height
          minHeight: { xs: 180, sm: 220 },
          overflowX: "hidden",
          margin: { xs: "20px 0", sm: "40px 0" }, // Reduced margin for mobile
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "80vw",
            gap: { xs: 1.5, sm: 1.5 },
          }}
        >
          {data.speaker_impact.map((speaker, index) => (
            <Box
              key={speaker.id}
              sx={{
                flexBasis: { xs: "25%", sm: "auto" },
                width: { xs: 80, sm: 100 }, // Smaller size on mobile
                height: { xs: 140, sm: 180 }, // Smaller size on mobile
                borderRadius: 100, // Circular shape
                overflow: "hidden",
                position: "relative",
                marginTop: index % 2 === 0 ? 0 : { xs: 3, sm: 5 },
                marginRight: { xs: 1, sm: 1.5 },
                marginLeft: { xs: 1, sm: 1.5 },
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Image
                src={
                  speaker?.picture?.source?.url
                    ? speaker?.picture?.source?.url
                    : null
                }
                alt={speaker.picture.alternate_text}
                fill
                style={{ objectFit: "cover" }}
                sizes="100px"
                priority={speaker.id <= 6}
                onClick={() => {
                  if (!speaker?.link?.url) return;
                  window.open(
                    speaker.link?.url,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Button
        variant="outlined"
        startIcon={<YouTubeIcon />}
        sx={{
          borderRadius: "20px",
          padding: "10px 24px",
          textTransform: "none",
          fontWeight: 500,
          border: "2px solid #005776",
          color: "#005776",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(0, 87, 118, 0.04)",
            borderColor: "#005776",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 18, fontWeight: "normal", textTransform: "none" }}
        >
          Watch on YouTube
        </Typography>
      </Button>
    </Box>
  );
}
