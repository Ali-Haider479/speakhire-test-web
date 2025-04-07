import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Image from "next/image";
import CustomButton from "./CustomButton";
interface DonateComponentProps {
  data: {
    title: string;
    description: string;
    button: any;
    cover_image: any;
  };
}

const DonateComponent = ({ data }: DonateComponentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt: 5,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "auto",
        backgroundColor: "white",
        mb: 5,
      }}
    >
      <Card
        sx={{
          borderRadius: "24px",
          // overflow: "hidden",
          backgroundColor: "#6BAA1E",
          height: { xs: "auto", md: "556px" },
          width: "80vw",
          pb: 0,
          mb: 0,
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            height: "100%",
            p:0,
            pb:0,
            mb:0
          }}
        >
          <Box
            sx={{
              flex: { xs: 1, md: 0.3 },
              px: 6,
              py: { xs: 3, md: 0 },
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderTopRightRadius: "24px", // Add this
              borderBottomRightRadius: "24px", // Add this
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              gutterBottom
              sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            >
              {data.title}
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              {data.description}
            </Typography>

            <CustomButton
              icon={<img src="/donateIcon1.svg" />}
              innerText={data.button.inner_text}
              sx={{
                backgroundColor: "white",
                color: "#426E0B",
                padding: { xs: 1, md: 1.5 },
                borderRadius: "50px",
                textTransform: "none",
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                },
              }}
              variant={"contained"}
              iconOnStart={true}
            />
          </Box>

          <Box
            sx={{
              flex: { xs: 1, md: 0.7 },
              position: "relative",
              height: { xs: "250px", md: "100%" },
              minHeight: { xs: "250px", md: "unset" },
              overflow: "hidden",
              borderRadius: "24px", // Change this to round all corners
            }}
          >
            <Image
              src={
                data.cover_image?.source?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL +
                    data.cover_image.source.url
                  : null
              }
              alt="Children sitting together"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DonateComponent;
