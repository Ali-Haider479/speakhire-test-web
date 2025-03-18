import React from "react";
import { Box, Typography, Container } from "@mui/material";

interface NewNameComponentProps {
  data: {
    title: string;
    descriptionTitle: string;
    description: string;
  };
}

function NewNameComponent({ data }: NewNameComponentProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWords = words.slice(0, -1).join(" ");
      const restOfWords = words[words.length - 1];

      return (
        <p>
          {firstWords}
          <span style={{ color: "#0F99C3" }}>{restOfWords}</span>
        </p>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        pt: 5,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Title and Subtitle */}
      <Typography
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
        sx={{
          fontWeight: 500,
          mb: 1,
        }}
      >
        {data.title}
      </Typography>

      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
        {HighlightText(data.descriptionTitle)}
      </Typography>

      {/* Light Blue Content Box */}
      <Box
        sx={{
          backgroundColor: "#E9F6FB", // Light blue background
          borderRadius: "24px",
          p: 4,
          mt: 3,
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
          width: "80vw",
        }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontWeight: 500,
            fontSize: 16,
            textAlign: "justify",
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default NewNameComponent;
