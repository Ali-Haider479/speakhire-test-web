import { Box, Typography } from "@mui/material";
import DonateComponent from '../components/DonateComponent';
import StudentCarousel from '../components/StudentCarousel';
import WorkForceComponent from '../components/WorkForceComponent';
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


export default function Home() {
  return (
    <Box>
      {/* <Typography color="black">Home Page</Typography> */}
      {/* Render the components here for the given task */}
      <SupportSection/>
      <ImageSection />
      <ImpactSection/>
      <PartnerMapsSection/>
      <ImpactsLivesSection/>
      <ObjectiveSection/>
      {/* <ObjectivesComponent/> */}
      <PartnersInfo/>
      <PartnersTestimonials/>
      <BecomePartnerComponent />
      <Ecosystem />
      <OfferingsSection />
      <WorkForceComponent />
      <StudentCarousel />
      <DonateComponent />
    </Box>
  );
}
