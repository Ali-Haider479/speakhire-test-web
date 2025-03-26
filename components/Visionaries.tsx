"use client";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import React, { useState } from "react";
import MemberBoard from "./MemberBoardComponent";

interface VisionariesComponentProps {
  data: {
    title: string;
    description: string;
    button: any;
    cover_image: any;
    team: any[];
    id: number;
  };
}

export default function VisionariesComponent({
  data,
}: VisionariesComponentProps) {
  const [showTeam, setShowTeam] = useState(false);
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWords = words.slice(1).join(" ");

      return (
        <>
          <span style={{ color: "#0F99C3" }}>{firstWord}</span> {lastWords}
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        width: "100vw", // Full viewport width
        backgroundColor: "#F2FAFD", // Light background color (you can adjust this to match your design, e.g., #ECF6FB or any other color)
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          borderRadius: "40px",
          backgroundColor: "#F2FAFD",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          my: {xs:3,md:8},
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "38%" },
            backgroundColor: "#F2FAFD",
            borderRadius: "20px",
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "100%",
            minHeight:{md:"500px"}
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              marginBottom: 1,
              fontSize: { xs: "28px", md: "36px" },
            }}
          >
            {HighlightText(data?.title)}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            {data?.description}
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "25px",
              textTransform: "none",
              padding: "8px 16px",
              borderColor: "##006397",
              color: "##006397",
              "&:hover": {
                borderColor: "#1565c0",
                backgroundColor: "rgba(25, 118, 210, 0.04)",
              },
              marginTop: "auto",
              fontSize: 16,
            }}
            onClick={() => setShowTeam(!showTeam)}
          >
            {data?.button?.inner_text}
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            position: "relative",
            height: "100%",
            minHeight: {xs:"300px",md:"500px"},
          }}
        >
          <Image
            src={
              data?.cover_image?.source.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL +
                  data?.cover_image?.source.url
                : ""
            }
            alt={data?.cover_image?.alternate_text}
            fill
            style={{ objectFit: "cover", borderRadius: "40px" }}
          />
        </Box>
      </Box>
      {showTeam && (
        <Box key={"team-section"}>
          {data.team.map((team: any,index:number) => (
            <>
              <MemberBoard title={team.title} members={team.team_members} />
              {index!==data.team.length-1 && <Divider sx={{ mt: 5, mb: 5, width: "100vw" }} />}
            </>
          ))}
        </Box>
      )}
      {/* {showTeam && (
        <Box key={"team-section"}>
          <MemberBoard
            title={data.team[0].title}
            members={data.team[0].team_members}
          />
        </Box>
      )} */}
    </Box>
  );
}
