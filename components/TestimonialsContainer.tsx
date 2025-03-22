import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Testimonial from "./Testimonial";

interface TestimonialData {
  association: string;
  cover_image: {
    source: {
      url: string;
    };
  };
  description: string;
  designation: string;
  employer: string;
  highlight: string;
  name: string;
}

interface TestimonialsData {
  testimonials: TestimonialData[];
}

interface TestimonialsContainerProps {
  title: string;
  highlightedWord: string;
  testimonials: TestimonialsData;
}

const TestimonialsContainer = ({
  title,
  highlightedWord,
  testimonials,
}: TestimonialsContainerProps) => {
  const titleParts = title.includes(highlightedWord)
    ? title.split(highlightedWord)
    : [title, ""];

  return (
    <Box sx={{width:"80vw"}}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 400,
          mb: 6,
          textAlign: "left",
        }}
      >
        {titleParts[0]}
        <Typography
          component="span"
          sx={{
            color: "#00a6d9",
            fontWeight: 400,
            fontSize: "inherit",
          }}
        >
          {highlightedWord}
        </Typography>
        {titleParts[1]}
      </Typography>

      {testimonials.testimonials?.length > 0 && (
        <Box sx={{ mb: 6 }}>
          {testimonials.testimonials.map((item: TestimonialData) => (
            <Testimonial
              key={item.name}
              textOnLeft={false}
              statement={item.description}
              personName={item.name}
              designation={item.designation}
              videoUrl={item.cover_image.source.url}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TestimonialsContainer;
