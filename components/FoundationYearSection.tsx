"use client";
import {
  Box,
  Typography,
  Button,
  Container,
  styled,
  CardContent,
} from "@mui/material";
import React from "react";

const BreadcrumbContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginBottom: '16px',
});

function FoundationYearSection() {
  return (
    <Box
      sx={{
        padding: "100px 20px",
        backgroundColor: "#F2FAFD", // Light blue background from the image
        textAlign: "center",
        width: "100%",
        height:"353px"
      }}
    >
      <BreadcrumbContainer>
        <Typography variant="body1" component="div">
          <Box component="span" sx={{ mr: 1 }}>
            <a href="/" style={{ color: "#0B72B9", textDecoration: "none" }}>
              Home
            </a>
          </Box>
          /
          <Box component="span" sx={{ ml: 1, color: "#666" }}>
            Activities
          </Box>
        </Typography>
      </BreadcrumbContainer>
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 400,
          marginBottom: "16px",
          lineHeight: "1.2",
          paddingTop: "2vh",
        }}
      >
        <span style={{ color: "#0F99C3" }}>Foundational </span>
        Year
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          color: "#006397",
          borderColor: "#006397",
          borderRadius: 5,
          padding: "10px 30px",
          boxShadow: "none !important", // Removes default shadow
          transition: "all 0.3s ease-in-out", // Smooth hover effect
          "&:hover": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
            backgroundColor: "#064067 !important", // Slightly darker blue on hover,
            color: "white !important",
            "& img": {
              filter: "brightness(0) invert(1)",  // Turns icon to pure white
            },
          },
        }}
        endIcon={<img src="/link.svg" width={20} height={20}/>}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
        >
         Partner Interest Form
        </Typography>
      </Button>
      <Button
        variant="outlined"
        color="primary"
        sx={{
          color: "#006397",
          borderColor: "#006397",
          borderRadius: 5,
          padding: "10px 30px",
          boxShadow: "none !important", // Removes default shadow
          transition: "all 0.3s ease-in-out", // Smooth hover effect
          "&:hover": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
            backgroundColor: "#064067 !important", // Slightly darker blue on hover,
            color: "white !important",
            "& img": {
              filter: "brightness(0) invert(1)",  // Turns icon to pure white
            },
          },
          marginLeft:2
        }}
        endIcon={<img src="/link.svg" width={20} height={20}/>}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
        >
         Intern Application
        </Typography>
      </Button>
    </Box>
  );
}

export default FoundationYearSection;
