"use server"
import DonateBetterWorldSection from "@/components/DonateBetterWorldSection";
import DonateComponent from "@/components/DonateComponent";
import DonateStorySection from "@/components/DonateStorySection";
import DonationCarousel from "@/components/DonationCarousel";
import DonationPackage from "@/components/DonationPackage";
import ExploreOtherWaysSection from "@/components/ExploreOtherWaysSection";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

async function getData() {
  try {
    const [DonationApiRes, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/donation-page?populate=*`, {
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

    if (!DonationApiRes.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [DonationApiData, commonItemsData] = await Promise.all([
      DonationApiRes.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...DonationApiData?.data,
      ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const Donate = async () => {
  const DonationPageRes = await getData();
  const data = DonationPageRes;
  console.log(data);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DonateBetterWorldSection data={data.hero_section} />
      <DonateStorySection data={data.donationTestimonals} />
      <DonationPackage
        data={{
          ...data.corporate_plans_section,
          better_tomorrow_card: data.better_tomorrow_card,
        }}
      />
      <DonationCarousel data={data.donation_changes_lives} />
      <ExploreOtherWaysSection data={data.otherway_contribute_section} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mt: {xs:5,md:10},
          alignItems: "center",
          width: {xs:"85vw",md:"100vw"},
        }}
      >
        <Typography variant="h2" sx={{width:{xs:"90vw",md:"80vw"},fontSize:{xs:"2rem",md:"3rem"}}}>
          {data.contributors_section.title.split(" ").slice(0, -1).join(" ")}
          <span style={{ color: "#08547A" }}>
            {" "}
            {data.contributors_section.title.split(" ").slice(-1)}
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3, 
            mt: 3,
          }}
        >
          {data.contributors_section.logos.map((item: any) => (
            <Image
              key={item.alternate_text} 
              src={
                item?.source?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL + item?.source?.url
                  : null
              }
              width={380} 
              height={120}
              alt={item.alternate_text||"contributorsSection Logo"}
              style={{
                maxWidth: "100%",
                height: "auto", 
              }}
            />
          ))}
        </Box>
      </Box>
      <DonateComponent data={data?.donate_component}/>
    </Box>
  );
};

export default Donate;
