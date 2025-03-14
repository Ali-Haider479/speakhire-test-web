import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";

const page = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          padding: "100px 20px",
          backgroundColor: "#F2FAFD", // Light blue background from the image
          textAlign: "center",
          width: "100%",
          height: "353px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
        </Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "3rem",
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
            padding: "10px 30px",
            boxShadow: "none !important", // Removes default shadow
            transition: "all 0.3s ease-in-out", // Smooth hover effect
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
              backgroundColor: "#064067 !important", // Slightly darker blue on hover,
              color: "white !important",
              "& img": {
                filter: "brightness(0) invert(1)",  // Turns icon to pure white
              },
            },
          }}
          endIcon={
            <Image src="/link.svg" alt="Link Icon" width={20} height={20} style={{ transition: "filter 0.3s ease" }}/>
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e1f7ff",
            borderRadius: "40px",
            padding: { xs: "24px", md: "40px" },
            maxWidth: "32rem",
            textAlign: "left",
            height: 506,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 500,
              marginBottom: "16px",
              color: "#111827",
            }}
          >
            Navigating Your <span style={{ color: "#0F99C3" }}>Future </span>:
            Foundational Year Guidance
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#374151",
              marginBottom: "24px",
              lineHeight: "1.25",
              fontSize: "1.28rem",
              marginTop: 5,
            }}
          >
            4 sessions to support students who are looking to participate in the
            Foundational Year and ensure their success when meeting with Career
            Pathways Champions
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image src="/checkBadge.svg" alt="" width={24} height={24} />
            <Typography variant="body2">
              Sessions include: virtual professionalism, communication best
              practices, navigating tech tools, accountability
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginLeft: 10 }}>
          {/* <Image src={"/firstStep.svg"} alt={""}  /> */}
          <iframe
            height={506}
            width={720}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius: '30px'}}
          />
        </Box>
      </Box>
    </PageLayout>
  );
};

export default page;
