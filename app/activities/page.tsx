import { Box, Typography } from "@mui/material";
import SpeakerImpact from "@/components/SpeakerImpact";
import SpeakerSeries from "@/components/SpeakerSeries";
import StudentCarousel from "@/components/StudentCarousel";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import React from "react";

function Activities() {
  return (
    <Box
    >
      <ActivitiesHeader/>
      <SpeakerSeries/>
      <StudentCarousel/>
      <SpeakerImpact/>
      
     
    </Box>
  );
}

export default Activities;
