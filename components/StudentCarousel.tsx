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

interface StudentCarouselProps{
  data:{
    title:string,
    description:string,
    studentCards: TestimonialType[]
  }
}

// const testimonials: TestimonialType[] = [
//   {
//     id: 1,
//     name: "Stacy",
//     year: "18",
//     text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
//   },
//   {
//     id: 2,
//     name: "Afrida",
//     year: "20",
//     text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
//   },
//   {
//     id: 3,
//     name: "Dayra",
//     year: "21",
//     text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
//   },
// ];

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
      <CustomLeftArrow onClick={handlePrevious} />
      <CustomRightArrow onClick={handleNext} />
    </Box>
  );
};

const StudentCarousel = ({data}:StudentCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0,1).join(" ");;
      const secondPart = words.slice(1).join(" ");

      return (
        <p>
            {firstPart}
          <span style={{ color: "#2196f3" }}> {secondPart} </span> 
          
        </p>
      );
    } else {
      return "";
    }
  }

  return (
    <Box sx={{ backgroundColor: "#F2FAFD",width:"100%" }}>
      <Box sx={{ margin: "0 auto", padding: "32px 16px", width: "80vw" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", marginBottom: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              marginBottom: 2,
              color: "black",
            }}
          >
            {HighlightText(data.title)}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#666", fontSize: "1.2rem" }}
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
                transition:
                  "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                transform: "scale(1)",
                opacity: activeIndex === index ? 1 : 0.5,
              }}
            >
              <Paper
                sx={{
                  width: "38vw",
                  p: 6,
                  borderRadius: 5,
                  py: 5,
                  pb: 2,
                  my: 3,
                  backgroundColor: "#E9F6FB",
                  textAlign: "center",
                  transition: "all 0.3s ease-in-out",
                }}
                aria-label={`testimonial by ${student.name}`}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#0C111D",
                    marginBottom: 5,
                    fontWeight: 400,
                  }}
                >
                  {student.story}
                </Typography>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    margin: "0 auto 16px",
                    backgroundColor: "#bbdefb",
                    transform: "scale(1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  src={student?.picture?.source?.url?process.env.NEXT_PUBLIC_STRAPI_URL+student.picture.source.url:""}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 400, marginBottom: 1 }}
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
