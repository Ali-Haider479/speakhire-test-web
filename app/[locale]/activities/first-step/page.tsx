import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

async function getData() {
  try {
    const firstStepApiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/first-step?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }
    );

    if (!firstStepApiRes.ok) throw new Error("Failed to fetch data");

    const firstStepData = await firstStepApiRes.json();
    return { ...firstStepData?.data };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const firstStepPage = async () => {
  const firstStepPageRes = await getData();
  const data = firstStepPageRes;

  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 2).join(" ");
    const highlightedWord = words[2];
    const restOfWords = words.slice(3).join(" ");

    return (
      <>
        {firstWords} <span style={{ color: "#0F99C3" }}>{highlightedWord}</span>{" "}
        {restOfWords}
      </>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Banner Section */}
      <Box
        sx={{
          padding: { xs: "60px 15px", md: "100px 20px" },
          backgroundColor: "#F2FAFD",
          textAlign: "center",
          height: { xs: "auto", md: "353px" },
          width: "100vw",
        }}
      >
        <Typography variant="body1" component="div">
          <Box component="span" sx={{ mr: 1 }}>
            <a href="/" style={{ color: "#0B72B9", textDecoration: "none" }}>
              Home
            </a>
          </Box>
          /
          <Box component="span" sx={{ ml: 1, color: "#666" }}>
            Activities
          </Box>
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 400,
            marginBottom: "16px",
            lineHeight: "1.2",
            paddingTop: "2vh",
          }}
        >
          <span style={{ color: "#0F99C3" }}>First </span>
          Step
        </Typography>

        <Button
          variant="outlined"
          color="primary"
          sx={{
            color: "#006397",
            borderColor: "#006397",
            borderRadius: 5,
            padding: { xs: "8px 20px", md: "10px 30px" },
            "&:hover": {
              backgroundColor: "#064067 !important",
              color: "white !important",
            },
          }}
          endIcon={
            <Image
              src="/link.svg"
              alt="Link Icon"
              width={20}
              height={20}
              style={{ transition: "filter 0.3s ease" }}
            />
          }
        >
          <Typography
            variant="body1"
            sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
          >
            Partner Interest Form
          </Typography>
        </Button>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "40px 10px", md: "80px" },
          gap: { xs: 4, md: 10 },
          width: { xs: "90vw", md: "100vw" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e1f7ff",
            borderRadius: { xs: "24px", md: "40px" },
            padding: { xs: "30px", md: "40px" },
            maxWidth: { xs: "100%", md: "32rem" },
            textAlign: "left",
            height: { xs: "auto", md: 506 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            {HighlightText(data.title)}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#374151",
              marginBottom: "24px",
              lineHeight: "1.5",
              fontSize: { xs: "1rem", md: "1.28rem" },
              marginTop: 1,
            }}
          >
            {data.description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src="/checkBadge.svg"
              alt="checkBadge"
              width={24}
              height={24}
            />
            <Typography variant="body2">{data.highlight}</Typography>
          </Box>
        </Box>

        {/* Image Section */}
        <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: 720 } }}>
          <Image
            height={506}
            width={720}
            alt={data.cover_image.alternate_text || "First Step image"}
            src={data.cover_image?.source?.url}
            style={{
              borderRadius: "30px",
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default firstStepPage;
