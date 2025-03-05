import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const data = [
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    note: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
    img:"/wadeStory.svg"
  },
  {
    Name: "Emily Wade",
    designation: "UX Researcher @ Google - Champion",
    note: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
    img:"/emilyWadeStory.svg"
  },
];

const DonateStorySection = () => {
  return (
    <Box
      sx={{
        marginTop:10,
        marginBottom: 10,
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent:"center"
      }}
    >
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
            variant="h4"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
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
              marginTop: 15,
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
          <Image src={data[0].img} alt="" height={506} width={720} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", marginTop: 15 }}>
        <Box sx={{ marginLeft: 0 }}>
          <Image src={data[1].img} alt="" height={506} width={720} />
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
            variant="h4"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
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
              marginTop: 15,
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

export default DonateStorySection;
