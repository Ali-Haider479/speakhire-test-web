import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const data = [
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    note: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
    img: "/wadeStory.svg",
  },
  {
    Name: "Emily Wade",
    designation: "UX Researcher @ Google - Champion",
    note: "Because of people like you, I was able to receive the mentorship I needed. Thank you for helping me start over.",
    img: "/emilyWadeStory.svg",
  },
];

interface DonateStorySectionProps {
  data: {
    association: string;
    cover_image: any;
    description: string;
    designation: string;
    employer: string;
    highlight: string;
    name: string;
  }[];
}

const DonateStorySection = ({ data }: DonateStorySectionProps) => {
  return (
    <Box
      sx={{
        marginTop: { xs: 5, md: 10 },
        marginBottom: { xs: 5, md: 10 },
        width: { xs: "90vw", md: "80vw" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {data.map((item: any, index: number) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, md: 10 },
            mb: 5,
            flex: 1,
          }}
          key={index}
        >
          <Box
            sx={{
              backgroundColor: "#e1f7ff",
              borderRadius: "40px",
              padding: { xs: "24px", md: "40px" },
              maxWidth: "32rem",
              textAlign: "left",
              height: { xs: "auto", md: "450px" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                marginBottom: "16px",
                color: "#111827",
                pt: 3,
                fontSize: { xs: "1.25rem", md: "2rem" },
              }}
            >
              {item.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: { xs: "8px 12px", md: "12px 16px" },
                borderLeft: "1px solid #374151",
                maxWidth: "400px",
                marginTop: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#222",
                  fontSize: { xs: 16, md: 22 },
                }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {`${item.designation} ${
                  item.employer ? `@ ${item.employer}` : ""
                } - ${item.association}`}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: "center", // Centers image on smaller screens
            }}
          >
            <Image
              src={
                item.cover_image.source.url ? item.cover_image.source.url : null
              }
              alt=""
              style={{ objectFit: "cover" }}
              height={506}
              width={720}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DonateStorySection;
