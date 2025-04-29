import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image";

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
        <>
          {firstWord} <span style={{ color: "#0F99C3" }}>{middleWords}</span>{" "}
          {lastWord}
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F2FAFD 50%, #ffffff 50%)",
        padding: {xs:2,md:6},
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"100vw"
      }}
    >
      {/* <WhiteSection /> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
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
      </Box>

      <Box sx={{ textAlign: "center", marginBottom: "24px" }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: 500, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          {/* About <SpeakHighlight>SPEAKHIRE</SpeakHighlight>: Building leaders */}
          {HighlightText(data.title)}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: {xs:"95vw",md:"80vw"},
          maxHeight: "710",
          margin: {xs:0,md:"auto"},
          borderRadius: "50px",
          border: "8px solid #d8eaf5",
          padding: "8px",
          backgroundColor: "#f7fbff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "40px",
            overflow: "hidden",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ filter: "grayscale(100%)" }}>
            <Image
              src={
                 data.cover_image.source.url
              }
              alt={data.cover_image.alternate_text}
              layout="responsive"
              width={16}
              height={9}
              style={{ objectFit: "cover" }}
            />
          </div>
          <Box
            sx={{
              position: "absolute",
              bottom: "4%",
              width: "96%",
              marginLeft: "2%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderRadius: {xs:"30px",md:"20px"},
              padding: {xs:"8px 16px",md:"16px 24px"},
              boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                marginBottom: "16px",
                color: "#1D1B20", // Dark color for main text
                lineHeight: "1.2",
                fontSize: { xs: "0.9rem", md: "3rem" },
              }}
            >
              <span style={{ color: "#08547a" }}> SPEAK</span> stands for{" "}
              <span style={{ color: "#08547a" }}>S</span>upport{" "}
              <span style={{ color: "#08547a" }}>P</span>repare{" "}
              <span style={{ color: "#08547a" }}>E</span>mpower{" "}
              <span style={{ color: "#08547a" }}>A</span>ll{" "}
              <span style={{ color: "#08547a" }}>K</span>ind
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, fontSize: { xs: "0.9rem", md: "1.25rem" } }}
            >
              {data.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuildingLeaders;
