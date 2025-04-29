import { Box } from "@mui/material";
import StudentCarousel from "@/components/StudentCarousel";
import LeadershipCurriculum from "@/components/LeadershipCurriculum";
import LeadershipCourseCurriculum from "@/components/LeadershipCourseCurriculum";
import EmpoweringLeadersComponent from "@/components/EmpoweringLeadersComponent";
import ActivitiesHeader from "@/components/ActivitiesHeader";
import MemberBoard from "@/components/MemberBoardComponent";
import React from "react";

async function getData() {
  try {
    const [leadershipPageResponse, commonItemsResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/leadership-page?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
      fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/common?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }),
    ]);

    if (!leadershipPageResponse.ok || !commonItemsResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const [leadershipPageData, commonItemsData] = await Promise.all([
      leadershipPageResponse.json(),
      commonItemsResponse.json(),
    ]);

    return {
      ...leadershipPageData?.data,
      ...commonItemsData.data,
    };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const leadershipPage = async() => {
  const leadershipPageRes = await getData();
  console.log(leadershipPageRes);
  const data = leadershipPageRes;
  return (
    <Box sx={{mb:5, width:"100%",alignItems:"center",display:"flex",flexDirection:"column" }}>
      <ActivitiesHeader
        highlightedWord="Leadership"
        regularWord="Courses"
        buttonConfig={{
          type: "internal",
          label: "Partner Interest Form",
          url: "",
        }}
        breadcrumbLabel="Activities"
      />
      <EmpoweringLeadersComponent data={data.dbeia_leadership_program}/>
      <LeadershipCourseCurriculum data={data.course_curriculum_section}/>
      <LeadershipCurriculum data={data.leadership_courses_section}/>
      <MemberBoard
        title={data.career_path_facilitator_section.title}
        subtitle={data.career_path_facilitator_section.sub_title}
        members={data.career_path_facilitator_section.team_members}
      />
      <StudentCarousel data={data.student_stories_section}/>
    </Box>
  );
};

export default leadershipPage;
