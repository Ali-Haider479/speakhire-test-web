"use client";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Box,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import { LinkedIn, YouTube } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SpeakhireLogo from "@/public/speakhire-logo.png";
import Footer from "@/components/Footer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#F2FAFD",
        boxShadow: "none",
        padding: "8px 20px", // Equivalent to !p-2
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "100px", // Equivalent to ml-20
          }}
        >
          <Link href="/">
            <Image
              src={SpeakhireLogo}
              alt="SpeakHire Logo"
              width={150}
              height={40}
            />
          </Link>
        </Box>

        {/* Navigation Links and Social Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "48px", // Space between navigation links and social icons
            marginRight: "100px", // Equivalent to mr-20
          }}
        >
          {/* Navigation Links */}
          <Box
            sx={{
              backgroundColor: "#DBF2FA",
              borderRadius: "9999px", // Equivalent to rounded-full
              paddingX: "12px", // Equivalent to px-6
              paddingY: "6px", // Equivalent to py-2
              display: "flex",
              gap: "24px", // Equivalent to space-x-6
            }}
          >
            {/* Activities Link & Dropdown */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Main Link (Navigates directly) */}

              <Button
                sx={{
                  textTransform: "none",
                  color: "#0C111D",
                  paddingX: "8px",
                  borderRadius: 5,
                  "&:hover": { backgroundColor: "#A3E1F8" },
                }}
                onClick={handleClick}
              >
                <Typography variant="body1" fontWeight={400} fontSize={15}>
                  Activities
                </Typography>
                <ArrowDropDownIcon />
              </Button>
            </Box>

            {/* Dropdown Menu */}
            <Menu
              id="activities-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  href="/activities"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Speakhire Series
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/activities/first-step"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  First Step
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/activities/foundation-year"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Foundation Year
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  href="/activities/leadership-courses"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Leadership Courses
                </Link>
              </MenuItem>
            </Menu>

            {/* Other Links */}
            <Link href="/about">
              <Button
                sx={{
                  textTransform: "none",
                  color: "black",
                  borderRadius: 5,
                  "&:hover": { backgroundColor: "#A3E1F8" },
                }}
              >
                <Typography variant="body1" fontWeight={400} fontSize={15}>
                  About us
                </Typography>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                sx={{
                  textTransform: "none",
                  color: "black",
                  borderRadius: 5,
                  "&:hover": { backgroundColor: "#A3E1F8" },
                }}
              >
                <Typography variant="body1" fontWeight={400} fontSize={15}>
                  Contact us
                </Typography>
              </Button>
            </Link>
          </Box>

          {/* Social Icons and Buttons */}
          <Box sx={{ display: "flex", gap: "16px" }}>
            <IconButton sx={{ border: "1px solid #08547A", borderRadius: 5 }}>
              <Image
                src="/youtube-icon.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton sx={{ border: "1px solid #08547A", borderRadius: 5 }}>
              <Image
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#08547A",
                color: "white",
                paddingX: "24px",
                borderRadius: 5,
                boxShadow: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#064067",
                },
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#92DB37",
                color: "black",
                paddingX: "24px",
                borderRadius: 5,
                boxShadow: "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: "#7dbb30",
                },
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Donate
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
