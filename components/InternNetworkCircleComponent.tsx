import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const InternNetworkCircleComponent = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        textAlign: "center",
        alignContent: "center",
        width: "75vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          backgroundColor: "#F2FAFD", // Light blue background from the image
          padding: 3,
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            width: "100%",
            paddingRight: "100px",
            paddingLeft: "100px",
          }}
        >
          <span style={{ color: "#0F99C3" }}>SPEAKHIRE </span>
          Intern’s Network Circle
        </Typography>
        <Image
          src={"/intern.svg"}
          alt={"internship-circle"}
          width={686}
          height={338}
          style={{ alignSelf: "center" }}
        />
      </Box>
    </Box>
  );
};

export default InternNetworkCircleComponent;
