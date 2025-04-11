import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface PartnersInfoProps {
  data: {
    title: string;
    description: string;
    partner_logos: any[];
  };
}

export default function PartnersInfo({ data }: PartnersInfoProps) {
  return (
    <Box sx={{ backgroundColor: "#F2FAFD", py: 5, width: "100vw", display:"flex",flexDirection:"column",alignItems:"center" }}>
      <Box sx={{width:"80vw"}}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 400, color: "black", fontSize:{xs:"2rem",md:"3rem"} }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 6,
            maxWidth: 800,
            mx: "auto",
            color: "#49454F",
            fontSize: 22,
          }}
        >
          {data.description}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "80vw",
          backgroundColor: "#E6F2F9", // Light background color
          padding: {xs:"40px 20px",md:"40px 0"},
          borderRadius: 15,
          margin: "0 auto", // Center the container horizontally
          display: "flex",
          justifyContent: "center", // Center the content
          alignItems: "center", // Align items vertically
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {data.partner_logos.map((partner, index) => (
            <Grid item key={index} xs={6} sm={3} md={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <Image
                  src={partner.source.url}
                  alt={partner.alt}
                  width={120} // Adjust width as needed
                  height={120} // Adjust height as needed
                  objectFit="contain" // Ensure logos scale properly
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centers buttons horizontally
          alignItems: "center", // Centers buttons vertically
          gap: 2, // Adds space between buttons
          flexDirection: "row", // Stacks the buttons vertically
          py: 5,
          width:"80vw"
        }}
      >
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
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
          >
            Expolre more
          </Typography>
        </Button>
        <Link href={"/partner"}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#006397", // Button color
              borderRadius: 5,
              padding: "10px 30px",
              "&:hover": {
                bgcolor: "#0A4A5E", // Darker hover effect
              },
              fontSize: 16,
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Become a partner now
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
