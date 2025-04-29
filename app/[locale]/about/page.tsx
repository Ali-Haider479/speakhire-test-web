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

interface PageProps {
  params: {
    locale: string;
  };
}

async function getData(locale: string) {
  try {
    const [aboutPageResponse, commonItemsResponse] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about?locale=${locale}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
          cache: "no-store", // Disables caching (SSR mode)
        }
      ),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?locale=${locale}&populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
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

async function About({ params }: PageProps) {
  const { locale } = await params;
  const aboutPageRes = await getData(locale);
  console.log(aboutPageRes);
  const data = aboutPageRes;
  return (
    <Box>
      {data.hero_section && <BuildingLeaders data={data.hero_section} />}
      {data.objective_section && (
        <ObjectiveSection data={data.objective_section} />
      )}
      {data.about_ecosystem && <EcoSystemAbout data={data.about_ecosystem} />}
      {data.theory_of_change_section && (
        <TheoryOfChangeComponent data={data.theory_of_change_section} />
      )}
      {data.theory_of_change_section?.opportunity_for_change_section && (
        <OpportunityForChangeComponent
          data={data.theory_of_change_section.opportunity_for_change_section}
        />
      )}
      {data.why_new_name_section && (
        <NewNameComponent data={data.why_new_name_section} />
      )}
      {data.become_partner_section && (
        <BecomePartnerComponent data={data.become_partner_section} />
      )}
      {data.meet_visionary_section && data.team_section && (
        <VisionariesComponent
          data={{ ...data.meet_visionary_section, ...data.team_section }}
        />
      )}
      {data.magazine_section && (
        <MagazineSection data={data.magazine_section} />
      )}
      {data.latest_news && <NewsSection data={data.latest_news} />}
      {data.activities_outcome_section && (
        <ActivitiesSection data={data.activities_outcome_section} />
      )}
      {data?.donate_component && (
        <DonateComponent data={data?.donate_component} />
      )}
    </Box>
  );
}

export default About;
