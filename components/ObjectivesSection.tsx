"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

interface ObjectiveSectionProps {
  data: {
    title: string;
    objectives: any[];
    isPartner?: boolean;
  };
}

const ObjectiveSection = ({ data }: ObjectiveSectionProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words.slice(0, 3).join(" ");
      const middleWords = words.slice(3, -1).join(" ");
      const lastWord = words[words.length - 1];

      return (
        <>
          <span style={{ color: "#0F99C3" }}>{firstWord}</span> {middleWords}
          <span style={{ color: "#08547A" }}> {lastWord}</span>
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: { xs: "20px", md: "40px 20px" },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "1.8rem",
            md: `${data.isPartner ? "2.5rem" : "3rem"}`,
          },
          fontWeight: 400,
          marginBottom: "30px",
          color: "#1D1B20",
          width: "50vw",
        }}
      >
        {data.isPartner ? HighlightText(data.title) : data.title}
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: "80vw",
          margin: "0 auto",
          backgroundColor: "#F2FAFD",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        {data?.objectives?.map((objective, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            {/* Content Section */}
            <Box sx={{ textAlign: "left", flex: 1 }}>
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#E6EEF2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                <Image
                  src={objective?.icon_image?.source?.url}
                  alt="icon"
                  width={24}
                  height={24}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, marginBottom: "10px", color: "#1D1B20" }}
              >
                {objective?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#49454F", lineHeight: "1.5" }}
              >
                {objective?.description}
              </Typography>
            </Box>

            {/* Decorative Line + Diamond */}
            <Box
              sx={{
                display: {
                  xs: "flex", // Show on small screens (899px or less)
                  md: index === data.objectives.length - 1 ? "none" : "flex", // Hide on medium+ screens for last item
                },
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                width: "24px", // Fixed width for diamond alignment
                marginLeft: "20px",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%", // Full height of the column
                  borderLeft: "1px solid #e0e0e0",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "0",
                  bottom: "0",
                  zIndex: 0,
                }}
              />
              <Image
                src="/diamond.svg"
                alt="diamond separater"
                width={24}
                height={24}
                style={{
                  zIndex: 1,
                  marginTop: `${
                    index === 0 ? "55px" : index === 1 ? "125px" : "160px"
                  }`,
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ObjectiveSection;
