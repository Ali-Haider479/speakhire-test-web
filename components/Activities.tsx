"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

interface CarouselItemProps {
  active?: boolean;
  custom_position: "top" | "middle" | "bottom";
}
const CarouselContainer = styled(Box)({
  position: "relative",
  height: "80vh", // Increased from 600px to accommodate the spacing
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  borderRadius: "24px",
  backgroundColor: "#f0f7ff",
  padding: "10px",
});

const CarouselImage = styled("img")({
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
  transition: "all 0.5s ease",
});

const CarouselItem = styled(Box)<CarouselItemProps>(
  ({ active, custom_position }) => ({
    position: "absolute", // MUI's position property
    left: 0,
    right: 0,
    transition: "all 0.5s ease",
    transform: `translateY(${
      custom_position === "top"
        ? "-105%"
        : custom_position === "bottom"
        ? "105%"
        : "0"
    })`,
    scale: 1,
    opacity: active ? 1 : 0.6,
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "16px",
      transition: "all 0.5s ease",
    },
  })
);

const StyledCheckIcon = styled(CheckCircleOutlineIcon)({
  color: "#0066cc",
  fontSize: "28px",
});

const ViewButton = styled(Button)({
  borderRadius: "20px",
  padding: "8px 18px",
  textTransform: "none",
  border: "1px solid #0066cc",
  color: "#0066cc",
  "&:hover": {
    backgroundColor: "#0066cc",
    color: "white",
  },
});

interface ActivitiesSectionProps {
  data: {
    title: string;
    outcomes: any[];
    carousel_images: any[];
  };
}

const ActivitiesSection = ({ data }: ActivitiesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const carouselImages: CarouselImage[] = [
    { id: 1, src: "/stock1.jpg", alt: "Img" },
    { id: 2, src: "/stock2.jpg", alt: "Img" },
    { id: 3, src: "/stock1.jpg", alt: "Img" },
    { id: 4, src: "/stock2.jpg", alt: "Img" },
    { id: 5, src: "/stock1.jpg", alt: "Img" },
    { id: 6, src: "/stock2.jpg", alt: "Img" },
  ];

  const activities = [
    "develop a network of culturally responsive peers and champions",
    "gain internship experience and learn career and leadership skills",
    "get a head start on the college and career process",
    "develop social-emotional skills and improve academic performance",
    "develop social-emotional skills and improve academic performance",
    "possess more self-agency",
    "help uplift communities",
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 8,
          px: "10%",
          p: { xs: 2, md: 8 },
          flexDirection: { xs: "column", md: "row" },
          width: "80vw",
        }}
      >
        {/* Left Column */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
            {data.title}
          </Typography>

          <List sx={{ mb: 4 }}>
            {data?.outcomes.map((activity, index) => (
              <ListItem key={index} sx={{ p: 0, m: 0, py: 0.5 }}>
                <ListItemIcon>
                  <img src="/checkBadge.svg" alt="checked List item" />
                </ListItemIcon>
                <ListItemText
                  primary={activity.description}
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "1.1rem",
                      color: "#333",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <ViewButton variant="outlined">View our activities</ViewButton>
        </Box>

        {/* Right Column - Carousel */}
        <Box sx={{ flex: 1 }}>
          <CarouselContainer>
            {data.carousel_images.map((image, index) => {
              let custom_position: "top" | "middle" | "bottom" = "middle";
              const diff =
                (index - activeIndex + data.carousel_images.length) %
                data.carousel_images.length;

              if (diff === data.carousel_images.length - 1)
                custom_position = "top";
              else if (diff === 1) custom_position = "bottom";
              else if (diff !== 0) return null;

              return (
                <CarouselItem
                  key={image.id}
                  active={index === activeIndex}
                  custom_position={custom_position} // Updated here
                  onClick={() => handleImageClick(index)}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <CarouselImage
                    src={process.env.NEXT_PUBLIC_STRAPI_URL + image.source.url}
                    alt={image.alt}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivitiesSection;
