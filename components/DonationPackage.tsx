import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

type Packages = {
  title: string;
  price: string;
  descriptionHrs: string;
  description: string;
  buttonText: string;
};

const Packages = [
  {
    title: "Change trendsetter",
    price: "$15,000",
    descriptionHrs: `270 Hours`,
    description:
      "Speakhire envisions a future where education empowers immigrants to thrive.",
    buttonText: "Join as a trendsetter",
  },
  {
    title: "Change Leader",
    price: "$20,000",
    descriptionHrs: `405 Hours`,
    description:
      "Speakhire envisions a future where education empowers immigrants to thrive.",
    buttonText: "Lead the change",
  },
  {
    title: "Change Visionary",
    price: "$30,000",
    descriptionHrs: "675 Hours",
    description:
      "Speakhire envisions a future where education empowers immigrants to thrive.",
    buttonText: "Join as a visionary",
  },
  {
    title: "Change Agent",
    price: "$5,000",
    descriptionHrs: `20 Hours`,
    description:
      "Speakhire envisions a future where education empowers immigrants to thrive.",
    buttonText: "Become a agent",
  },
];

const DonationPackage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "60vw", mb: 3, justifyItems: "center" }}>
        <Typography variant="h3">
          Empower change with&nbsp;
          <span style={{ color: "#0F99C3" }}>corporate plans</span>
          &nbsp;for driving impact
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F2FAFD",
            borderRadius: "10px",
            padding: "4px",
            width: "fit-content",
            mt: 2,
          }}
        >
          {/* Left Side - Individual Donor */}
          <Typography sx={{ px: 2, fontWeight: 500, color: "#000" }}>
            Individual donor
          </Typography>

          {/* Right Side - Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0A4E71",
              color: "#FFF",
              borderRadius: "10px",
              textTransform: "none",
              px: 3,
              "&:hover": { backgroundColor: "#083F5A" },
            }}
          >
            Become a corporate donor
          </Button>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", gap: 2, textAlign: "left" }}
      >
        {Packages.map((item: Packages, index: number) => (
          <Card
            key={index} // Ensure unique keys for React
            sx={{
              p: 3,
              width: "16vw",
              height: "60vh",
              borderRadius: 5,
              backgroundColor: "#F2FAFD",
              display: "flex",
              flexDirection: "column",
              transition: "background-color 0.2s, color 0.2s", // Smooth hover effect
              ":active": {
                backgroundColor: "#08547A",
                color: "#FFFFFF",
              },
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                {item.title}
              </Typography>
              <Divider />

              <Typography
                variant="h3"
                sx={{
                  color: "#08547A",
                  pt: 2,
                  cursor: "pointer",
                  ":active": { color: "#FFFFFF" },
                }}
              >
                {item.price}
              </Typography>

              <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
                Provide&nbsp;
                <Typography component="span" sx={{ color: "#0F99C3" }}>
                  {item.descriptionHrs}
                </Typography>
                &nbsp;of career counselling
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Box>

            {/* Button at the bottom */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: 10,
                backgroundColor: "#08547A",
                transition: "background-color 0.2s, color 0.2s", // Smooth effect
                ":active": { backgroundColor: "#FFFFFF", color: "#08547A" },
                textTransform: "none",
              }}
            >
              <Typography >{item.buttonText}</Typography>
            </Button>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          borderRadius: 5,
          width: "67vw",
          mt: 5,
          p: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center", // Ensures vertical alignment
        }}
      >
        {/* Left Side - Text */}
        <Box sx={{ width: "50%", textAlign: "left" }}>
          <Typography variant="h4">Together for a Better Tomorrow</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Your generosity today can change lives tomorrow. Together, we can
            reach our goal of developing future leaders.
          </Typography>
        </Box>

        {/* Right Side - Buttons */}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "flex-end",
            mt: "auto",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#08547A",
              color: "#08547A",
              borderRadius: 5,
              textTransform: "none", // Makes it look more natural
            }}
          >
            <Typography variant="body1">Explore Partnership Guide</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
              backgroundColor: "#08547A",
              color: "white",
              borderRadius: 5,
              textTransform: "none",
            }}
          >
            <Typography variant="body1">Become a Sponsor</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DonationPackage;
