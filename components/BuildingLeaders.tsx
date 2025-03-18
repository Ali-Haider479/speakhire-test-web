"use client";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// Styled components for the background
const GradientBackground = styled(Box)(({ theme }) => ({
  background: "linear-gradient(180deg, #F2FAFD 50%, #ffffff 50%)",
  padding: theme.spacing(6, 0),
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const WhiteSection = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: "60%",
  background: "#ffffff",
  borderTopLeftRadius: "40px",
  borderTopRightRadius: "40px",
  zIndex: 0,
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "85vw",
  margin: "auto",
  borderRadius: "50px",
  border: "8px solid #d8eaf5",
  padding: "8px",
  backgroundColor: "#f7fbff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

const RoundedContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: "40px",
  overflow: "hidden",
  backgroundColor: "#ffffff",
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "4%",
  width: "96%",
  marginLeft: "2%",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  borderRadius: "20px",
  padding: "16px 24px",
  boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.08)",
}));

// Inner content of the curved card (where the image will go)
const CardContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 3,
  overflow: "hidden",
  height: "89vh",
  borderRadius: "32px",
  backgroundColor: "#f0f0f0", // Placeholder for the image background
}));

// Text styling
const SpeakHighlight = styled("span")({
  color: "#0B72B9",
  fontWeight: 700,
});

// Container for the breadcrumb navigation
const BreadcrumbContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "16px",
});

// Container for the title
const TitleContainer = styled(Box)({
  textAlign: "center",
  marginBottom: "24px",
});

interface BuildingLeadersProps {
  data: {
    title: string;
    descriptionTitle: string;
    description: string;
    cover_image: any;
  };
}

const BuildingLeaders = ({ data }: BuildingLeadersProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWord = words.slice(2).join(" ");
      const middleWords = words[1];

      return (
        <p>
          {firstWord} <span style={{ color: "#0F99C3" }}>{middleWords}</span>{" "}
          {lastWord}
        </p>
      );
    } else {
      return "";
    }
  };
  return (
    <GradientBackground>
      {/* <WhiteSection /> */}

      <BreadcrumbContainer>
        <Typography variant="body1" component="div">
          <Box component="span" sx={{ mr: 1 }}>
            <a href="/" style={{ color: "#0B72B9", textDecoration: "none" }}>
              Home
            </a>
          </Box>
          /
          <Box component="span" sx={{ ml: 1, color: "#666" }}>
            About us
          </Box>
        </Typography>
      </BreadcrumbContainer>

      <TitleContainer>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 500 }}
        >
          {/* About <SpeakHighlight>SPEAKHIRE</SpeakHighlight>: Building leaders */}
          {HighlightText(data.title)}
        </Typography>
      </TitleContainer>

      <ImageContainer>
        <RoundedContainer>
          <div style={{ filter: "grayscale(100%)" }}>
            <Image
              src={
                process.env.NEXT_PUBLIC_STRAPI_URL + data.cover_image.source.url
              }
              alt={data.cover_image.alternate_text}
              layout="responsive"
              width={900}
              height={450}
              objectFit="cover"
            />
          </div>
          <TextOverlay>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                marginBottom: "16px",
                color: "#1D1B20", // Dark color for main text
                lineHeight: "1.2",
              }}
            >
              <span style={{ color: "#08547a" }}> SPEAK</span> stands for{" "}
              <span style={{ color: "#08547a" }}>S</span>upport{" "}
              <span style={{ color: "#08547a" }}>P</span>repare{" "}
              <span style={{ color: "#08547a" }}>E</span>mpower{" "}
              <span style={{ color: "#08547a" }}>A</span>ll{" "}
              <span style={{ color: "#08547a" }}>K</span>ind
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, fontSize: 22 }}>
              {data.description}
            </Typography>
          </TextOverlay>
        </RoundedContainer>
      </ImageContainer>
    </GradientBackground>
  );
};

export default BuildingLeaders;
