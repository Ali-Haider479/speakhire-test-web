import TestimonialsContainer from "@/components/TestimonialsContainer";
import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import PartnersTestimonials from "@/components/PartnersTestimonials";
import PartnersInfo from "@/components/PartnersInfo";

import { Box, Typography } from "@mui/material";
import React from "react";



function Partner() {
    const testimonialData = [
        {
          statement: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
          personName: "Wade Cooper",
          designation: "UX Researcher @ Google - Champion",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          avatarUrl: "/wade-avatar.jpg"
        },
        {
          statement: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
          personName: "Emily Wade",
          designation: "UX Researcher @ Google - Champion",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          avatarUrl: "/emily-avatar.jpg"
        }
      ];
  return (
    <Box

    >
        <PartnersInfo/>
        <PartnersTestimonials/>
        <BecomePartnerComponent/>
        <TestimonialsContainer
        title="Where are our talents now"
        highlightedWord="talents"
        testimonials={testimonialData}
        />
      
    </Box>
  );
}

export default Partner;
