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
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { CloseFullscreen, LinkedIn, YouTube } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SpeakhireLogo from "@/public/speakhire-logo.png";
import Footer from "@/components/Footer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

interface NavbarProps{
  data:{
    header_buttons:any[],
    header_icon_buttons:any[],
    header_links:any[],
    activities_links:any[]
  }
}


function Navbar({data}:NavbarProps) {
  console.log("Navbar Data",data)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {/* Activities Dropdown */}
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Activities" />
            <ArrowDropDownIcon />
          </ListItemButton>
        </ListItem>
        {mobileOpen && (
          <Menu
            id="activities-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              ml: 6.5,
              borderRadius: 2,
              boxShadow: 3,
              "& .MuiMenuItem-root": {
                paddingY: 1.5,
                "&:hover": { backgroundColor: "#f0f0f0" },
                "&:active": { backgroundColor: "#e0e0e0" },
              },
            }}
          >
            <MenuItem component={Link} href="/activities">
              Speakhire Series
            </MenuItem>
            <MenuItem component={Link} href="/activities/first-step">
              First Step
            </MenuItem>
            <MenuItem component={Link} href="/activities/foundational-year">
              Foundational Year
            </MenuItem>
            <MenuItem component={Link} href="/activities/leadership-courses">
              Leadership Courses
            </MenuItem>
          </Menu>
        )}

        {/* Other Links */}
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/about">
            <ListItemText primary="About us" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/contact">
            <ListItemText primary="Contact us" />
          </ListItemButton>
        </ListItem>

        <Divider />

        {/* Social Icons */}
        <ListItem sx={{ justifyContent: "center", gap: 2 }}>
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
        </ListItem>

        {/* Buttons */}
        <ListItem>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#08547A",
              color: "white",
              borderRadius: 5,
              mb: 1,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Button>
        </ListItem>
        <ListItem>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#92DB37",
              color: "black",
              borderRadius: 5,
              boxShadow: "none",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={() => router.replace("/donate")}
          >
            Donate
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F2FAFD",
          boxShadow: "none",
          padding: "8px 20px",
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
              marginLeft: { xs: 0, md: "100px" },
            }}
          >
            <Link href="/">
              <Image
                src={SpeakhireLogo}
                alt="Speakhire Logo"
                width={150}
                height={40}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "48px",
                marginRight: "100px",
              }}
            >
              {/* Navigation Links */}
              <Box
                sx={{
                  backgroundColor: "#DBF2FA",
                  borderRadius: "9999px",
                  paddingX: "12px",
                  paddingY: "6px",
                  display: "flex",
                  gap: "24px",
                }}
              >
                {/* Activities Link & Dropdown */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
                  sx={{ borderRadius: 10, overflow: "hidden" }}
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
                      href="/activities/foundational-year"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Foundational Year
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
                <IconButton
                  sx={{ border: "1px solid #08547A", borderRadius: 5 }}
                >
                  <Image
                    src="/youtube-icon.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                  />
                </IconButton>
                <IconButton
                  sx={{ border: "1px solid #08547A", borderRadius: 5 }}
                >
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
                  onClick={() => router.replace("/donate")}
                >
                  Donate
                </Button>
              </Box>
            </Box>
          ) : (
            // Mobile Hamburger Menu Button
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ color: "#08547A" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
