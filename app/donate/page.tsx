import DonateBetterWorldSection from "@/components/DonateBetterWorldSection";
import DonateComponent from "@/components/DonateComponent";
import DonateStorySection from "@/components/DonateStorySection";
import DonationCarousel from "@/components/DonationCarousel";
import DonationPackage from "@/components/DonationPackage";
import ExploreOtherWaysSection from "@/components/ExploreOtherWaysSection";
import PageLayout from "@/components/PageLayout";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const Donate = () => {
  return (
    <PageLayout>
      <DonateBetterWorldSection />
      <DonateStorySection />
      <DonationPackage />
      <DonationCarousel />
      <ExploreOtherWaysSection />
      <Box sx={{ display:"flex", flexDirection:"column",textAlign: "center", mt: 10 , alignItems:"center"}}>
        <Typography variant="h3">
          Acknowledging our esteemed{" "}
          <span style={{ color: "#08547A" }}>contributors</span>
        </Typography>
        <Box sx={{display:"flex", flexDirection:"row",mt:3 }}>
          <Image
            src={"/grantMakersLogo.png"}
            width={380}
            height={120}
            alt={""}
          />
          <Image
            src={"/RockEfellerLogo.png"}
            alt={""}
            width={380}
            height={120}
          />
          <Image
            src={"/CommunitasLogo.png"}
            width={350}
            height={120}
            alt={""}
          />
          <Image
            src={"/LorealParisLogo.png"}
            alt={""}
            width={350}
            height={120}
          />
        </Box>
      </Box>
      <DonateComponent />
    </PageLayout>
  );
};

export default Donate;
