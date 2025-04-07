"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Typography,
} from "@mui/material";
import { title } from "process";
import React, { useState, useEffect, ReactNode } from "react";

type Packages = {
  description: string;
  hours: string;
  price: string;
  title: string;
  type: string;
  button: any;
};

type BetterTomorrowCard = {
  title: string;
  description: string;
  buttons: any[];
};

interface DonationPackageProps {
  data: {
    title: string;
    corporate_plan_card: Packages[];
    better_tomorrow_card: BetterTomorrowCard;
  };
}

const DonationPackage = ({ data }: DonationPackageProps) => {
  const [activeDonorType, setActiveDonorType] = useState("individual"); // Default to "individual"
  const [filteredPlans, setFilteredPlans] = useState<Packages[]>([]);

  const handleSwitch = (type: React.SetStateAction<string>) => {
    setActiveDonorType(type);
    const filteredPlansToShow = data.corporate_plan_card.filter(
      (item: Packages) => item.type === type + " donor"
    );
    setFilteredPlans(filteredPlansToShow);
  };

  useEffect(() => {
    const filteredPlansToShow = data.corporate_plan_card.filter(
      (item: Packages) => item.type === activeDonorType + " donor"
    );
    setFilteredPlans(filteredPlansToShow);
  }, [data.corporate_plan_card]);

  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 3).join(" ");
    const highlightedWord = words.slice(3, 5).join(" ");
    const restOfWords = words.slice(6).join(" ");

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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2, // Padding for smaller screens
      }}
    >
      {/* Title and Button Section */}
      <Box
        sx={{
          width: { xs: "80vw", md: "60vw" },
          mb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "1.75rem", md: "3rem" } }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F2FAFD",
            borderRadius: "10px",
            padding: "0px",
            width: "fit-content",
            mt: 2,
            overflow: "hidden", // Ensures buttons fit within the rounded container
            maxWidth: "80vw",
          }}
        >
          <Button
            aria-pressed={activeDonorType === "individual"}
            sx={{
              px: 2,
              fontWeight: 500,
              color: activeDonorType === "individual" ? "#FFF" : "#000",
              textTransform: "none",
              borderRadius: "10px 0 0 10px", // Left button has rounded left corners
              backgroundColor:
                activeDonorType === "individual" ? "#0A4E71" : "transparent",
              "&:hover": {
                backgroundColor:
                  activeDonorType === "individual" ? "#083F5A" : "#E0F0F5",
              },
              minWidth: "120px", // Ensure consistent width
            }}
            onClick={() => handleSwitch("individual")}
          >
            Individual donor
          </Button>

          <Button
            aria-pressed={activeDonorType === "corporate"}
            sx={{
              px: 3,
              fontWeight: 500,
              color: activeDonorType === "corporate" ? "#FFF" : "#000",
              textTransform: "none",
              borderRadius: "0 10px 10px 0", // Right button has rounded right corners
              backgroundColor:
                activeDonorType === "corporate" ? "#0A4E71" : "transparent",
              "&:hover": {
                backgroundColor:
                  activeDonorType === "corporate" ? "#083F5A" : "#E0F0F5",
              },
              minWidth: "180px", // Ensure consistent width
            }}
            onClick={() => handleSwitch("corporate")}
          >
            Become a corporate donor
          </Button>
        </Box>
      </Box>

      {/* Corporate Plan Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          textAlign: "left",
          justifyContent: "center",
        }}
      >
        {filteredPlans.map((item: Packages, index: number) => (
          <Card
            key={index}
            sx={{
              p: 3,
              width: { xs: "80vw", sm: "40vw", md: "18vw" },
              height: "auto",
              minHeight: "28vw",
              borderRadius: 5,
              backgroundColor: "#F2FAFD",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.2s ease",
              color: "inherit",
              "&:hover": {
                backgroundColor: "#08547A",
                color: "#FFFFFF",
                "& h3": { color: "#FFFFFF" },
                "& .MuiDivider-root": { borderColor: "#ffffff50" },
                "& .MuiButton-root": {
                  backgroundColor: "#FFFFFF",
                  color: "#08547A",
                  border: "1px solid #08547A",
                },
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {item.title}
              </Typography>
              <Divider sx={{ borderColor: "#08547A50" }} />

              <Typography
                variant="h3"
                sx={{
                  color: "#08547A",
                  pt: 2,
                  fontSize: { xs: "1.75rem", md: "2.5rem" },
                  transition: "color 0.2s",
                }}
              >
                {item.price}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  mb: 2,
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
                  transition: "color 0.2s",
                }}
              >
                Provide{" "}
                <Box
                  component="span"
                  className="hours-text"
                  sx={{
                    color: "#0F99C3",
                    fontSize: "inherit",
                    transition: "color 0.2s",
                  }}
                >
                  {`${item.hours} hours`}
                </Box>{" "}
                of career counselling
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.9rem", md: "1.25rem" },
                  transition: "color 0.2s",
                }}
              >
                {item.description}
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 10,
                backgroundColor: "#08547A",
                color: "#FFFFFF",
                transition: "all 0.2s",
                textTransform: "none",
                mt: 3,
                py: { xs: 1, md: 1.6 },
                fontSize: { xs: 14, md: 16 },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#08547A",
                },
              }}
            >
              {item?.button?.inner_text}
            </Button>
          </Card>
        ))}
      </Box>

      {/* Better Tomorrow Card */}
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          borderRadius: 5,
          width: { xs: "85vw", md: "75vw" }, // Responsive width
          mt: 5,
          p: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Vertical on small screens
          gap: 3,
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ width: { xs: "100%", md: "50%" }, textAlign: "left" }}>
          <Typography variant="h4">
            {data.better_tomorrow_card.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {data.better_tomorrow_card.description}
          </Typography>
        </Box>

        {/* Right Side - Buttons */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "row",
            gap: 2,
            mt: { xs: 3, md: "auto" },
          }}
        >
          {data.better_tomorrow_card.buttons.map((btn: any, index: number) => (
            <Button
              key={btn.inner_text}
              variant={index === 1 ? "contained" : "outlined"}
              sx={{
                borderColor: "#08547A",
                color: `${index === 1 ? "white" : "#08547A"}`,
                backgroundColor: `${index === 1 ? "#08547A" : ""}`,
                borderRadius: 5,
                textTransform: "none",
                fontSize: { xs: 14, md: 16 },
                alignSelf: "flex-end",
                ml: `${index === 1 ? "1" : "auto"}`,
                py: 1,
              }}
            >
              {btn.inner_text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DonationPackage;
