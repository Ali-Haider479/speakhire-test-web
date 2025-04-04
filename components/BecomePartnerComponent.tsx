import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BecomePartnerComponentProps {
  data: {
    title: string;
    description: string;
    cover_image: any;
    button: any;
  };
}

export default function BecomePartnerComponent({
  data,
}: BecomePartnerComponentProps) {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words.slice(0, 3).join(" ");
      const secondPart = words.slice(3).join(" ");

      return (
        <>
          <span style={{ color: "#0F99C3" }}>{firstPart}</span>
          {` ${secondPart}`}
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        width: "80vw", // Adjusted for better scaling
        height: { xs: "auto", md: "586px" }, // Flexible height for smaller screens
        borderRadius: "40px",
        backgroundColor: "#E6F2F9",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        my: 10,
        flexDirection: { xs: "column-reverse", md: "row" }, // Fix for mobile stacking
        overflow: "hidden", // Prevents layout break on small devices
      }}
    >
      {/* Text Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "40%" },
          backgroundColor: "#E6F2F9",
          borderRadius: "20px",
          padding: { xs: 3, md: 5 }, // Improved padding for better spacing
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: {xs:"center",md:"flex-start"},
          textAlign: { xs: "center", md: "left" }, // Center text on mobile
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 400,
            marginBottom: 2,
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          {HighlightText(data?.title)}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            fontSize: { xs: 14, md: 20 },
          }}
        >
          {data?.description}
        </Typography>

        <Link href={"/partner"} passHref>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0D5C75",
              borderRadius: "20px",
              padding: "10px 30px",
              "&:hover": { bgcolor: "#0A4A5E" },
              marginTop: 2,
              textTransform: "none",
              fontWeight: "bold",
              fontSize: { xs: 12, md: 16 },
              width:{xs:"100%"}
            }}
          >
            {data?.button?.inner_text}
          </Button>
        </Link>
      </Box>

      {/* Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          position: "relative",
          height: { xs: "250px", md: "100%" }, // Scales down for mobile
        }}
      >
        <Image
          src="/stock2.jpg"
          alt="partner-image"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "40px" , // Smaller border-radius on mobile
          }}
        />
      </Box>
    </Box>
  );
}
