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
    const DonationApiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/donation-page?populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!DonationApiRes.ok) throw new Error("Failed to fetch data");

    const DonationApiData = await DonationApiRes.json();
    return { ...DonationApiData?.data };
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
          mt: 10,
          alignItems: "center",
          width: "100vw",
        }}
      >
        <Typography variant="h3" sx={{width:"80vw"}}>
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
              alt={item.alternate_text}
              style={{
                maxWidth: "100%",
                height: "auto", 
              }}
            />
          ))}
        </Box>
      </Box>
      <DonateComponent />
    </Box>
  );
};

export default Donate;
