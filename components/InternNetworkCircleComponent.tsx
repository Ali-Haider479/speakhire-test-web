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
        <p>
          
          <span style={{ color: "#0F99C3" }}>{firstPart} </span>
          {lastPart}
        </p>
      );
    } else {
      return "";
    }
  };
  return (
    <Box
      sx={{
        padding: "40px",
        textAlign: "center",
        alignContent: "center",
        width: "80vw",
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
