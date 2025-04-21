import SpeakerImpact from "@/components/SpeakerImpact";
import SpeakerSeries from "@/components/SpeakerSeries";
import StudentCarousel from "@/components/StudentCarousel";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import React from "react";
import { Box } from "@mui/material";

async function getData() {
  try {
    const [activitiesPageResponse, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/activities-page?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
    ]);

    if (!activitiesPageResponse.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [activitiesPageData, commonItemsData] = await Promise.all([
      activitiesPageResponse.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...activitiesPageData?.data,
      ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

async function Activities() {
  const activitiesPageRes = await getData();
  console.log(activitiesPageRes);
  const data = activitiesPageRes;
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
      <SpeakerSeries data={data.global_leaders_component}/>
      <StudentCarousel data={data.student_stories_section}/>
      <SpeakerImpact data={data.speakers_impact}/>
    </>
  );
}

export default Activities;
