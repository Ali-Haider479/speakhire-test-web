import { Box } from "@mui/material";
import StudentCarousel from "@/components/StudentCarousel";
import LeadershipCurriculum from "@/components/LeadershipCurriculum";
import LeadershipCourseCurriculum from "@/components/LeadershipCourseCurriculum";
import EmpoweringLeadersComponent from "@/components/EmpoweringLeadersComponent";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import React from "react";


const page = () => {
  return (
    <Box
    >
      <ActivitiesHeader 
        highlightedWord="Leadership" 
        regularWord="Courses"
        buttonConfig={{
          type: 'internal',
          label: 'Partner Interest Form',
          url: ''
        }}
        breadcrumbLabel="Activities"
      />
      <EmpoweringLeadersComponent/>
      <LeadershipCourseCurriculum/>
      <LeadershipCurriculum/>
      <StudentCarousel/>
      
    </Box>
  );
};

export default page;
