import { Box, Button, Typography, Card, CardContent } from "@mui/material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
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
        alignItems: "center",
        justifyContent: "center",
        minHeight: "506px",
        backgroundColor: "white",
      }}
    >
      <Card
        sx={{
          display: "flex",
          borderRadius: "24px",
          overflow: "hidden",
          backgroundColor: "#6AB43E",
          flexDirection: { xs: "column-reverse",md:"row" },
          height: "auto",
          width: "80vw",
          mb:5
        }}
      >
        <CardContent
          sx={{
            flex: "0.3",
            padding: 3,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            borderTopRightRadius: "24px", // Add this
            borderBottomRightRadius: "24px", // Add this
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {data.title}
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            {data.description}
          </Typography>

          <CustomButton
            icon={<img src="/donateIcon1.svg"/>}
            innerText={data.button.inner_text}
            sx={{
              backgroundColor: "white",
              color: "#426E0B",
              padding: 1.5 ,
              borderRadius: "50px",
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              },
            }}
            variant={"contained"}
            iconOnStart={true}
          />
        </CardContent>

        <Box
          sx={{
            flex: "0.7",
            position: "relative",
            minHeight: "400px",
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
      </Card>
    </Box>
  );
};

export default DonateComponent;
