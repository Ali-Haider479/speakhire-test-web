import React from "react";
import { Box, Typography } from "@mui/material";

interface ImpactSectionProps {
  data: {
    description: string;
    statistics: any[];
  };
}

const ImpactSection = async ({ data }: ImpactSectionProps) => {
  // Static data for the statistics
  const statsData = data.statistics.map((item: any) => {
    return { value: item.numericTitle, description: item.description };
  });

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWords = words.slice(1).join(" ");

      return (
        <>
          <span style={{ color: "#08547A" }}>{firstWord}</span> {lastWords}
        </>
      );
    } else {
      return "";
    }
  };

  // [
  //   {
  //     value: data.countriesRepresentNo,
  //     description: data.countriesRepresentText,
  //   },
  //   {
  //     value: data.careerImpactedNo,
  //     description: data.careerImpactedText,
  //   },
  //   {
  //     value: data.internshipProvidedNo,
  //     description: data.internShipProvidedText,
  //   },
  //   {
  //     value: data.studentPreparedPercentage,
  //     description: data.studentPreparedText,
  //   },
  // ];

  return (
    <Box
      sx={{
        padding: "40px 20px",
        backgroundColor: "#FFFFFF", // White background
        textAlign: "center",
        width: "100%",
        alignItems:"center",
        display:"flex",
        flexDirection:"column"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 400,
          marginBottom: "16px",
          color: "#1D1B20", // Dark color for main text
          lineHeight: "1.2",
        }}
      >
        We <span style={{ color: "#0F99C3" }}>S</span>upport{" "}
        <span style={{ color: "#0F99C3" }}>P</span>repare{" "}
        <span style={{ color: "#0F99C3" }}>E</span>mpower{" "}
        <span style={{ color: "#0F99C3" }}>A</span>ll{" "}
        <span style={{ color: "#0F99C3" }}>k</span>ind
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          marginBottom: "32px",
          fontWeight: 500,
          lineHeight: "1.5",
          width: { xs: "60vw", md: "40vw" },
        }}
      >
        {HighlightText(data?.description)}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "24px", // Spacing between stats
          flexWrap: "wrap", // Responsive wrapping
          width: "80vw",
          margin: "0 auto",
          marginTop: 5,
        }}
      >
        {statsData.map((stat, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              minWidth: "200px",
              padding: "16px",
              backgroundColor: "#F2FAFD", // Light blue background for stats
              borderRadius: "32px", // Rounded corners
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "3rem",
                fontWeight: 700,
                color: "#0F99C3", // Blue color for numbers
                // marginBottom: '8px',
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                color: "#1D1B20", // Gray color for description
                lineHeight: "1.5",
                paddingBottom: "10px",
              }}
            >
              {stat.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImpactSection;
