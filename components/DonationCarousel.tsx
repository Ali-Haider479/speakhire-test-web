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

interface DonationCarouselProps {
  data: {
    title: string;
    images: any[];
  };
}

const DonationCarousel = ({ data }: DonationCarouselProps) => {
  const groupedImages = data.images.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / 2);
    acc[rowIndex] = acc[rowIndex] || [];
    acc[rowIndex].push({
      src: item.source.url,
      width: index % 3 === 0 ? "30%" : "70%",
      alt: item.alternate_text,
    });
    return acc;
  }, []);

  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 5).join(" ");
    const highlightedWord = words.slice(5, 7).join(" ");
    const restOfWords = words.slice(7).join(" ");

    return (
      <>
        {firstWords} <span style={{ color: "#6AAA19" }}>{highlightedWord}</span>{" "}
        {restOfWords}
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: {xs:5,md:10},
      }}
    >
      <Typography variant="h2" sx={{ color: "#085236", width: {xs:"80vw",md:"60vw"} ,fontSize:{xs:"2rem",md:"3rem"}}}>
        {HighlightText(data.title)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: {xs:1,md:3},
          width: {xs:"90vw",md:"80vw"},
          mt: {xs:2,md:4},
        }}
      >
        {groupedImages.map((row: any, rowIndex: number) => (
          <Box
            key={rowIndex}
            sx={{ display: "flex", justifyContent: "center", gap: {xs:1,md:2}, }}
          >
            {row.map((img: any, index: number) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: img.width,
                  height: {xs:"35vw",md:"40vh"},
                }}
              >
                <Image
                  src={
                    img?.src
                      ? img?.src
                      : null
                  }
                  alt={img.alt || "Community"}
                  fill
                  style={{ objectFit: "cover" }}
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
