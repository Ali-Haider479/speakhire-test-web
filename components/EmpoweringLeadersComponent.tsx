import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface EmpoweringLeadersComponentProps {
  data: {
    title: string;
    description_part1: string;
    description_part2: string;
    prerequisition_list: any[];
    cover_image: any;
  };
}

export default function EmpoweringLeadersComponent({
  data,
}: EmpoweringLeadersComponentProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const lines = text.split(":");
      console.log(lines);
      const words = lines[0].split(" ");
      const highlightedWord = words[2];
      const line1firstPart = words.slice(0, -1);
      const line2 = lines[1].trim();

      return (
        <>
          <p>
            {line1firstPart}
            <span style={{ color: "#0F99C3" }}> {highlightedWord}</span>:
          </p>
          <p>{line2}</p>
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        width: "80vw",
        backgroundColor: "#F5F8FA", // Light blue background
        borderRadius: "30px",
        p: { xs: 3, md: 6 },
        my: 4,
        mx: "auto",
      }}
    >
      {/* Main Title Section */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 400,
          color: "#333",
          mb: 1,
          fontSize: { xs: "26px", sm: "32px", md: "40px" },
          lineHeight: 1.2,
        }}
      >
        {HighlightText(data.title)}
      </Typography>

      {/* Program Description */}
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          mb: 4,
          fontSize: "16px",
          lineHeight: 1.6,
        }}
      >
        {data.description_part1}
      </Typography>

      {/* Content Grid: Text Left, Image Right */}
      <Grid container spacing={4} alignItems="center">
        {/* Left side - Text content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#555",
              mb: 4,
              fontSize: "16px",
              lineHeight: 1.6,
            }}
          >
            {data.description_part2}
          </Typography>

          {/* Bullet points with custom icons */}
          <Box sx={{ mt: 2 }}>
            {data.prerequisition_list.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color: "#0F99C3",
                    mr: 1,
                    mt: "3px",
                    fontSize: "20px",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#555",
                    fontSize: "16px",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", md: "400px" },
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Image
              src={
                data?.cover_image?.source?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL +
                    data?.cover_image?.source?.url
                  : null
              }
              alt={data?.cover_image?.alternate_text}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
