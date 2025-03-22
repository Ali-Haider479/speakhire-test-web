import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";

interface EcoSystemAboutProps {
  data: {
    title: string;
    description: string;
    cover_image: any;
  };
}

export default function EcoSystemAbout({ data }: EcoSystemAboutProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const restOfWords = words.slice(1).join(" ");

      return (
        <p>
          <span style={{ color: "#0F99C3" }}>{firstWord}</span> {restOfWords}
        </p>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        width: "80vw",
        height: "auto",
        borderRadius: "40px",
        backgroundColor: "#F2FAFD",
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        my: 10,
        pl: { xs: 3, md: 5 },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* First child box - Text Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          paddingY: { xs: 3, md: 5 },
          paddingX: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          mt: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "lightgray",
            borderRadius: "50%",
            color: "#08547A",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 2,
            marginTop: "auto",
          }}
        >
          <ExtensionOutlinedIcon />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {HighlightText(data.title)}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          {data.description}
        </Typography>
      </Box>

      {/* Second child box - Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "40vw" },
          position: "relative",
          height: { xs: "50vh", md: "80vh" },
          backgroundColor: "#E4F5FB",
          borderRadius: "40px",
          overflow: "hidden", // Ensures no overflow issues
        }}
      >
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_URL + data.cover_image.source.url}
          alt={data.cover_image.alternate_text}
          layout="responsive" // Correct layout for full-box fill
          style={{ objectFit: "cover", padding: "40px" }} // Ensures the image scales properly inside the box
          width={16}
          height={9}
        />
      </Box>
    </Box>
  );
}
