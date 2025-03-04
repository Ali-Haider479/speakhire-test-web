"use client";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const InternshipOutcomesSection = () => {
  const activities = [
    "positive identity development and goal setting ",
    "increased school engagement and belonging",
    "increased self-efficiency",
    "access to social capital and opportunities",
    "social and workplace skills gains for students",
    "make schools more inclusive",
    "complete your own resume with skills and experiences gained from the internship year.",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        px: "10%",
        p: { xs: 2, md: 8 },
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left Column */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
          <span style={{ color: "#0F99C3" }}>Outcomes </span>
          of this program
        </Typography>

        <List sx={{ mb: 4 }}>
          {activities.map((activity, index) => (
            <ListItem key={index} sx={{ pb: 2 }}>
              <ListItemIcon>
                <Image src={"/checkBadge.svg"} alt="" width={24} height={24} />
              </ListItemIcon>
              <ListItemText
                primary={activity}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1.1rem",
                    color: "#333",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Button style={{marginBottom:10,color:"#08547A", borderRadius:"50px", borderColor:"#08547A"}} variant="outlined" endIcon={<Image src={"/link.svg"} alt="" width={24} height={24} />}>Partner Interest Form</Button>
        <Button style={{marginBottom:10, marginLeft:10, color:"#08547A",borderRadius:"50px", borderColor:"#08547A"}} variant="outlined" endIcon={<Image src={"/link.svg"} alt="" width={24} height={24} />}>Intern Application</Button>
      </Box>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#F2FAFD", // Light blue background from the image
          padding: 3,
          borderRadius: "20px",
        }}>
         <Image src={"/10.png"} alt="" width={620} height={306} style={{borderRadius:24}} />
         <Image src={"/internship.png"} alt="" width={620} height={306} style={{borderRadius:24, aspectRatio:16/9}} />
      </Box>
    </Box>
  );
};

export default InternshipOutcomesSection;
