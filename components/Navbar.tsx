import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import { LinkedIn, YouTube } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SpeakhireLogo from "@/public/speakhire-logo.png";
import Footer from "@/components/Footer";

function Navbar() {
  return (
    <AppBar
      position="static"
      className="!bg-[#E9F6FB] !shadow-none !p-2"
      sx={{ backgroundColor: "#E9F6FB" }}
    >
      <Toolbar className="!flex !justify-between !items-center">
        {/* Logo */}
        <div className="flex items-center ml-20">
          <Image
            src={SpeakhireLogo}
            alt="SpeakHire Logo"
            width={150}
            height={40}
          />
        </div>

        {/* Navigation Links */}
        <div className="bg-[#DBF2FA] rounded-full px-6 py-2 flex space-x-6">
          <Link href="/activities">
            <Button
              className="!capitalize !text-black !px-2"
              sx={{
                borderRadius: 5, // Button radius
                "&:hover": {
                  backgroundColor: "#A3E1F8", // Hover color
                },
              }}
            >
              Activites
            </Button>
          </Link>
          <Link href="/about">
            <Button
              className="!capitalize !text-black"
              sx={{
                borderRadius: 5, // Button radius
                "&:hover": {
                  backgroundColor: "#A3E1F8", // Hover color
                },
              }}
            >
              About us
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              className="!capitalize !text-black"
              sx={{
                borderRadius: 5, // Button radius
                "&:hover": {
                  backgroundColor: "#A3E1F8", // Hover color
                },
              }}
            >
              Contact us
            </Button>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mr-20">
          <IconButton
            sx={{
              width: 72,
              borderWidth: 1,
              borderColor: "#08547A",
              borderStyle: "solid",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/youtube-icon.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </IconButton>
          <IconButton
            sx={{
              width: 72,
              borderWidth: 1,
              borderColor: "#08547A",
              borderStyle: "solid",
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
            className="!bg-[#08547A] !text-white !px-6"
            sx={{
              backgroundColor: "#08547A",
              borderRadius: 5,
              boxShadow: "none !important", // Removes default shadow
              transition: "all 0.3s ease-in-out", // Smooth hover effect
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
                backgroundColor: "#064067 !important", // Slightly darker blue on hover
              },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            className="!bg-[#92DB37] !text-black !px-6"
            sx={{
              backgroundColor: "#92DB37",
              borderRadius: 5,
              color: "black",
              boxShadow: "none !important",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important",
                backgroundColor: "#7dbb30 !important", // Slightly darker green on hover
              },
            }}
          >
            Donate
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
