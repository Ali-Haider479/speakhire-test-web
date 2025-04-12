import DonateComponent from "../../components/DonateComponent";
import StudentCarousel from "../../components/StudentCarousel";
import WorkForceComponent from "../../components/WorkForceComponent";
import OfferingsSection from "@/components/OfferingsSelection";
import Ecosystem from "@/components/Ecosystem";
import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import PartnersInfo from "@/components/PartnersInfo";
import PartnersTestimonials from "@/components/PartnersTestimonials";
import ObjectiveSection from "@/components/ObjectivesSection";
import SupportSection from "@/components/SupportSections";
import ImpactSection from "@/components/ImpactSection";
import ImpactsLivesSection from "@/components/ImpactsLivesSection";
import PartnerMapsSection from "@/components/PartnerMapsSection"

interface PageProps {
  params: {
    locale: string;
  };
}

async function getData(locale:string) {
  try {
    const [homePageResponse, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?locale=${locale}&populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?locale=${locale}populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
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

const Home = async ({ params }: PageProps) => {
  const { locale } = await params;

  console.log(locale)
  const homePageRes = await getData(locale);
  console.log(homePageRes);
  const data = homePageRes;

  return (
    <>
      <SupportSection data={data?.hero_section} />
      <ImpactSection data={data?.statistics_section} />
      <PartnerMapsSection data={data?.statistics_section} />
      <ImpactsLivesSection data={data?.impact_lives_section} />
      <ObjectiveSection data={data?.objective_section} />
      <PartnersInfo data={data?.partner_info_section} />
      <PartnersTestimonials data={data?.partners_testimonials_section} />
      <BecomePartnerComponent data={data?.become_partner_section} />
      <Ecosystem data={data?.eco_system_section} />
      <OfferingsSection data={data?.eco_system_section.offering_section} />
      <WorkForceComponent data={data?.workforce_section} />
      <StudentCarousel data={data?.student_stories_section} />
      <DonateComponent data={data?.donate_component} />
    </>
  );
};

export default Home;
