import { Box } from "@mui/material";
import StudentCarousel from "@/components/StudentCarousel";
import LeadershipCurriculum from "@/components/LeadershipCurriculum";
import LeadershipCourseCurriculum from "@/components/LeadershipCourseCurriculum";
import EmpoweringLeadersComponent from "@/components/EmpoweringLeadersComponent";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import MemberBoard from "@/components/MemberBoardComponent";
import React from "react";
import PageLayout from "@/components/PageLayout";


const page = () => {
  const facilitators= [
    {
      name: "Laon CHapman",
      title: "Facilitator",
      imagePath: "/stock1.jpg",
      description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
    },
    {
      name: "Francesca Gonzalez",
      title: "Speaker",
      imagePath: "/stock2.jpg",
      description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs." 
    },
    {
      name: "Hye-Yung Hickman",
      title: "Speaker & Mentor",
      imagePath: "/stock1.jpg",
      description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
    }
  ];
  return (
    <PageLayout>
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
      <MemberBoard
      title={{
        regularText: "Career",
        highlightedText: "Pathways",
        afterHighlightText: "Facilitators",
        highlightColor: "#00A3D9"  // Optional: defaults to #00A3D9 (the blue in your image)
      }}
      subtitle="Our facilitators are educators and social workers ready to empower your students."
      members={facilitators}
      autoPlayInterval={1000}
      />
      <StudentCarousel/>
      
    </PageLayout>
  );
};

export default page;
