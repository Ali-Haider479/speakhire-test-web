"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  styled,
} from "@mui/material";
import Image from "next/image";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  date?: string;
  cover_image?: {
    source?: {
      url: string;
    };
    alternate_text?: string;
  };
  highlight?: string;
}

const StyledCard = styled(Card)({
  background: "transparent",
  boxShadow: "none",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
});

const ImageGroup = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
  marginBottom: "16px",
  "& img": {
    width: "calc(33.333% - 3px)",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "8px",
  },
});

const ImageContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "200px", 
  borderRadius: "12px",
  overflow: "hidden",
  "@media (max-width: 600px)": {
    height: "200px",
  },
});

const ViewAllButton = styled(Button)({
  borderRadius: "25px",
  padding: "8px 18px",
  border: "1px solid #1976d2",
  color: "#1976d2",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#1976d2",
    color: "white",
  },
});

interface NewsSectionProps {
  data: {
    title: string;
    description: string;
    news: NewsItem[];
  };
}

const NewsSection = ({ data }: NewsSectionProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#F2FAFD",
        py: 8,
        px: "10%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.75rem" },
          fontWeight: 400,
          mb: 2,
        }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#49454F",
          maxWidth: "900px",
          mb: 6,
          fontSize: "1.1rem",
          lineHeight: 1.6,
        }}
      >
        {data.description}
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {data?.news?.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <StyledCard>
              <ImageContainer>
                <Image
                  src={
                    item?.cover_image?.source?.url
                      ? process.env.NEXT_PUBLIC_STRAPI_URL +
                        item.cover_image.source.url
                      : "/api/placeholder/600/400"
                  }
                  alt={item?.cover_image?.alternate_text || "News Image"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </ImageContainer>
              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#1976d2",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    mb: 1,
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.highlight}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewAllButton variant="outlined">View all news</ViewAllButton>
      </Box>
    </Box>
  );
};

export { NewsSection as default };
