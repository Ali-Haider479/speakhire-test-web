import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

interface InternNetworkCircleComponentProps {
  data: {
    title: string;
    cover_image: any;
  };
}

const InternNetworkCircleComponent = ({
  data,
}: InternNetworkCircleComponentProps) => {
  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstPart = words[0];
      const lastPart = words.slice(1).join(" ");

      return (
        <>
          
          <span style={{ color: "#0F99C3" }}>{firstPart} </span>
          {lastPart}
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        padding: {xs:"10px",md:"20px"},
        textAlign: "center",
        alignContent: "center",
        width: {xs:"95vw",md:"80vw"},
        mt:5
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
            paddingRight: {xs:0,md:"100px"},
            paddingLeft: {xs:0,md:"100px"},
            fontSize:{xs:"1.5rem",md:"2rem"}
          }}
        >
          {HighlightText(data.title)}
        </Typography>
        <Image
          src={
            data?.cover_image?.source?.url
              ? process.env.NEXT_PUBLIC_STRAPI_URL +
                data?.cover_image?.source?.url
              : null
          }
          alt={data.cover_image.alternate_text}
          width={686}
          height={338}
          style={{ alignSelf: "center" }}
        />
      </Box>
    </Box>
  );
};

export default InternNetworkCircleComponent;
