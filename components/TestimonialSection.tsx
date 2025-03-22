"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type TestimonialProps = {
  highlight: string;
  description: string;
  name: string;
  designation: string;
  employer: string;
  association: string;
  cover_image: any;
  isImageLeft: boolean;
};

type TestimonialCardProps = {
  testimonial: TestimonialProps;
  index: number;
};

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: index % 2 == 0 ? "row" : "row-reverse",
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 4, md: 10 },
      marginTop: 5,
      textAlign: "left",
      px: 3,
    }}
  >
    {/* Image Section */}
    <Box>
      <Image
        src={
          testimonial.cover_image?.source?.url
            ? process.env.NEXT_PUBLIC_STRAPI_URL +
              testimonial.cover_image?.source?.url
            : null
        }
        alt=""
        height={506}
        width={720}
        style={{
          borderRadius: "20px", // Rounded corners
        }}
      />
    </Box>

    {/* Text Content Section */}
    <Box
      sx={{
        backgroundColor: "#e1f7ff",
        borderRadius: "40px",
        padding: { xs: "24px", md: "40px" },
        maxWidth: "30vw",
        height: "506px",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: 500, marginBottom: "16px", color: "#111827", mt: 5 }}
      >
        {testimonial.highlight}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#374151",
          marginBottom: "24px",
          lineHeight: "1.5",
          fontSize: "1.25rem",
          marginTop: 2,
        }}
      >
        {testimonial.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "12px 16px",
          borderLeft: "1px solid #374151",
          maxWidth: "400px",
          marginTop: 3,
          marginLeft: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
          {testimonial.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#555" }}>
          {`${testimonial.designation} ${
            testimonial.employer ? `@ ${testimonial.employer}` : ""
          } - ${testimonial.association} `}
        </Typography>
      </Box>
    </Box>
  </Box>
);

type Props = {
  data: TestimonialProps[];
  title: any;
};

const HighlightText = (text: string) => {
  if (text?.length > 0) {
    const words = text.split(" ");
    const firstPart = words.slice(0, 2).join(" ");
    const middlePart = words[2];
    const lastPart = words.slice(3).join(" ");

    return (
      <p>
        {firstPart}
        <span style={{ color: "#08547A" }}> {middlePart} </span>
        {lastPart}
      </p>
    );
  } else {
    return "";
  }
};

const TestimonialSection = ({ data, title }: Props) => (
  <Box sx={{ mt: 5, mb: 10, width: "80vw" }}>
    <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
      {title || HighlightText(title)}
    </Typography>
    {data.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} index={index} />
    ))}
  </Box>
);

export default TestimonialSection;
