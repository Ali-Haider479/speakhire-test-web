"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled ListItem for better responsiveness
const StyledListItem = styled(ListItem)<{ active: boolean }>(
  ({ theme, active }) => ({
    borderRadius: 50,
    marginBottom: theme.spacing(2),
    backgroundColor: active ? theme.palette.primary.main : "#ECF6FB",
    color: active
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary.main
        : theme.palette.action.hover,
    },
    transition: theme.transitions.create(["background-color", "color"], {
      duration: theme.transitions.duration.standard,
    }),
  })
);

interface BoardMember {
  message: string;
  name: string;
  designation: string;
  photo: any;
}

interface MemberBoardProps {
  title: string;
  subtitle?: string;
  members: BoardMember[];
}

const MemberBoard: React.FC<MemberBoardProps> = ({
  title,
  subtitle,
  members,
}) => {
  const [activeMember, setActiveMember] = useState<number>(0);

  const handleMemberClick = (index: number) => setActiveMember(index);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev !== members.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [members.length]);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F2FAFD",
        padding: { xs: 2, sm: 4 },
        position: "relative",
      }}
    >
      <Box sx={{ width: "80vw", margin: "0 auto" }}>
        <Box sx={{ mb: 4, textAlign: "left" }}>
          <Typography variant={"h3"} gutterBottom>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="subtitle1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>

        <Grid container spacing={4} alignItems="flex-start">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 6,
                overflow: "hidden",
                transition: "all 0.5s ease",
                backgroundColor: "#ECF6FB",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, md: 400 },
                }}
              >
                {members.map((member, idx) => (
                  <Box
                    key={idx}
                    component="img"
                    src={
                      member?.photo?.source?.url
                        ? process.env.NEXT_PUBLIC_STRAPI_URL +
                          member?.photo?.source?.url
                        : null
                    }
                    alt={member.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: idx === activeMember ? 1 : 0,
                      transition: "opacity 0.8s ease-in-out",
                    }}
                  />
                ))}
              </Box>
              <CardContent sx={{textAlign:"justify"}}>{members[activeMember].message}</CardContent>
            </Card>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            {members.map((member, index) => (
              <StyledListItem
                key={index}
                active={index === activeMember}
                onClick={() => handleMemberClick(index)}
              >
                <ListItemAvatar>
                  <Avatar
                    src={
                      member.photo?.source?.url
                        ? process.env.NEXT_PUBLIC_STRAPI_URL +
                          member.photo.source.url
                        : null
                    }
                    alt={member.name}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color: index === activeMember ? "white" : "inherit",
                      }}
                    >
                      {member.name}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      sx={{
                        color:
                          index === activeMember
                            ? "rgba(255, 255, 255, 0.7)"
                            : "text.secondary",
                      }}
                    >
                      {member.designation}
                    </Typography>
                  }
                />
              </StyledListItem>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MemberBoard;
