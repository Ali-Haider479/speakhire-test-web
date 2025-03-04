import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";

const FY_InternshipProgram = () => {
  return (
    <Box
      sx={{
        width: "90%", // 80% of the screen width
        height: "80vh", // Set a height for the box
        // borderRadius: "40px", // Border radius
        margin: "auto", // Centers the box horizontally
        display: "flex", // To align child boxes in a row
        justifyContent: "space-between", // Space between the children
        alignItems: "center", // Center items vertically
        my: 10, // Vertical margin
        // marginTop:-5,
        borderTopLeftRadius:"40px",
        borderTopRightRadius:"40px"
      }}
    >
      {/* First child box - takes 45% of the width */}

      <Box
        sx={{
          width: "50%", // Width adjusted
          borderRadius: "20px", // Rounded corners to match the image
          paddingY: 5, // Add padding for spacing
          paddingX: 4,
          display: "flex",
          flexDirection: "column", // Stack the elements vertically
          justifyContent: "flex-end",
          alignItems: "flex-start",
          height: "100%", // Ensures the box stretches to full height
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            width: "576px",
          }}
        >
          Building a{" "}
          <span style={{ color: "#0F99C3" }}>brighter tomorrow </span>
          with Foundational Year Internship program
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: 2,
            fontSize: 20,
          }}
        >
          We bring together community resources, a network of professionals to
          facilitate and empower individuals from immigrant families.
        </Typography>
      </Box>

      {/* Second child box - takes 55% of the width */}
      <Box sx={{ width: "50%", position: "relative", height: "100%" }}>
        <Image
          src="/internship.png" // Replace with your actual image source
          alt="partner-image"
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure the image covers the entire area
          style={{ borderRadius: "40px" }}
        />
        <Image
          src="/awardWinner.svg"
          alt="partner-image"
          width={100}
          height={100}
          style={{
            position: "absolute",
            bottom: "15px", // Adjust as needed
            right: "25px", // Adjust as needed
          }}
        />
      </Box>
    </Box>
  );
};

export default FY_InternshipProgram;
