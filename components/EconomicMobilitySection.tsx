import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface EconomicMobilitySectionProps {
  data: {
    title: string;
    images: any[];
  };
}

const EconomicMobilitySection = ({ data }: EconomicMobilitySectionProps) => {
  const groupedImages = data.images.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / 3);
    acc[rowIndex] = acc[rowIndex] || [];
    acc[rowIndex].push({
      src: item.source.url,
      width: index % 3 === 0 ? "46%" : "27%",
      alt:item.alternate_text
    });
    return acc;
  }, []);
  
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words[0];
      const lastPart = words.slice(3).join(" ");
      const middlePart = words.slice(1, 3).join(" ");

      return (
        <p>
          {firstPart}
          <span style={{ color: "#0F99C3" }}> {middlePart} </span>
          {lastPart}
        </p>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        alignContent: "center",
        width: "80vw",
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
        {HighlightText(data.title)}
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
        {groupedImages.map((row:any, rowIndex:number) => (
          <Box
            key={rowIndex}
            sx={{ display: "flex", justifyContent: "center", gap: 2 }}
          >
            {row.map((img:any, index:number) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: rowIndex % 3 === 0 && index === 0
                  ? "46%"
                  : rowIndex % 3 === 2 && index === 2
                  ? "46%"
                   : rowIndex % 3 === 1 && index === 1
                  ? "46%"
                  : "27%",
                  height: 176,
                }}
              >
                <Image
                  src={process.env.NEXT_PUBLIC_STRAPI_URL+img.src}
                  alt={img.alt}
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

export default EconomicMobilitySection;
