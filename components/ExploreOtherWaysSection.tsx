import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const icons = [
  {
    icon: "./joinTeam.svg",
  },
  {
    icon: "./companyMatch.svg",
  },
  {
    icon: "./champion.svg",
  },
  {
    icon: "./user.svg",
  },
];

interface ExploreOtherWaysSectionProps {
  data: {
    title: string;
    contribute_card: any[];
  };
}

const ExploreOtherWaysSection = ({ data }: ExploreOtherWaysSectionProps) => {
  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 1).join(" ");
    const highlightedWord = words.slice(1,3).join(" ");
    const restOfWords = words.slice(3).join(" ");

    return (
      <p>
        {firstWords}{" "}
        <span style={{ color: "#6AAA19" }}>{highlightedWord}</span>{" "}
        {restOfWords}
      </p>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mt: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">
        {HighlightText(data.title)}
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1-column on small screens, 2-columns on larger
          gap: 3, // Spacing between cards
          p: 3, // Padding for the whole section
          width: "80vw",
          key: "contribute_card",
        }}
      >
        {data.contribute_card.map((item: any, index: number) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#F2FAFD",
              borderRadius: 5,
              p: 4,
              height: "100%", // Ensures uniform height for all cards
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            {/* Icon at the top */}
            <Box
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: "50%",
                mb: 2, // Space below the icon
                key: index,
              }}
            >
              <Image
                src={icons[index].icon}
                alt={item.title}
                width={60}
                height={60}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 50,
                  padding: 15,
                }}
              />
            </Box>

            {/* Title and Description */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {item.description}
            </Typography>

            {/* Button at the bottom */}
            <Button
              variant="outlined"
              sx={{
                alignSelf: "flex-start",
                borderColor: "#08547A",
                color: "#08547A",
                borderRadius: 5,
                textTransform: "none",
              }}
            >
              {item.button.inner_text}
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreOtherWaysSection;
