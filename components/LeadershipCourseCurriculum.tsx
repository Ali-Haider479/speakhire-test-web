import React from "react";
import { Box, Typography, Grid, Divider, Card } from "@mui/material";

// Define the curriculum item type
interface CurriculumItem {
  id: string;
  title: string;
}

interface LeadershipCourseCurriculumProps {
  data: {
    title: string;
    course_curriculum: any[];
  };
}

export default function LeadershipCourseCurriculum({
  data,
}: LeadershipCourseCurriculumProps) {
  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 2).join(" ");
    const highlightedWord = words[2];

    return (
      <>
        {firstWords} <span style={{ color: "#0F99C3" }}>{highlightedWord}</span>{" "}
      </>
    );
  };

  const items = data.course_curriculum;
  const fullRows = Math.floor(items.length / 3);
  const remainder = items.length % 3;

  const renderItems = items.map((item, index) => (
    <Grid
      key={index}
      item
      xs={12}
      md={index >= fullRows * 3 ? (remainder === 1 ? 12 : 6) : 4}
      sx={{
        borderLeft:
          index % 3 !== 0 ? { xs: "none", md: "1px solid #E0E0E0" } : "none",
        borderTop:
          index >= 3 ? { xs: "1px solid #E0E0E0", md: "none" } : "none",
      }}
    >
      <Box sx={{ p: 4, height: "100%", display: "flex", alignItems: "center" }}>
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "#555", fontSize: "16px" }}
        >
          {item.description}
        </Typography>
        
      </Box>
      {index!==items.length-1&&<Divider />}
    </Grid>
  ));

  return (
    <Box
      sx={{
        width: { xs: "90vw", md: "80vw" },
        pb: 5, // Padding top and bottom
        px: { xs: 2, md: 0 }, // Responsive padding left and right
      }}
    >
      {/* Header Section */}
      <Box mb={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            display: "inline",
            color: "#333",
          }}
        >
          {HighlightText(data.title)}
        </Typography>
      </Box>

      {/* Main Grid Container */}

      <Box
        sx={{
          backgroundColor: "#F5F8FA",
          borderRadius: "20px",
          overflow: "hidden",
          mt: 2,
        }}
      >
        {[...Array(fullRows)].map((_, rowIndex) => (
          <Grid container key={rowIndex}>
            {renderItems.slice(rowIndex * 3, (rowIndex + 1) * 3)}
          </Grid>
        ))}
        {remainder > 0 && (
          <>
            {/* <Divider sx={{ borderColor: "#E0E0E0" }} /> */}
            <Grid container>{renderItems.slice(fullRows * 3)}</Grid>
          </>
        )}
      </Box>
    </Box>
  );
}
