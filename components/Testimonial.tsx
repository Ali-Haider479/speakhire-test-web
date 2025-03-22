"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

interface TestimonialProps {
  textOnLeft: boolean;
  statement: string;
  personName: string;
  designation: string;
  videoUrl: string;
  duration?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  textOnLeft = true,
  statement,
  personName,
  designation,
  videoUrl,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [playVideo, setPlayVideo] = useState(false);

  // Create text section
  const TextSection = () => (
    <Box
      sx={{
        backgroundColor: "#e6f4f9",
        height: "auto", // Change this to a fixed height if needed
        minHeight: "508px", // Add this line to increase height
        maxWidth: "90%", // Add this to reduce width
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 4,
        borderRadius: "25px",
        margin: "1rem auto", // Center it and add vertical margin
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 600,
          mb: 6,
          mt:5
        }}
      >
        {statement}
      </Typography>

      <Box sx={{ borderLeft: "4px solid #3d7d98", pl: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 400,
          }}
        >
          {personName}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' }}
        >
          {designation}
        </Typography>
      </Box>
    </Box>
  );

  // Create video section
  // Create video section
  const VideoSection = () => (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "400px",
        borderRadius: "16px",
        overflow: "hidden",
        margin: "1rem auto",
      }}
    >
      {/* <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          height: '100%', 
          width: '100%',
          minHeight: '400px',
          borderRadius: '16px'
        }}
      /> */}
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_URL + videoUrl}
        alt="Testimonial media"
        layout="responsive"
        objectFit="cover"
        width={16}
        height={9}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 3 },
        backgroundColor: "white",
        borderRadius: "24px",
        width:"100%"
      }}
    >
      {isMobile ? (
        <Grid container direction="column">
          {textOnLeft ? (
            <>
              <Grid item xs={10}>
                <TextSection />
              </Grid>
              <Grid item xs={10}>
                <VideoSection />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={10}>
                <VideoSection />
              </Grid>
              <Grid item xs={10}>
                <TextSection />
              </Grid>
            </>
          )}
        </Grid>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: textOnLeft ? 1 : 2 }}>
            <TextSection />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 2, md: textOnLeft ? 2 : 1 }}>
            <VideoSection />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Testimonial;
