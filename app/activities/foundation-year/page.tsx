import { Box } from "@mui/material";
import React from "react";
import CollaborationsCarousel from "@/components/CollaboratioonCarousel";
import EconomicMobilitySection from "@/components/EconomicMobilitySection";
import FoundationYearSection from "@/components/FoundationYearSection";
import FY_InternshipProgram from "@/components/FY_InternshipProgram";
import InternNetworkCircleComponent from "@/components/InternNetworkCircleComponent";
import InternshipOutcomesSection from "@/components/InternshipOutcomesSection";
import TestimonialSection from "@/components/TestimonialSection";

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
      <TestimonialSection />
      <CollaborationsCarousel />
    </Box>
  );
};

export default page;
