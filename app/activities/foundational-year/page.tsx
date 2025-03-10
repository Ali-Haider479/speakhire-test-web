import { Box, Typography } from "@mui/material";
import React from "react";
import CollaborationsCarousel from "@/components/CollaboratioonCarousel";
import EconomicMobilitySection from "@/components/EconomicMobilitySection";
import FoundationYearSection from "@/components/FoundationYearSection";
import FY_InternshipProgram from "@/components/FY_InternshipProgram";
import InternNetworkCircleComponent from "@/components/InternNetworkCircleComponent";
import InternshipOutcomesSection from "@/components/InternshipOutcomesSection";
import TestimonialSection from "@/components/TestimonialSection";

const data = [
  {
    Name: "Cathy Whealon",
    designation: "UX Researcher - SPEAKHIRE Alumni",
    title: "Finding My Voice, My Skills, and My Future with SPEAKHIRE",
    note: "“I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. ”",
    image:"/cathy'sStory.svg",
    isImageLeft: false,
    isTextRightAligned: true,
    
  },
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    title: "How Mentors Shape Careers and Inspire Success.",
    note: "“I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. ”",
    image:"/wadeStory.svg",
    isImageLeft: true,
    isTextRightAligned: false,
  },
];

const testimonialTitle = (
  <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
    See how <span style={{ color: "#0F99C3" }}>SPEAKHIRE </span>
    is changing lives
  </Typography>
);

const page = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <FoundationYearSection />
      <FY_InternshipProgram />
      <EconomicMobilitySection />
      <InternNetworkCircleComponent />
      <InternshipOutcomesSection />
      <TestimonialSection data={data} title={testimonialTitle}/>
      <CollaborationsCarousel />
    </Box>
  );
};

export default page;
