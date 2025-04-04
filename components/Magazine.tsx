"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

// Interface for magazine data
// interface MagazineCover {
//   id: number;
//   imageUrl: string;
//   title: string;
//   date: string;
//   issueNumber: string;
// }

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  borderRadius: "12px",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: theme.shadows[8],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: "auto",
  width: "100%",
  objectFit: "cover",
}) as typeof CardMedia;

const ViewAllButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1, 2),
  borderRadius: "25px",
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

interface MagazineSectionProps {
  data: {
    title: string;
    description: string;
    magazines: any[];
  };
}

const MagazineSection = ({ data }: MagazineSectionProps) => {
  return (
    <Box sx={{ py: 6, px: "10%" }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          mb: 2,
          fontWeight: 500,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {data.title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: "#42474E",
          fontSize: { xs: "1.2rem", md: "1.5rem" },
        }}
      >
        {data.description}
      </Typography>

      <Grid container spacing={3}>
        {data.magazines.map((magazine) => (
          <Grid item xs={12} sm={6} md={3} key={magazine.id}>
            <StyledCard>
              <StyledCardMedia
                component={"img" as const}
                image={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  magazine.cover_image.source.url
                }
                alt={`${magazine.title}`}
                onClick={() =>
                  window.open(
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                      magazine.cover_image.source.url,
                    "_blank"
                  )
                }
                sx={{ cursor: "pointer" }}
              />
              {/* <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                }}
              >
                <Typography variant="subtitle2" component="div">
                  {magazine.date}
                </Typography>
                <Typography variant="caption" component="div">
                  {magazine.issueNumber}
                </Typography>
                <Typography variant="h6" component="div">
                  {magazine.title}
                </Typography>
              </CardContent> */}
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewAllButton variant="outlined">
          View all SPEAKHIRE Magazines
        </ViewAllButton>
      </Box>
    </Box>
  );
};

export default MagazineSection;
