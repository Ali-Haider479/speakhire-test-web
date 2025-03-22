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
      const firstPart = words.slice(0,2).join(" ");;
      const secondPart = words.slice(2).join(" ");

      return (
        <p>
            {firstPart} 
          <span style={{ color: "#0F99C3" }}> {secondPart}</span> 
          
        </p>
      );
    } else {
      return "";
    }
  }
  return (
    <Box sx={{ backgroundColor: "#F2FAFD", py: 5 ,width:"100vw"}}>
      <Typography
        variant="h3"
        align="center"
        sx={{ mb: 2, fontWeight: 400, color: "black" }}
      >
        {HighlightText(data.title)}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mx: "auto", color: "#49454F", fontSize: 22 }}
      >
        {data.description}
      </Typography>
      <PartnersCarousel testimonials={data.partner_testimonial}/>
    </Box>
  );
}
