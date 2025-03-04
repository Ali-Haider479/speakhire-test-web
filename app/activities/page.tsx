import SpeakerImpact from "@/components/SpeakerImpact";
import SpeakerSeries from "@/components/SpeakerSeries";
import StudentCarousel from "@/components/StudentCarousel";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import React from "react";

function Activities() {
  return (
    <>
      <ActivitiesHeader />
      <SpeakerSeries />
      <StudentCarousel />
      <SpeakerImpact />
    </>
  );
}

export default Activities;
