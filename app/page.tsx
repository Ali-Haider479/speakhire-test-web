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


export default function Home() {
  return (
    <Box>
      {/* <Typography color="black">Home Page</Typography> */}
      {/* Render the components here for the given task */}
      <ObjectivesComponent/>
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
