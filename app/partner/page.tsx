import TestimonialsContainer from "@/components/TestimonialsContainer";
import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import PartnersTestimonials from "@/components/PartnersTestimonials";
import PartnersInfo from "@/components/PartnersInfo";
import PartnershipBanner from "@/components/PartnershipBanner";
import ImageSection from "@/components/ImageSection";
import ImpactSection from "@/components/ImpactSection";
import { Box, Typography } from "@mui/material";
import React from "react";
import ObjectiveSection from "@/components/ObjectivesSection";

async function getData() {
  try {
    const [partnerPageResponse, commonItemsResponse] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/partner-page?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
          cache: "no-store", // Disables caching (SSR mode)
        }
      ),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
    ]);

    if (!partnerPageResponse.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [partnerPageData, commonItemsData] = await Promise.all([
      partnerPageResponse.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...partnerPageData?.data,
      ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

async function Partner() {
  const partnerPageRes = await getData();
  console.log(partnerPageRes);
  const data = partnerPageRes;
  const testimonialData = [
    {
      statement:
        "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
      personName: "Wade Cooper",
      designation: "UX Researcher @ Google - Champion",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      avatarUrl: "/wade-avatar.jpg",
    },
    {
      statement:
        "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
      personName: "Emily Wade",
      designation: "UX Researcher @ Google - Champion",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      avatarUrl: "/emily-avatar.jpg",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PartnershipBanner data={data.hero_section} />
      <ImpactSection
        data={{ ...data.economic_growth_statistics, isPartner: true }}
      />
      <PartnersInfo data={data.join_change_maker_section} />
      <ObjectiveSection data={{...data.partners_objective,isPartner:true}}/>
      <PartnersTestimonials data={data.partners_testimonials_section} />
      <BecomePartnerComponent data={data.become_partner_section} />
      <TestimonialsContainer
        title={data.talents_testimonial.title}
        highlightedWord="talents"
        testimonials={data.talents_testimonial}
      />
    </Box>
  );
}

export default Partner;
