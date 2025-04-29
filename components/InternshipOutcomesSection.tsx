"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Button,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

interface InternshipOutcomesSectionProps {
  data: {
    title: string;
    outcomes: any[];
    carousel_images: any[];
  };
}

interface CarouselItemProps {
  active?: boolean;
  custom_position: "top" | "bottom";
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
  paddingX: "20px",
});

const CarouselImage = styled("img")({
  width: "100%",
  height: "400px",
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
        ? "-55%"
        : custom_position === "bottom"
        ? "55%"
        : "0"
    })`,
    scale: 1,
    opacity: 1,
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

const InternshipOutcomesSection = ({
  data,
}: InternshipOutcomesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words[0];
      const lastPart = words.slice(1).join(" ");

      return (
        <>
          <span style={{ color: "#0F99C3" }}>{firstPart} </span>
          {lastPart}
        </>
      );
    } else {
      return "";
    }
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 4, md: 8 },
        p: { xs: 1, md: 2.5 },
        flexDirection: { xs: "column", md: "row" },
        width: { xs: "90vw", md: "80vw" },
        mt: { xs: 5, md: 10 },
      }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={6}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "normal" }}>
            {HighlightText(data.title)}
          </Typography>

          <List sx={{ mb: 2 }}>
            {data.outcomes.map((activity, index) => (
              <ListItem key={index} sx={{ ml: 0, pl: 0 }}>
                <ListItemIcon>
                  <Image
                    src={"/checkBadge.svg"}
                    alt=""
                    width={24}
                    height={24}
                  />
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

          <Button
            style={{
              color: "#08547A",
              borderRadius: "50px",
              borderColor: "#08547A",
              textTransform: "none",
            }}
            variant="outlined"
            endIcon={<Image src={"/link.svg"} alt="" width={16} height={16} />}
          >
            Partner Interest Form
          </Button>
          <Button
            sx={{
              mt: { xs: 1, md: 0 },
              ml: { xs: 0, md: 2 },
              color: "#08547A",
              borderRadius: "50px",
              borderColor: "#08547A",
              textTransform: "none",
              width: { xs: "190px", md: "auto" },
            }}
            variant="outlined"
            endIcon={<Image src={"/link.svg"} alt="" width={16} height={16} />}
          >
            Intern Application
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            backgroundColor: "#F2FAFD", // Light blue background from the image
            padding: 3,
            borderRadius: "20px",
          }}
        >
          {data.carousel_images.map((item: any, index: number) => (
            <Image
              key={index} // Added key for React's list rendering
              src={
                item?.source?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.source.url}`
                  : "/fallback-image.png" // Improved UX with a fallback image
              }
              alt={item?.alternate_text || "Carousel Image"}
              layout="responsive" // Maintains aspect ratio automatically
              width={4} // Aspect ratio 16:9
              height={3} // Aspect ratio 16:9
              style={{
                borderRadius: 24,
                objectFit: "cover", // Ensures proper image scaling
              }}
            />
          ))}
        </Box> */}
        <Box sx={{ flex: 1, width: { xs: "100%", md: "35vw" } }}>
          <CarouselContainer>
            {data.carousel_images.map((image, index) => {
              let custom_position: "top" | "bottom" = "bottom";
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
                  <CarouselImage src={image.source.url} alt={image.alt} />
                </CarouselItem>
              );
            })}
          </CarouselContainer>
        </Box>
      </Grid>
    </Box>
  );
};

export default InternshipOutcomesSection;
