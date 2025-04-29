import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface PartnerMapsSectionProps {
  data: {
    countries_represented_title: string;
    countries_represented_map_image: any;
    presence_map_image: any;
    presence_title: string;
  };
}

const commonBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: { xs: "100%", md: "40vw" },
  height: { xs: "auto", md: "400px" },
  justifyContent: "center",
};

const PartnerMapsSection = async ({ data }: PartnerMapsSectionProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWords = words.slice(1).join(" ");

      return (
        <>
          <span style={{ color: "#08547A" }}>{firstWord}</span> {lastWords}
        </>
      );
    } else {
      return "";
    }
  };
  const presenceMapUrl =
    data?.presence_map_image?.source?.url ;
  const countriesMapUrl =
    data?.countries_represented_map_image?.source?.url 

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 8vw",
        backgroundColor: "#ffffff",
        flexDirection: { xs: "column", md: "row" },
        height: "auto",
        mt: {xs:1,md:8},
      }}
    >
      {/* Left Section: US Map */}
      <Box sx={commonBoxStyles}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: "20px",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "1.8rem" },
            color: "#49454F",
            width: { xs: "80%", md: "50%" },
          }}
        >
          {HighlightText(data.presence_title)}
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "400px", md: "650px" },
            height: "auto",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={`${presenceMapUrl}`}
            alt="US Map with Partner States"
            width={16}
            height={9}
            layout="responsive"
          />
        </Box>
      </Box>

      {/* Right Section: World Map */}
      <Box sx={{ ...commonBoxStyles, mt: { xs: 5, md: 0 } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            marginBottom: "20px",
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "1.8rem" },
            color: "#49454F",
          }}
        >
          {HighlightText(data.countries_represented_title)}
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "500px", md: "800px" },
            height: "auto",
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src={`${countriesMapUrl}`}
            alt="World Map with Represented Countries"
            width={16}
            height={9}
            layout="responsive"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerMapsSection;
