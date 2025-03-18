import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import React from "react";

interface VisionariesComponentProps {
  data: {
    title: string;
    description: string;
    button: any;
    cover_image: any;
  };
}

export default function VisionariesComponent({
  data,
}: VisionariesComponentProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWords = words.slice(1).join(" ");

      return (
        <p>
          <span style={{ color: "#0F99C3" }}>{firstWord}</span> {lastWords}
        </p>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        backgroundColor: "#F2FAFD", // Light background color (you can adjust this to match your design, e.g., #ECF6FB or any other color)
        padding: "20px 0",
        display: "flex",
        justifyContent: "center", // Center the inner content horizontally
        alignItems: "center", // Center vertically if needed
      }}
    >
      <Box
        sx={{
          width: "80vw", // 80% of the screen width
          height: "586px", // Set a height for the box
          borderRadius: "40px", // Border radius
          backgroundColor: "#F2FAFD", // Background color
          margin: "auto", // Centers the box horizontally
          display: "flex", // To align child boxes in a row
          justifyContent: "space-between", // Space between the children
          alignItems: "center", // Center items vertically
          my: 10, // Vertical margin
        }}
      >
        {/* First child box - takes 45% of the width */}
        <Box
          sx={{
            width: "40%", // Width adjusted
            backgroundColor: "#F2FAFD", // Light background color to match the image
            borderRadius: "20px", // Rounded corners to match the image
            padding: 3, // Add padding for spacing
            display: "flex",
            flexDirection: "column", // Stack the elements vertically
            // justifyContent: 'center',
            alignItems: "flex-start",
            height: "100%", // Ensures the box stretches to full height
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              marginBottom: 1,
            }}
          >
           {HighlightText(data.title)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              fontSize: 20,
            }}
          >
            {data.description}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              padding: "8px 16px",
              borderColor: "#1976d2",
              color: "#1976d2",
              "&:hover": {
                borderColor: "#1565c0",
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
              marginTop: "30px",
            }}
          >
            {data.button.inner_text}
          </Button>
        </Box>

        {/* Second child box - takes 55% of the width */}
        <Box sx={{ width: "60%", position: "relative", height: "100%" }}>
          <Image
            src={
              process.env.NEXT_PUBLIC_STRAPI_URL + data.cover_image.source.url
            } // Replace with your actual image source
            alt={data.cover_image.alternate_text}
            layout="fill" // Make the image fill the parent container
            objectFit="cover" // Ensure the image covers the entire area
            style={{ borderRadius: "40px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
