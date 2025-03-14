import SpeakerImpact from "@/components/SpeakerImpact";
import SpeakerSeries from "@/components/SpeakerSeries";
import StudentCarousel from "@/components/StudentCarousel";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import PageLayout from "@/components/PageLayout";
import React from "react";

function Activities() {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}

export default Activities;
