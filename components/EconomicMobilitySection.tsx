import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const images = [
  [
    { src: "/1.png", width: "46%" },
    { src: "/2.png", width: "27%" },
    { src: "/3.png", width: "27%" },
  ],
  [
    { src: "/4.png", width: "27%" },
    { src: "/5.png", width: "46%" },
    { src: "/6.png", width: "27%" },
  ],
  [
    { src: "/7.png", width: "27%" },
    { src: "/8.png", width: "27%" },
    { src: "/9.png", width: "46%" },
  ],
];

const EconomicMobilitySection = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        alignContent: "center",
        width: "75vw",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: 1,
          width: "100%",
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      >
        Fueling <span style={{ color: "#0F99C3" }}>economic mobility </span>
        through skills and connection.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#F2FAFD", // Light blue background from the image
          padding: 3,
          borderRadius: "20px",
        }}
      >
        {images.map((row, rowIndex) => (
          <Box key={rowIndex} sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            {row.map((img, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: img.width,
                  height:176
                }}
              >
                <Image src={img.src} alt="Community" layout="fill" objectFit="cover" />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EconomicMobilitySection;
