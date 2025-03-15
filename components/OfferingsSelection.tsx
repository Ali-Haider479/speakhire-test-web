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
import CallMadeIcon from "@mui/icons-material/CallMade";

// Example data for each offering card.
// Replace with your own images, titles, and descriptions.
const offeringsData = [
  {
    title: "Leadership courses",
    description: "10-session courses to support individuals exploring careers.",
    imageUrl: "/Foundational Year/20191026_104734.jpg",
  },
  {
    title: "Foundational Year",
    description:
      "Year-long virtual program to support individuals seeking college & career opportunities.",
    imageUrl: "/stock1.jpg",
  },
  {
    title: "SPEAKHIRE Seminars",
    description:
      "Hour-long professional development topics to help you succeed.",
    imageUrl: "/stock1.jpg",
  },
  {
    title: "Pathways Days",
    description:
      "Present new possibilities with Pathways Days so they discover their path forward.",
    imageUrl: "/stock1.jpg",
  },
  {
    title: "Symposiums",
    description:
      "Long-form global dialogues that push societies to progress toward the future.",
    imageUrl: "/stock1.jpg",
  },
];

interface OfferingsSectionProps{
  data: {
      title: string;
      description: string;
      offering_cards:any[]
    };
}

export default function OfferingsSection({data}:OfferingsSectionProps) {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ py: 6, px: { xs: 2, md: 6 }, width: "80vw", mx: "auto" }}>
        {/* Heading and Description */}
        <Typography
          variant="h3"
          align="center"
          sx={{ mb: 2, fontWeight: 400, color: "black" }}
        >
         {data.title}
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
          {data.offering_cards.map((offer, index) => (
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
                  image={process.env.NEXT_PUBLIC_STRAPI_URL+offer.image.source.url}
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
                      fontWeight: 400,
                      color: "#08547A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Title on the left */}
                    {offer.title}
                    {/* Icon on the right */}
                    <CallMadeIcon sx={{ fontSize: "1.8rem" }} />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#42474E" }}
                    width={"80%"}
                  >
                    {offer.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
