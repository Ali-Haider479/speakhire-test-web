import BecomePartnerComponent from "@/components/BecomePartnerComponent";
import VissionariesComponent from "@/components/Vissionaries";
import DonateComponent from "@/components/DonateComponent";
import NewNameComponent from "@/components/NewName"
import ObjectiveSection from "@/components/ObjectivesSection";
import ObjectivesComponent from "@/components/ObjectivesComponent";
import TheoryOfChangeComponent from "@/components/TheoryOfChangeComponent";
import OpportunityForChangeComponent from "@/components/OpportunityComponent"
import ActivitiesSection from "@/components/Acitivities";
import MegazineSection from "@/components/Megazine";
import NewsSection from "@/components/NewsSection";
import BuildingLeaders from "@/components/BuildingLeaders";
import EcoSytemAbout from "@/components/EcoSystemAbout";
import PageLayout from "@/components/PageLayout";

import { Box, Typography } from "@mui/material";
import React from "react";


function About() {
  return (
    <PageLayout>
      <BuildingLeaders/>
      <ObjectiveSection/>
      <EcoSytemAbout/>
      <TheoryOfChangeComponent/>
      <OpportunityForChangeComponent/>
      
      <NewNameComponent/>
      
      <BecomePartnerComponent/>
      <VissionariesComponent/>
      <MegazineSection/>
      <NewsSection/>

      <ActivitiesSection/>
      <DonateComponent/>
    </PageLayout>
  );
}

export default About;
