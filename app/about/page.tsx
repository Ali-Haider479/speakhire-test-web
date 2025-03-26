import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import VisionariesComponent from "@/components/Visionaries";
import DonateComponent from "@/components/DonateComponent";
import NewNameComponent from "@/components/NewName";
import ObjectiveSection from "@/components/ObjectivesSection";
import ObjectivesComponent from "@/components/ObjectivesComponent";
import TheoryOfChangeComponent from "@/components/TheoryOfChangeComponent";
import OpportunityForChangeComponent from "@/components/OpportunityComponent";
import ActivitiesSection from "@/components/Activities";
import MagazineSection from "@/components/Magazine";
import NewsSection from "@/components/NewsSection";
import BuildingLeaders from "@/components/BuildingLeaders";
import EcoSystemAbout from "@/components/EcoSystemAbout";

import { Box, Typography } from "@mui/material";
import React from "react";

async function getData() {
  try {
    const [aboutPageResponse, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?populate=*`, {
        cache: "no-store",
      }),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?populate=*`, {
        cache: "no-store",
      }),
    ]);

    if (!aboutPageResponse.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [aboutPageData, commonItemsData] = await Promise.all([
      aboutPageResponse.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...aboutPageData?.data,
      ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

async function About() {
  const aboutPageRes = await getData();
  console.log(aboutPageRes);
  const data = aboutPageRes;
  return (
    <Box>
      <BuildingLeaders data={data.hero_section} />
      <ObjectiveSection data={data.objective_section} />
      <EcoSystemAbout data={data.about_ecosystem} />
      <TheoryOfChangeComponent data={data.theory_of_change_section} />
      <OpportunityForChangeComponent
        data={data.theory_of_change_section.opportunity_for_change_section}
      />
      <NewNameComponent data={data.why_new_name_section} />
      <BecomePartnerComponent data={data.become_partner_section} />
      <VisionariesComponent
        data={{ ...data.meet_visionary_section, ...data.team_section }}
      />
      <MagazineSection data={data.magazine_section} />
      <NewsSection data={data.latest_news} />
      <ActivitiesSection data={data.activities_outcome_section} />
      <DonateComponent data={data?.donate_component}/>
    </Box>
  );
}

export default About;
