import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface WorkforceCardProps {
  title: string;
  description: string;
  button: any;
}

const WorkforceCard = (data: WorkforceCardProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 2).join(" ");
      const secondPart = words[2];
      const thirdPart = words.slice(3, 6).join(" ");
      const fourthPart = words[6];

      return (
        <p>
          {firstPart} <span style={{ color: "#2563eb" }}>{secondPart}</span>{" "}
          {thirdPart} {" "}
          <span style={{ color: "#2563eb" }}>{fourthPart}</span>
        </p>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#e1f7ff",
        borderRadius: "40px",
        padding: { xs: "24px", md: "32px" },
        maxWidth: "32rem",
        marginX: "auto",
        textAlign: "left",
        marginLeft: 0,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          marginBottom: "16px",
          color: "#111827",
        }}
      >
        {HighlightText(data.title)}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#374151",
          marginBottom: "24px",
          lineHeight: "1.25",
          fontSize: "1.28rem",
        }}
      >
        {data.description}
      </Typography>

      <Button
        variant="outlined"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => {
          console.log("View intern programs clicked");
        }}
        sx={{
          color: "#006397",
          borderColor: "#006397",
          borderRadius: "20px",
          boxShadow: "none",
          textTransform: "none",
          paddingX: "14px",
          paddingY: "8px",
          marginTop: "-5px",
          marginBottom: "20px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#064067",
            color: "white",
            borderColor: "#064067",
          },
        }}
      >
        {data.button.inner_text}
      </Button>
    </Box>
  );
};

export default WorkforceCard;
