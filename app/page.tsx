// "use client"
import { Box, Typography } from "@mui/material";
import DonateComponent from "../components/DonateComponent";
import StudentCarousel from "../components/StudentCarousel";
import WorkForceComponent from "../components/WorkForceComponent";
import OfferingsSection from "@/components/OfferingsSelection";
import Ecosystem from "@/components/Ecosystem";
import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import PartnersInfo from "@/components/PartnersInfo";
import PartnersTestimonials from "@/components/PartnersTestimonials";
import ObjectivesComponent from "@/components/ObjectivesComponent";
import ObjectiveSection from "@/components/ObjectivesSection";
import SupportSection from "@/components/SupportSections";
import ImageSection from "@/components/ImageSection";
import ImpactSection from "@/components/ImpactSection";
import ImpactsLivesSection from "@/components/ImpactsLivesSection";
import PartnerMapsSection from "@/components/PartnerMapsSection";

async function getData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

const Home = async () => {
  const homePageRes = await getData();
  console.log(homePageRes.data);
  const data = homePageRes.data;

  return (
    // <PageLayout>
    <Box>
      <SupportSection data={data} />
      <ImpactSection data={data} />
      <PartnerMapsSection />
      <ImpactsLivesSection data={data} />
      <ObjectiveSection objectiveSection={data.objectiveSection} />
      <PartnersInfo />
      <PartnersTestimonials />
      <BecomePartnerComponent />
      <Ecosystem />
      <OfferingsSection />
      <WorkForceComponent />
      <StudentCarousel />
      <DonateComponent />
    </Box>
    // </PageLayout>
  );
};

export default Home;
