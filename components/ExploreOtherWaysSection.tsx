import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const data = [
  {
    icon: "./joinTeam.svg",
    title: "Join Our Team",
    description:
      "We are always seeking passionate individuals to join our team and help us make a meaningful difference in the lives of others and the community.",
    buttonText: "Join Now",
  },
  {
    icon: "./companyMatch.svg",
    title: "Company Matching",
    description:
      "Encourage your company to double your impact and amplify change. Add SPEAKHIRE to your corporate donation matching program to help create more opportunities for those in need.",
    buttonText: "Match Now",
  },
  {
    icon: "./champion.svg",
    title: "Become a Champion",
    description:
      "We understand your busy schedule, which is why we’ve made career counseling easy to access, seamless, and adaptable to your personal needs.",
    buttonText: "Book Session",
  },
  {
    icon: "./user.svg",
    title: "Volunteer",
    description:
      "Looking to make a difference? We have numerous opportunities where your skills and support can have a lasting impact on our mission and the community we serve.",
    buttonText: "Became Volunteer",
  },
];

const ExploreOtherWaysSection = () => {
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
        Explore <span style={{ color: "#6AAA19" }}>other ways</span> to
        contribute
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1-column on small screens, 2-columns on larger
          gap: 3, // Spacing between cards
          p: 3, // Padding for the whole section
          width: "80vw",
        }}
      >
        {data.map((item: any, index: number) => (
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
              }}
            >
              <Image
                src={item.icon}
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
              {item.buttonText}
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ExploreOtherWaysSection;
