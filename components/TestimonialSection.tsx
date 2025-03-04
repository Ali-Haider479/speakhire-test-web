import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const data = [
  {
    Name: "Cathy Whealon",
    designation: "UX Researcher - SPEAKHIRE Alumni",
    title: "Finding My Voice, My Skills, and My Future with SPEAKHIRE",
    note: "“I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. ”",
  },
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    title: "How Mentors Shape Careers and Inspire Success.",
    note: "“I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. ”",
  },
];

const TestimonialSection = () => {
  return (
    <Box sx={{ marginBottom: 10 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
        See how <span style={{ color: "#0F99C3" }}>SPEAKHIRE </span>
        is changing lives
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            backgroundColor: "#e1f7ff",
            borderRadius: "40px",
            padding: { xs: "24px", md: "40px" },
            maxWidth: "32rem",
            marginX: "auto",
            textAlign: "left",
            marginLeft: 0,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
            }}
          >
            {data[0].title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#374151",
              marginBottom: "24px",
              lineHeight: "1.25",
              fontSize: "1.28rem",
              marginTop: 5,
            }}
          >
            {data[0].note}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "12px 16px",
              borderLeft: "1px solid #374151", // Left border with a blue shade
              maxWidth: "400px", // Adjust width if needed
              marginTop: 5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
              {data[0].Name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {data[0].designation}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginLeft: 4 }}>
          <Image src="/cathy'sStory.svg" alt="" height={506} width={720} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", marginTop:15}}>
        <Box sx={{ marginLeft: 0 }}>
          <Image src="/wadeStory.svg" alt="" height={506} width={720} />
        </Box>
        <Box
          sx={{
            backgroundColor: "#e1f7ff",
            borderRadius: "40px",
            padding: { xs: "24px", md: "40px" },
            maxWidth: "32rem",
            marginX: "auto",
            textAlign: "left",
            marginLeft: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
            }}
          >
            {data[1].title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#374151",
              marginBottom: "24px",
              lineHeight: "1.25",
              fontSize: "1.28rem",
              marginTop: 5,
            }}
          >
            {data[1].note}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "12px 16px",
              borderLeft: "1px solid #374151", // Left border with a blue shade
              maxWidth: "400px", // Adjust width if needed
              marginTop: 5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
              {data[1].Name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#555" }}>
              {data[1].designation}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
