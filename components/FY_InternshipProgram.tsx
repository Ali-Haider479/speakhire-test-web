import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

interface FY_InternshipProgramProps {
  data: {
    title: string;
    description: string;
    cover_image: any;
  };
}

const FY_InternshipProgram = ({ data }: FY_InternshipProgramProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 2).join(" ");
      const lastPart = words.slice(4).join(" ");
      const middlePart = words.slice(2, 4).join(" ");

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
        width: "80vw",
        height: { xs: "auto", md: "50vh" }, // Dynamic height for responsiveness
        margin: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column layout for smaller screens
        justifyContent: "space-between",
        alignItems: "center",
        my: 10,
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        gap: 4, // Adds spacing between content in column view
      }}
    >
      {/* First child box - text content */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          paddingY: 4,
          paddingX: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 5,
            marginBottom: 2,
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.25rem" },
          }}
        >
          {data.description}
        </Typography>
      </Box>

      {/* Second child box - image content */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          position: "relative",
          height: { xs: "300px", md: "100%" },
        }}
      >
        <Image
          src={
            data?.cover_image?.source?.url
              ? process.env.NEXT_PUBLIC_STRAPI_URL +
                data?.cover_image?.source?.url
              : null
          }
          alt="partner-image"
          fill
          style={{ objectFit: "cover", borderRadius: "40px" }}
        />
        <Image
          src="/awardWinner.svg"
          alt="award-winner"
          width={80} // Reduced size for better responsiveness
          height={80}
          style={{
            position: "absolute",
            bottom: "15px",
            right: "15px",
          }}
        />
      </Box>
    </Box>
  );
};

export default FY_InternshipProgram;
