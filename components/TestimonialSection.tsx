import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

type TestimonialProps = {
  title: string;
  note: string;
  Name: string;
  designation: string;
  image: string;
  isImageLeft?: boolean;
  isTextRightAligned?: boolean;
};

type TestimonialCardProps = {
  testimonial: TestimonialProps;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: testimonial.isImageLeft ? "row" : "row-reverse",
      alignItems: "center",
      gap: 4,
      marginTop: 5,
      textAlign: "left",
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Image src={testimonial.image} alt="" height={506} width={720} />
    </Box>

    <Box
      sx={{
        backgroundColor: "#e1f7ff",
        borderRadius: "40px",
        padding: { xs: "24px", md: "40px" },
        maxWidth: "32rem",
        height:"auto"
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 500, marginBottom: "16px", color: "#111827" }}>
        {testimonial.title}
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
        {testimonial.note}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "12px 16px",
          borderLeft: "1px solid #374151",
          maxWidth: "400px",
          marginTop: 5,
          marginLeft: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#222" }}>
          {testimonial.Name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#555" }}>
          {testimonial.designation}
        </Typography>
      </Box>
    </Box>
  </Box>
);

type Props = {
  data: TestimonialProps[];
  title: any;
};

const TestimonialSection = ({ data, title }: Props) => (
  <Box sx={{ mt: 5, mb: 10 }}>
    {title}
    {data.map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ))}
  </Box>
);

export default TestimonialSection;
