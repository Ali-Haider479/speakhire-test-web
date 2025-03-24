import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

interface ObjectiveSectionProps {
  data: {
    title:string,
    objectives:any[]
  };
}

const ObjectiveSection = ({data}:ObjectiveSectionProps) => {
  return (
    <Box
      sx={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "3rem",
          fontWeight: 400,
          marginBottom: "40px",
          color: "#1D1B20",
        }}
      >
        Our objective is to
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          width: "80vw",
          paddingY: "20px",
          paddingX: "20px",
          margin: "0 auto",
          flexWrap: "wrap",
          backgroundColor: "#F2FAFD",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            flex: "1",
            minWidth: "300px",
            padding: "20px",
            // backgroundColor: '#f5faff',
            // borderRadius: '8px',
            textAlign: "left", // Changed from center to left
            // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            sx={{
              width: "48px", // Size of the circular container
              height: "48px", // Size of the circular container
              borderRadius: "50%", // Makes it circular
              backgroundColor: "#E6EEF2", // Gray background for the circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginLeft: "0", // Aligns the circle to the left
            }}
          >
            <Image src={"/gear.svg"} alt="settings" width={24} height={24} />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "10px",
              color: "#1D1B20",
              marginLeft: "0", // Aligns title to the left
            }}
          >
            {data?.objectives[0]?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#49454F",
              lineHeight: "1.5",
              marginLeft: "0", // Aligns description to the left
            }}
          >
            {data?.objectives[0]?.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Vertically center the diamond and line
            position: "relative", // For positioning the line
            justifyContent: "center", // Center the diamond horizontally
          }}
        >
          <Box
            sx={{
              height: "100%", // Full height of the parent flex container
              borderLeft: "1px solid #e0e0e0", // Vertical line behind the diamond
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              zIndex: 0, // Ensure the line is behind the image
            }}
          />
          <Image
            src={"/diamond.svg"}
            alt="diamond separater"
            width={24}
            height={24}
            style={{ zIndex: 1 }} // Ensure the image is in front of the line
          />
        </Box>

        <Box
          sx={{
            flex: "1",
            minWidth: "300px",
            padding: "20px",
            // backgroundColor: '#f5faff',
            // borderRadius: '8px',
            textAlign: "left", // Changed from center to left
            // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            sx={{
              width: "48px", // Size of the circular container
              height: "48px", // Size of the circular container
              borderRadius: "50%", // Makes it circular
              backgroundColor: "#E6EEF2", // Gray background for the circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginLeft: "0", // Aligns the circle to the left
            }}
          >
            <Image
              src={"/document.svg"}
              alt="document"
              width={24}
              height={24}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "10px",
              color: "#1D1B20",
              marginLeft: "0", // Aligns title to the left
            }}
          >
            {data?.objectives[1]?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#49454F",
              lineHeight: "1.5",
              marginLeft: "0", // Aligns description to the left
            }}
          >
            {data?.objectives[1]?.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Vertically center the diamond and line
            position: "relative", // For positioning the line
            justifyContent: "center", // Center the diamond horizontally
          }}
        >
          <Box
            sx={{
              height: "100%", // Full height of the parent flex container
              borderLeft: "1px solid #e0e0e0", // Vertical line behind the diamond
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              zIndex: 0, // Ensure the line is behind the image
            }}
          />
          <Image
            src={"/diamond.svg"}
            alt="diamond separater"
            width={24}
            height={24}
            style={{ marginTop: "150px", zIndex: 1 }} // Ensure the image is in front of the line
          />
        </Box>

        <Box
          sx={{
            flex: "1",
            minWidth: "300px",
            padding: "20px",
            // backgroundColor: '#f5faff',
            // borderRadius: '8px',
            textAlign: "left", // Changed from center to left
            // boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          <Box
            sx={{
              width: "48px", // Size of the circular container
              height: "48px", // Size of the circular container
              borderRadius: "50%", // Makes it circular
              backgroundColor: "#E6EEF2", // Gray background for the circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "15px",
              marginLeft: "0", // Aligns the circle to the left
            }}
          >
            <Image
              src={"/handshake.svg"}
              alt="handshake"
              width={24}
              height={24}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              marginBottom: "10px",
              color: "#1D1B20",
              marginLeft: "0", // Aligns title to the left
            }}
          >
            {data?.objectives[2]?.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#49454F",
              lineHeight: "1.5",
              marginLeft: "0", // Aligns description to the left
            }}
          >
           {data?.objectives[2]?.description}
          </Typography>
        </Box>
      </Box>

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
          },
          marginTop: 5,
          // height:10
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
        >
          View full one-pager
        </Typography>
      </Button>
    </Box>
  );
};

export default ObjectiveSection;
