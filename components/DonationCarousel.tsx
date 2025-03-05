import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const images = [
  [
    { src: "/11.jpg", width: "30%" },
    { src: "/12.jpg", width: "70%" },
    
  ],
  [
    { src: "/13.jpg", width: "70%" },
    { src: "/14.jpg", width: "30%" },
  ],
];

const DonationCarousel = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography variant="h3" sx={{ color: "#085236", width: "60vw" }}>
        Your donation creates opportunities and{" "}
        <span style={{ color: "#6AAA19" }}>changes lives </span>
        for generations
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          width: "80vw",
          mt:4
        }}
      >
        {images.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            {row.map((img, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: img.width,
                  height: "40vh",
                }}
              >
                <Image
                  src={img.src}
                  alt="Community"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DonationCarousel;
