"use client";
import {
  Box,
  Typography,
  Button,
  Container,
  styled,
  CardContent,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import TypeFormModal from "./TypeFormModal";
import CustomButton from "./CustomButton";

const BreadcrumbContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginBottom: '16px',
});

type FoundationYearSectionProps = {
  typeFormId: string;
};

function FoundationYearSection({ typeFormId }: FoundationYearSectionProps) {
  const [showTypeFormModal, setShowTypeFormModal] = useState(false);
  return (
    <Box
      sx={{
        padding: "100px 20px",
        backgroundColor: "#F2FAFD", // Light blue background from the image
        textAlign: "center",
        width: "100%",
        height: "353px",
      }}
    >
      <BreadcrumbContainer>
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
      </BreadcrumbContainer>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 400,
          marginBottom: { xs: "24px", md: "16px" },
          lineHeight: "1.2",
          paddingTop: "2vh",
        }}
      >
        <span style={{ color: "#0F99C3" }}>Foundational </span>
        Year
      </Typography>
      <CustomButton
        innerText={"Partner Interest Form"}
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
              filter: "brightness(0) invert(1)", // Turns icon to pure white
            },
          },
          fontSize: { xs: 14, md: 16 },
          fontWeight: "bold",
          textTransform: "none",
        }}
        variant="outlined"
        icon={<img src="/link.svg" width={20} height={20} />}
        linkUrl={true}
        typeFormId={typeFormId}
      />
    
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
              filter: "brightness(0) invert(1)", // Turns icon to pure white
            },
          },
          ml: { xs: 0, md: 2 },
          mt: { xs: 1.5, md: 0 },
          width: { xs: "225px", md: "auto" },
          textTransform: "none",
          fontSize: { xs: 14, md: 16 },
          fontWeight: "bold",
        }}
        endIcon={<img src="/link.svg" width={20} height={20} />}
      >
        Intern Application
      </Button>
      {/* <TypeFormModal
        open={showTypeFormModal}
        setOpen={setShowTypeFormModal}
        typeFormId={typeFormId}
      /> */}
    </Box>
  );
}

export default FoundationYearSection;
