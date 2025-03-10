import { Box, Button, CardContent, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const DonateBetterWorldSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // padding: "40px 20px",
        backgroundColor: "#F2FAFD", // Light blue background from the image
        textAlign: "center",
        alignItems: "center",
        width: "100vw",
        height:"auto",
        background: 'linear-gradient(180deg, #F2FAFD 70%, #ffffff 30%)',
        // padding: theme.spacing(6, 0),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 400,
          marginBottom: "16px",
          lineHeight: "1.2",
          paddingTop: "10vh",
          width: "45vw",
        }}
      >
        Every investment brings us closer to a
        <span style={{ color: "#0F99C3" }}> better world </span>
        for immigrants
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.2rem",
          color: "#49454F", // Gray color for the description
          marginBottom: "32px",
          //   maxWidth: '600px',
          width: "35vw",
          margin: "0 auto",
          lineHeight: "1.5",
          fontWeight: 500,
        }}
      >
        Your support helps individuals from immigrant families build the
        confidence, skills, and networks they need to thrive in the workforce
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#08547A", // Button color
          borderRadius: 5,
          padding: "10px 30px",
          "&:hover": {
            bgcolor: "#0A4A5E", // Darker hover effect
          },
          marginTop: 4,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
        >
          Make an impact today
        </Typography>
      </Button>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "80vw", // 80% of the viewport width
          marginLeft: "-2vw", // Add left margin to center it horizontally
          borderRadius: "40px",
          border: "10px solid rgb(195, 206, 211)",
          overflow: "hidden",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
          backgroundColor: "#ffffff",
          height:"80vh",
          marginTop:5
        }}
      >
        <CardContent>
          {/* This is where your image will go */}
          <Image
            src="/donateCause.svg"
            alt="Donate Cause"
            layout="fill"
            objectFit="cover"
          />
        </CardContent>
      </Box>
    </Box>
  );
};

export default DonateBetterWorldSection;
