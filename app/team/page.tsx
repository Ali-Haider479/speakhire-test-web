
import VissionariesComponent from "@/components/Vissionaries";
import MemberBoard from "@/components/MemberBoardComponent";

import { Box, Typography } from "@mui/material";
import React from "react";


function Team() {
    const executiveBoardTitle = "Our Executive Board";
    const advisoryBoardTitle = "Our Advisory Board";
    const associateBoardTitle = "Our Associates";
    const juniorBoardTitle = "Our Junior Board";

    const boardMembers= [
        {
          name: "Hetal Jani",
          title: "Founder and Executive Director",
          imagePath: "/stock1.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
        },
        {
          name: "Madhumitha Sowndararajan",
          title: "Executive Board Chair",
          imagePath: "/stock2.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs." 
        },
        {
          name: "Kiran Jani",
          title: "Executive Board Vice President",
          imagePath: "/stock1.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
        },
        {
          name: "Prasanna Vijayanathan",
          title: "Executive Board Secretary",
          imagePath: "/stock2.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
        },
        {
          name: "Gary Blinth",
          title: "Executive Board Member",
          imagePath: "/stock1.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
        },
        {
          name: "Gary Blinth",
          title: "Executive Board Member",
          imagePath: "/stock2.jpg",
          description: "When I was younger, I thought I was going to grow up to be a doctor. But, when I got into high school, I realized I was no longer sure of my path since I enjoyed a variety of subjects. Blending my natural talents and interests led to a career in education, addressing inequities and increasing opportunities. My calling is to enable people to learn how to access and activate knowledge, identify opportunities, and develop skills and connections to pursue those opportunities. This is why I started SPEAKHIRE. I discovered my path was to empower others to find theirs."
        }
      ];
  return (
    <Box

    >
      
      <VissionariesComponent/>
      <MemberBoard
      title={executiveBoardTitle}
      members={boardMembers}
      />
      <MemberBoard
      title={advisoryBoardTitle}
      members={boardMembers}
      />
      <MemberBoard
      title={associateBoardTitle}
      members={boardMembers}
      />
      <MemberBoard
      title={juniorBoardTitle}
      members={boardMembers}
      />
      
    </Box>
  );
}

export default Team;
