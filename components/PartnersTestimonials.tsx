import { Box, Typography } from "@mui/material";
import React from "react";
import PartnersCarousel from "./PartnersCarousel";

interface PartnersTestimonialsProps {
  data: {
    title: string;
    description: string;
    partner_testimonial: any[];
  };
}

export default function PartnersTestimonials({
  data,
}: PartnersTestimonialsProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 2).join(" ");
      const secondPart = words.slice(2).join(" ");

      return (
        <>
          {firstPart}
          <span style={{ color: "#0F99C3" }}> {secondPart}</span>
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "#F2FAFD",
        py: 5,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
      }}
    >
      <Box sx={{ width: "80vw" }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 400, color: "black",fontSize:{xs:"2rem",md:"3rem"} }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ mx: "auto", color: "#49454F", fontSize: {xs:16,md:22} }}
        >
          {data.description}
        </Typography>
      </Box>
      <PartnersCarousel testimonials={data.partner_testimonial} />
    </Box>
  );
}
