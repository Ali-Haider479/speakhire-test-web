"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Image from "next/image";
import ImageSection from "./ImageSection";

interface PartnershipBannerProps {
 data:{
  title:string,
  description:string,
  cover_image:any,
  button:any
 }
}

const PartnershipBanner = ({data}:PartnershipBannerProps) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
      <Box
        sx={{
          width: "100%",
          bgcolor: "#F2FAFD",
          py: 5,
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          {/* Top Section */}
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 500,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
                {data.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                mb: 4,
                maxWidth: "800px",
                mx: "auto",
              }}
            >
              {data.description}
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#0a5275",
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#08415e",
                },
              }}
            >
              {data.button.inner_text}
            </Button>
          </Box>
        </Container>
      </Box>
      <ImageSection imageSrc={data.cover_image.source.url} />
    </Box>
  );
};

export default PartnershipBanner;
