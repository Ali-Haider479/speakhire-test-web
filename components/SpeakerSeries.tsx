"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

// Speaker data type
interface Speaker {
  id: number;
  name: string;
  lastName: string;
  title: string;
  description: string;
  image: string;
  youtubeLink: string;
}

// Sample speaker data
const speakers: Speaker[] = [
  {
    id: 1,
    name: "CAROLINA",
    lastName: "JANNICELLI",
    title: "Leader | Entrepreneur",
    description:
      "Carolina shares how she found her voice and made sure to use it in order to find her place as a leader in an industry dominated by men.",
    image: "/stock1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    name: "DR. EDMUND",
    lastName: "ADJAPONG",
    title: "Leader | Entrepreneur",
    description:
      "Dr. Edmund Adjapong, a native of the Bronx, NY, is an assistant professor in the Education Studies Department at Seton Hall University.",
    image: "/stock2.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    name: "KIM",
    lastName: "LE",
    title: "Leader | Entrepreneur",
    description:
      "Kim escaped Vietnam as a refugee to becoming a successful entrepreneur, proving the American Dream is possible!",
    image: "/stock1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3",
  },
];

interface SpeakerSeriesProps {
  data: {
    title: string;
    description: string;
    leader_info_card: any[];
  };
}

const SpeakerSeries = ({ data }: SpeakerSeriesProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const lines = text.split(":");
      const words = lines[0].split(" ");
      const firstWord = words[0];
      const secondWord = words[1];
      const middlePart1 = words.slice(2, 3);
      const middleWord = words[3];
      const lastWords = lines[1];

      return (
        <>
          <p>
            {firstWord} <span style={{ color: "#0F99C3" }}>{secondWord}</span>{" "}
            {middlePart1}
            <span style={{ color: "#0F99C3" }}> {middleWord}</span>:
          </p>
          <p>{lastWords}</p>
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box sx={{ py: 5, width: "80vw" }}>
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 400,
          }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", maxWidth: "80vw", lineHeight: 1.6 }}
        >
          {data.description}
        </Typography>
      </Box>

      {/* Speaker Cards */}
      <Grid container spacing={3}>
        {data.leader_info_card.map((speaker) => (
          <Grid item xs={12} md={4} key={speaker.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 5,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "visible",
                bgcolor: "#f5f9fc",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={
                  speaker?.picture?.source?.url
                    ? process.env.NEXT_PUBLIC_STRAPI_URL +
                      speaker?.picture?.source?.url
                    : ""
                }
                alt={`${speaker.name}`}
                sx={{
                  objectFit: "cover",
                  borderTopRightRadius: 15,
                  borderTopLeftRadius: 15,
                }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  px: 3,
                  py: 3,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 400, fontSize: "1.4rem", mb: 0.5 }}
                >
                  {speaker.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {speaker.role}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: "1rem" }}>
                  {speaker.description}
                </Typography>
                <Box sx={{ mt: "auto" }}>
                  <Button
                    variant="outlined"
                    startIcon={<YouTubeIcon />}
                    sx={{
                      width: "100%",
                      borderRadius: "25px",
                      textTransform: "none",
                      fontSize: 16,
                      fontWeight: 400,
                      border: "1px solid #0097cc",
                      color: "#0097cc",
                    }}
                    href={speaker.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpeakerSeries;
