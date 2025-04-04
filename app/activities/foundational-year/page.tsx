import { Box, Typography } from "@mui/material";
import React from "react";
import CollaborationsCarousel from "@/components/CollaboratioonCarousel";
import EconomicMobilitySection from "@/components/EconomicMobilitySection";
import FoundationYearSection from "@/components/FoundationYearSection";
import FY_InternshipProgram from "@/components/FY_InternshipProgram";
import InternNetworkCircleComponent from "@/components/InternNetworkCircleComponent";
import InternshipOutcomesSection from "@/components/InternshipOutcomesSection";
import TestimonialSection from "@/components/TestimonialSection";

async function getData() {
  try {
    const foundationalYearApiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/foundation-year-page?populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!foundationalYearApiRes.ok) throw new Error("Failed to fetch data");

    const foundationalYearData = await foundationalYearApiRes.json();
    return { ...foundationalYearData?.data };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const foundationalYearPage = async () => {
  const foundationalYearPageRes = await getData();
  const data = foundationalYearPageRes;
  console.log(data);

  const testimonialsData = data.testimonial_section.testimonials.map(
    (item: any, index: number) => {
      return {
        ...item,
        isImageLeft: index % 2 === 0 ? true : false,
      };
    }
  );

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <FoundationYearSection />
      <FY_InternshipProgram data={data.internship_program_section} />
      <EconomicMobilitySection data={data.economic_mobility_section} />
      <InternNetworkCircleComponent data={data.inter_network_section} />
      <InternshipOutcomesSection data={data.program_outcomes_section} />
      <TestimonialSection
        data={testimonialsData}
        title={data.testimonial_section.title}
      />
      <CollaborationsCarousel data={data.our_mission_section}/>
    </Box>
  );
};

export default foundationalYearPage;
