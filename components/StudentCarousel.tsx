"use client";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface TestimonialType {
  id: number;
  name: string;
  year: string;
  text: string;
  image?: string;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Stacy",
    year: "18",
    text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
  },
  {
    id: 2,
    name: "Afrida",
    year: "20",
    text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
  },
  {
    id: 3,
    name: "Dayra",
    year: "21",
    text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    aria-label="Previous testimonial"
    sx={{
      border: "1px solid gray",
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
      border: "1px solid gray",
      color: "#08547A",
      borderRadius: "50%",
      width: 50,
      height: 50,
      ml: 3,
      "&:hover": { backgroundColor: "#074b6d", color: "#FFFF" },
    }}
  >
    <ArrowForwardIcon sx={{ fontSize: 20 }} />
  </IconButton>
);

const CustomButtonGroup = ({
  next,
  previous,
  setActiveIndex,
  totalSlides,
}: {
  next?: () => void;
  previous?: () => void;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  totalSlides: number;
}) => {
  const handleNext = () => {
    if (next) {
      // Update activeIndex and call next()
      setActiveIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
      next();
    }
  };

  const handlePrevious = () => {
    if (previous) {
      // Update activeIndex and call previous()
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
      previous();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <CustomLeftArrow onClick={handlePrevious} />
      <CustomRightArrow onClick={handleNext} />
    </Box>
  );
};

 const StudentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "100px 16px",
        backgroundColor: "#F2FAFD",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", marginBottom: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            marginBottom: 2,
            "& span": { color: "#2196f3" },
            color: "black",
          }}
        >
          Student <span>Success Stories</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", fontSize: "1.2rem" }}>
          Explore real-life success stories from our students that have achieved
          remarkable results
        </Typography>
      </Box>

      {/* Carousel Section */}
      <Carousel
        responsive={responsive}
        infinite
        centerMode
        focusOnSelect
        renderButtonGroupOutside
        arrows={false}
        customButtonGroup={
          <CustomButtonGroup
            next={() => {}}
            previous={() => {}}
            setActiveIndex={setActiveIndex}
            totalSlides={testimonials.length}
          />
        }
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={testimonial.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
              transform: activeIndex === index ? "scale(1.1)" : "scale(0.95)",
              opacity: activeIndex === index ? 1 : 0.6,
            }}
          >
            <Paper
              elevation={activeIndex === index ? 1 : 0}
              sx={{
                width: "50vw",
                padding: 3,
                borderRadius: 5,
                py: 5,
                my: 4,
                backgroundColor: activeIndex === index ? "#D7F2FA" : "#E9F6FB",
                textAlign: "center",
                ml: 3,
                transition: "all 0.3s ease-in-out",
                boxShadow: activeIndex === index
                  ? "0px 10px 30px rgba(0, 0, 0, 0.2)"
                  : "0px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#0C111D",
                  marginBottom: 5,
                  fontSize: activeIndex === index ? "1.1rem" : "1rem",
                  fontWeight: activeIndex === index ? "bold" : "normal",
                }}
              >
                {testimonial.text}
              </Typography>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  margin: "0 auto 16px",
                  backgroundColor: activeIndex === index ? "#bbdefb" : "#e3f2fd",
                  transform: activeIndex === index ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {testimonial.name} '{testimonial.year}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default StudentCarousel