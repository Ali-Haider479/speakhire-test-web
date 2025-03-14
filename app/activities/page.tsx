import SpeakerImpact from "@/components/SpeakerImpact";
import SpeakerSeries from "@/components/SpeakerSeries";
import StudentCarousel from "@/components/StudentCarousel";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import React from "react";
import { Box } from "@mui/material";

function Activities() {
  return (
    <>
      <ActivitiesHeader 
        highlightedWord="Speakhire" 
        regularWord="Series"
        buttonConfig={{
          type: 'youtube',
          label: 'Watch on YouTube',
          url: 'https://www.youtube.com/channel/your-channel-id'
        }}
      />
      <SpeakerSeries />
      <StudentCarousel />
      <SpeakerImpact />
    </>
  );
}

export default Activities;
