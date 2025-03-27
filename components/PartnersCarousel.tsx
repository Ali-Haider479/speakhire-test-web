"use client"; // Marks this component as client-side only

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Typography, SxProps, Theme } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type Props = {
  testimonials: any[];
};

// Sample data for partner testimonials
const testimonials = [
  {
    logo: "/partner1.png",
    name: "IDEA Public Schools",
    title: "Enrichment Activities Director",
    testimonial:
      "The Empowering Leadership Course is one of the most beneficial programs I've seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the Speaker Series you connect them with, helping them see themselves in future careers.",
  },
  {
    logo: "/partner2.png",
    name: "Frankford High School",
    title: "Assistant Principal",
    testimonial:
      "This is so great that the Foundational Year gets our students started early with the college and career exposure and pathways because they need to start thinking about that and they usually don't get this information in such a targeted way early enough. Connecting with professionals who are dedicating their time is a great experience for them so they know there are supportive people out there willing to help.",
  },
  {
    logo: "/partner3.png",
    name: "Frankford High School",
    title: "Assistant Principal",
    testimonial:
      "This is so great that the Foundational Year gets our students started early with the college and career exposure and pathways because they need to start thinking about that and they usually don't get this information in such a targeted way early enough. Connecting with professionals who are dedicating their time is a great experience for them so they know there are supportive people out there willing to help.",
  },
  // Add more testimonials as needed
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    aria-label="Previous testimonial"
    sx={{
      border: "1px solid #C2C7CE",
      color: "#08547A",
      borderRadius: "50%",
      width: 50,
      height: 50,
      "&:hover": { backgroundColor: "#074b6d", color: "#FFFF" },
    }}
  >
    <ArrowBackIcon sx={{ fontSize: 20 }} />
  </IconButton>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    aria-label="Next testimonial"
    sx={{
      border: "1px solid #C2C7CE",
      color: "#08547A",
      borderRadius: "50%",
      width: 50,
      height: 50,
      ml: 1,
      "&:hover": { backgroundColor: "#074b6d", color: "#FFFF" },
    }}
  >
    <ArrowForwardIcon sx={{ fontSize: 20 }} />
  </IconButton>
);

// Custom Button Group
const CustomButtonGroup = ({
  next,
  previous,
}: {
  next?: () => void;
  previous?: () => void;
}) => (
  <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <CustomLeftArrow onClick={previous} />
    <CustomRightArrow onClick={next} />
  </Box>
);

export default function PartnersCarousel({ testimonials }: Props) {
  return (
    <Box
      sx={{
        padding: { xs: "20px 20px", md: "40px 0" },
        backgroundColor: "#F2FAFD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "80vw", textAlign: "center" }}>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          centerMode={false}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false} // Hide default arrows
          renderButtonGroupOutside
        >
          {testimonials.map((testimonial: any, index: number) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#E6F2F9",
                borderRadius: "15px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: {xs:"95%",md:"80%"},
                minHeight: "450px",
                margin: "0 auto",
              }}
            >
              <Box sx={{ height: "100px" }}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                    testimonial.instituteLogo.source.url
                  }
                  alt={testimonial.instituteLogo.alternate_text}
                  width={80}
                  height={80}
                  style={{ marginBottom: "20px" }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  textAlign: "left",
                  marginBottom: "15px",
                }}
              >
                {testimonial.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                  marginBottom: "15px",
                  fontSize: { xs: 14, md: 16 },
                  minHeight: {xs:"250px",md:"150px"},
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {testimonial.description}
              </Typography>

              <Box sx={{ borderLeft: "1px solid #0D5C75", mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "#0C111D",
                    textAlign: "left",
                    paddingLeft: 1,
                    fontSize: { xs: 16, md: 20 },
                  }}
                >
                  {testimonial.designation}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#49454F",
                    textAlign: "left",
                    paddingLeft: 1,
                    fontSize:  { xs: 14, md: 16 },
                  }}
                >
                  {testimonial.institute_name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
