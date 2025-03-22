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
  try {
    const [homePageResponse, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate=*`, {
        next: { revalidate: 60 },
      }),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?populate=*`, {
        next: { revalidate: 60 },
      }),
    ]);

    if (!homePageResponse.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [homePageData, commonItemsData] = await Promise.all([
      homePageResponse.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...homePageData?.data,
     ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const Home = async () => {
  const homePageRes = await getData();
  console.log(homePageRes);
  const data = homePageRes;

  return (
    <Box>
      <SupportSection data={data?.hero_section} />
      <ImpactSection data={data?.statistics_section} />
      <PartnerMapsSection data={data?.statistics_section}/>
      <ImpactsLivesSection data={data?.impact_lives_section} />
      <ObjectiveSection data={data?.objective_section} />
      <PartnersInfo data={data?.partner_info_section}/>
      <PartnersTestimonials data={data?.partners_testimonials_section}/>
      <BecomePartnerComponent data={data?.become_partner_section}/>
      <Ecosystem data={data?.eco_system_section}/>
      <OfferingsSection data={data?.eco_system_section.offering_section}/>
      <WorkForceComponent data={data?.workforce_section}/>
      <StudentCarousel data={data?.student_stories_section}/>
      <DonateComponent data={data?.donate_component}/>
    </Box>
  );
};

export default Home;
