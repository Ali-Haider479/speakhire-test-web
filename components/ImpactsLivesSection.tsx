import { Box, Typography } from "@mui/material";
import YouTubePlayer from "./YouTubePlayer";

interface ImpactsLivesSectionProps {
  data: {
    title: string;
    description: string;
    links: any[];
  };
}

function extractYouTubeID(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return match ? match[1] : null;
}

export default async function ImpactsLivesSection({
  data,
}: ImpactsLivesSectionProps) {
  const videoLinks = data.links.map((item: any) => item.url);

  const HighlightText = (text: string) => {
    if (text?.length > 0) {
      const words = text.split(" ");
      const firstWord = words[0];
      const lastWords = words.slice(-2).join(" ");
      const middleWord = words[1];

      return (
        <>
          {firstWord} <span style={{ color: "#08547A" }}>{middleWord}</span>{" "}
          {lastWords}
        </>
      );
    } else {
      return "";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "40px 20px",
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 400,
          marginBottom: "16px",
          color: "#1D1B20",
          lineHeight: "1.2",
        }}
      >
        {HighlightText(data?.title)}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1.25rem",
          marginBottom: "32px",
          fontWeight: 500,
          lineHeight: "1.5",
          width: { xs: "60vw", md: "40vw" },
        }}
      >
        {data.description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          width: { xs: "85vw", md: "80vw" },
          height: "auto",
          margin: "0 auto",
          marginTop: { xs: 0, md: 5 },
        }}
      >
        {videoLinks.map((link, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              height: { xs: "40vh", md: "35vh" },
              aspectRatio: { xs: "4/3", md: "16/9" },
              backgroundColor: "#F2FAFD",
              borderRadius: { xs: "24px", md: "40px" },
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <YouTubePlayer
              videoId={`${link ? extractYouTubeID(link)?.toString() : ""}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
