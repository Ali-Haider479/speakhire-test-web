"use client";
import React, { useState, useRef } from "react";
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
  age: string;
  story: string;
  picture: any;
}

interface StudentCarouselProps {
  data: {
    title: string;
    description: string;
    studentCards: TestimonialType[];
  };
}

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

const CustomArrow = ({ onClick, isLeft }: { onClick?: () => void; isLeft?: boolean }) => (
  <IconButton
    onClick={onClick}
    aria-label={isLeft ? "Previous testimonial" : "Next testimonial"}
    sx={{
      border: "1px solid #C2C7CE",
      color: "#08547A",
      borderRadius: "50%",
      width: 40,
      height: 40,
      mx: 1,
      "&:hover": { backgroundColor: "#074b6d", color: "#FFFF" },
    }}
  >
    {isLeft ? <ArrowBackIcon sx={{ fontSize: 20 }} /> : <ArrowForwardIcon sx={{ fontSize: 20 }} />}
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
      setActiveIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
      next();
    }
  };

  const handlePrevious = () => {
    if (previous) {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
      previous();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <CustomArrow onClick={handlePrevious} isLeft />
      <CustomArrow onClick={handleNext} />
    </Box>
  );
};

const StudentCarousel = ({ data }: StudentCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 1).join(" ");
      const secondPart = words.slice(1).join(" ");

      return (
        <>
          {firstPart}
          <span style={{ color: "#2196f3" }}> {secondPart} </span>
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box sx={{ backgroundColor: "#F2FAFD", width: "100%" }}>
      <Box sx={{ margin: "0 auto", width: "100vw" ,padding: "32px 16px"}}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              marginBottom: 2,
              color: "black",
              fontSize: { xs: "1.8rem", md: "3rem" },
            }}
          >
            {HighlightText(data.title)}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#666", fontSize: { xs: "0.9rem", md: "1.25rem" } }}
          >
            {data.description}
          </Typography>
        </Box>

        {/* Carousel Section */}
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          centerMode
          focusOnSelect
          renderButtonGroupOutside
          arrows={false}
          customButtonGroup={
            <CustomButtonGroup
              next={() => carouselRef.current?.next()}
              previous={() => carouselRef.current?.previous()}
              setActiveIndex={setActiveIndex}
              totalSlides={data.studentCards.length}
            />
          }
        >
          {data.studentCards.map((student, index) => (
            <Box
              key={student.id}
              sx={{
                display: "flex",
                justifyContent: "center",
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                transform: {xs:"scale(0.95)",md:"scale(1)"},
                opacity: activeIndex === index ? 1 : 0.5,
              }}
            >
              <Paper
                sx={{
                  width: { xs: "47vw", md: "47vw" },
                  p: { xs: 3, md: 6 },
                  borderRadius: 5,
                  py: { xs: 3, md: 5 },
                  backgroundColor: "#E9F6FB",
                  textAlign: "center",
                }}
                aria-label={`testimonial by ${student.name}`}
                elevation={0}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0C111D",
                    marginBottom: 3,
                    fontWeight: 400,
                    fontSize: { xs: "0.9rem", md: "1.25rem" },
                  }}
                >
                  {student.story}
                </Typography>
                <Avatar
                  sx={{
                    width: { xs: 50, md: 60 },
                    height: { xs: 50, md: 60 },
                    margin: "0 auto 16px",
                    backgroundColor: "#bbdefb",
                  }}
                  src={
                    student?.picture?.source?.url
                      ? process.env.NEXT_PUBLIC_STRAPI_URL + student.picture.source.url
                      : ""
                  }
                  alt="Student Carousel Image"
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 400,
                    marginBottom: 1,
                    fontSize: { xs: "0.9rem", md: "1.25rem" },
                  }}
                >
                  {student.name} '{student.age}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default StudentCarousel;
