"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Example data for each offering card.
// Replace with your own images, titles, and descriptions.
// const offeringsData = [
//   {
//     title: "Partners & Orgs",
//     imageUrl: "/stock2.jpg",
//   },
//   {
//     title: "Interns (Career trainees)",
//     imageUrl: "/stock1.jpg",
//   },
//   {
//     title: "Champions (Trainers)",
//     imageUrl: "/stock2.jpg",
//   },
// ];

interface EcosystemProps{
  data: {
      title: string;
      description: string;
      eco_system_cards:any[]
    };
}

export default function Ecosystem({data}:EcosystemProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0,1).join(" ");;
      const secondPart = words.slice(1).join(" ");

      return (
        <p>
             
          <span style={{ color: "#0F99C3" }}> {firstPart} </span> 
          {secondPart}
        </p>
      );
    } else {
      return "";
    }
  }
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ py: 6, px: { xs: 2, md: 6 }, width: "80vw", mx: "auto" }}>
        {/* Heading and Description */}
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 400, color: "black" }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, maxWidth: 800, mx: "auto", color: "#49454F" }}
        >
          {data.description}
        </Typography>

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {data.eco_system_cards.map((offer, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={4} // Adjust breakpoints to fit your desired layout
            >
              <Card
                sx={{
                  height: "100%",
                  // width: '85%',
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 10,
                  boxShadow: 0,
                  backgroundColor: "#e1f7ff",
                }}
              >
                {/* Top Image with padding and rounded corners */}
                <CardMedia
                  component="img"
                  height="auto"
                  image={process.env.NEXT_PUBLIC_STRAPI_URL+offer.card_image.source.url}
                  alt={offer.title}
                  sx={{
                    p: 1,
                    borderRadius: 10, // Adjust this value as needed
                  }}
                />

                {/* Card Text Content */}
                <CardContent sx={{ px: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 1,
                      fontWeight: 500,
                      color: "#08547A",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {offer.title}
                  </Typography>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
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
                      borderRadius: 5,
                      paddingX: "15px",
                      paddingY: "8px",
                      marginTop: "-20px",
                      marginBottom: "20px",
                      textTransform: "none",
                      boxShadow: "none !important", // Removes default shadow
                      transition: "all 0.3s ease-in-out", // Smooth hover effect
                      "&:hover": {
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
                        backgroundColor: "#064067 !important", // Slightly darker blue on hover
                        color: "white !important",
                      },
                    }}
                  >
                    Explore more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
