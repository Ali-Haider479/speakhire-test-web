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
import React from "react";
import Image from "next/image";

interface InternshipOutcomesSectionProps {
  data: {
    title: string;
    outcomes: any[];
    carousel_images: any[];
  };
}

const InternshipOutcomesSection = ({
  data,
}: InternshipOutcomesSectionProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words[0];
      const lastPart = words.slice(1).join(" ");

      return (
        <p>
          
          <span style={{ color: "#0F99C3" }}>{firstPart} </span>
          {lastPart}
        </p>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        // px: "8%",
        p: { xs: 2, md: 8 },
        flexDirection: { xs: "column", md: "row" },
        width: "80vw",
      }}
    >
      {/* Left Column */}
      <Grid item xs={12} md={6}>
      <Box sx={{ flex: 1}}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal",}}>
          {HighlightText(data.title)}
        </Typography>

        <List sx={{ mb: 4 }}>
          {data.outcomes.map((activity, index) => (
            <ListItem key={index} sx={{ pb: 2 }}>
              <ListItemIcon>
                <Image src={"/checkBadge.svg"} alt="" width={24} height={24} />
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
            marginBottom: 10,
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
          style={{
            marginBottom: 10,
            marginLeft: 10,
            color: "#08547A",
            borderRadius: "50px",
            borderColor: "#08547A",
            textTransform: "none",
          }}
          variant="outlined"
          endIcon={<Image src={"/link.svg"} alt="" width={16} height={16} />}
        >
          Intern Application
        </Button>
      </Box>
      </Grid>
      <Grid item xs={12} md={6}>
      <Box
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
      </Box>
      </Grid>
    </Box>
  );
};

export default InternshipOutcomesSection;
