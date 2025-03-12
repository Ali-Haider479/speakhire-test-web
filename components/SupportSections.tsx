import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ImageSection from "./ImageSection";

interface HeroSectionProps {
  data: {
    heroSubTitle1: string;
    heroSubTitle2: string;
    heroSubTitle3: string;
    heroDescription: string;
    heroButtonText: string;
    heroCoverImage: any;
  };
}

const SupportSection = async ({ data }: HeroSectionProps) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "40px 20px",
          backgroundColor: "#F2FAFD", // Light blue background from the image
          textAlign: "center",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "60vw",
            fontSize: "3rem",
            fontWeight: 400,
            marginBottom: "16px",
            lineHeight: "1.2",
            paddingTop: "10vh",
          }}
        >
          <span style={{ color: "#0F99C3" }}>{data.heroSubTitle1} </span>
          {data.heroSubTitle2} <span style={{ color: "#08547A" }}>leaders</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "#49454F", // Gray color for the description
            marginBottom: "32px",
            //   maxWidth: '600px',
            width: "32vw",
            margin: "0 auto",
            lineHeight: "1.5",
            fontWeight: 500,
          }}
        >
          Your support helps individuals from immigrant families build the
          confidence, skills, and networks they need to thrive in the workforce
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#08547A", // Button color
            borderRadius: 5,
            padding: "10px 30px",
            "&:hover": {
              bgcolor: "#0A4A5E", // Darker hover effect
            },
            marginTop: 4,
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Make an impact today
        </Button>
      </Box>
      <ImageSection imageSrc={data?.heroCoverImage?.url} />
    </Box>
  );
};

export default SupportSection;
