import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface DonateBetterWorldSectionProps {
  data: {
    title: string;
    description: string;
    button: any;
    cover_image: any;
  };
}

const DonateBetterWorldSection = ({ data }: DonateBetterWorldSectionProps) => {
  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 6).join(" ");
    const highlightedWord = words.slice(7, 9).join(" ");
    const restOfWords = words.slice(9).join(" ");

    return (
      <>
        {firstWords} <span style={{ color: "#0F99C3" }}>{highlightedWord}</span>{" "}
        {restOfWords}
      </>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // padding: "40px 20px",
        backgroundColor: "#F2FAFD", // Light blue background from the image
        textAlign: "center",
        alignItems: "center",
        width: "100vw",
        height: "auto",
        background: "linear-gradient(180deg, #F2FAFD 70%, #ffffff 30%)",
        // padding: theme.spacing(6, 0),
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 400,
          marginBottom: "16px",
          lineHeight: "1.2",
          paddingTop: "10vh",
          width: "45vw",
        }}
      >
        {HighlightText(data.title)}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          color: "#49454F", // Gray color for the description
          marginBottom: "32px",
          //   maxWidth: '600px',
          width: "35vw",
          margin: "0 auto",
          lineHeight: "1.5",
          fontWeight: 500,
        }}
      >
        {data.description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#08547A", // Button color
          borderRadius: 25,
          padding: "10px 30px",
          "&:hover": {
            bgcolor: "#0A4A5E", // Darker hover effect
          },
          marginTop: 4,
          textTransform: "none",
          fontSize: 16,
        }}
      >
        {data.button.inner_text}
      </Button>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "80vw", // 80% of the viewport width
          borderRadius: "40px",
          border: "10px solid rgb(195, 206, 211)",
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          backgroundColor: "#ffffff",
          height: "80vh",
          marginTop: 5,
        }}
      >
        <CardContent>
          {/* This is where your image will go */}
          <Image
            src={
              data.cover_image?.source?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL +
                  data.cover_image.source.url
                : null
            }
            alt={data.cover_image.alternate_text || "Donate Cause"}
            fill
            style={{ objectFit: "cover" }}
          />
        </CardContent>
      </Box>
    </Box>
  );
};

export default DonateBetterWorldSection;
