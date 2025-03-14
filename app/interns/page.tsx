import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import TestimonialSection from "@/components/TestimonialSection";

const programs = [
  {
    programIcon: "/leadershipIcon.svg",
    title: "Leadership course",
    details: [
      "Entrepreneurial Mindset & Public Speaking",
      "Over total of 10 sessions",
      "Develop leadership skills",
      "Increased self-awareness, confidence, and student engagement",
    ],
    application: "Applications closing on 12 Dec, 2024 12PM",
  },
  {
    programIcon: "/foundationYearIcon.svg",
    title: "Foundational year",
    details: [
      "Get a mentor from industry",
      "Join the network of professionals",
      "Develop leadership skills",
      "Increased self-awareness, confidence, and student engagement",
    ],
    application: "Applications closing on 12 Dec, 2024 12PM",
  },
  {
    programIcon: "/courseIcon.svg",
    title: "Exploratory years program",
    invite: (
      <Typography
        sx={{
          backgroundColor: "#E4ECFC",
          borderRadius: 10,
          p: 0.25,
          width: 300,
          pl: 1.5,
          mt: 2,
        }}
      >
        Invite only program for{" "}
        <Typography component="span" sx={{ fontWeight: "bold" }}>
          FY graduates
        </Typography>
      </Typography>
    ),
    details: [
      "Join the network of professionals",
      "Develop leadership skills",
      "Flexible scheduling",
    ],
    application: "Applications closing on 12 Dec, 2024 12PM",
  },
];

const data = [
  {
    Name: "Cathy Whealon",
    designation: "UX Researcher - SPEAKHIRE Alumni",
    title:
      "One of the most valuable parts was the mentorship. The instructors weren’t just teachers—they were industry experts who genuinely cared about our growth.",
    note: "",
    image: "/cathy'sStory.svg",
    isImageLeft: true,
    isTextRightAligned: false,
  },
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    title:
      "I loved how the training was tailored to my needs and aligned perfectly with the challenges I face. The hands-on approach made learning engaging that I applied to my projects.",
    note: "",
    image: "/wadeStory.svg",
    isImageLeft: false,
    isTextRightAligned: true,
  },
];

const images = [
  [
    { src: "/13.jpg", width: "68%", height: "30%" },
    { src: "/14.jpg", width: "30%", height: "30%" },
  ],
  [
    { src: "/11.jpg", width: "30%", height: "70%" },
    { src: "/12.jpg", width: "68%", height: "70%" },
  ],
];

const verticalImagesLayout = [
  { src: "/1.png", height: "70%" },
  { src: "/2.png", height: "30%" },
];

const testimonialTitle = (
  <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
    What <span style={{ color: "#0F99C3" }}> alumnis </span>
    has to say
  </Typography>
);

const Interns = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F2FAFD", // Light blue background from the image
          textAlign: "center",
          alignItems: "center",
          width: "100vw",
          height: "auto",
          background: "linear-gradient(180deg, #F2FAFD 70%, #ffffff 30%)",
          position: "relative",
          overflow: "hidden",
          mb: 5,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "3rem",
            fontWeight: 400,
            marginBottom: "16px",
            lineHeight: "1.2",
            paddingTop: "10vh",
            width: "35vw",
          }}
        >
          Shape your
          <span style={{ color: "#0F99C3" }}> future </span> , master your path
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "#49454F", // Gray color for the description
            marginBottom: "32px",
            //   maxWidth: '600px',
            width: "45vw",
            margin: "0 auto",
            lineHeight: "1.5",
            fontWeight: 500,
          }}
        >
          As a SPEAKHIRE Intern, you'll gain leadership skills, connect with
          industry experts, and build a network to support your career journey.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#08547A", // Button color
            borderRadius: 5,
            padding: "10px 30px",
            "&:hover": {
              bgcolor: "#0A4A5E", // Darker hover effect
            },
            marginTop: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
          >
            Apply for Foundation Year
          </Typography>
        </Button>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "80vw", // 80% of the viewport width

            borderRadius: "40px",
            border: "10px solid rgb(195, 206, 211)",
            overflow: "hidden",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#ffffff",
            height: "80vh",
            marginTop: 5,
          }}
        >
          <CardContent>
            {/* This is where your image will go */}
            <Image
              src="/championCover.png"
              alt="Donate Cause"
              layout="fill"
              objectFit="cover"
            />
          </CardContent>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80vw",
          textAlign: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Typography variant="h3" sx={{ width: "60vw" }}>
          Empowering futures through
          <span style={{ color: "#0F99C3" }}> courses that shape </span>
          skills and future
        </Typography>
        <Box
          sx={{
            width: "80vw",
            height: "auto",
            mt: 5,
            mb: 5,
          }}
        >
          <Grid container spacing={3}>
            {programs.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: "#F2FAFD",
                    p: 6,
                    textAlign: "left",
                    borderRadius: 5,
                  }}
                >
                  <img src={item.programIcon} alt={item.title} />
                  {item.invite && <> {item.invite}</>}
                  <Typography variant="h4" sx={{ mt: 2 }}>
                    {item.title}
                  </Typography>
                  <List>
                    {item.details.map((detail, index) => (
                      <ListItem>
                        <ListItemIcon>
                          <img src="/checkBadge.svg" alt="check" />
                        </ListItemIcon>
                        <ListItemText>{detail}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {item.application}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#006397",
                      textTransform: "none",
                      borderRadius: 10,
                      fontWeight: "bold",
                    }}
                  >
                    Register Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#F2FAFD", width: "80vw", p: 5, mb: 5 }}>
        <TestimonialSection title={testimonialTitle} data={data} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "normal" }}>
          Celebrating national
          <span style={{ color: "#0F99C3" }}> Mentorship </span>
          month
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F2FAFD",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: 3,
            width: "80vw",
            mt: 4,
          }}
        >
          <Box sx={{ width: "70vw" }}>
            {images.map((row, rowIndex) => (
              <Box
                key={rowIndex}
                sx={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                {row.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      width: img.width,
                      height: img.height === "30%" ? "25vh" : "40vh",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt="Community"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              width: "30vw",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {verticalImagesLayout.map((img, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  height: img.height === "30%" ? "20vh" : "45vh",
                }}
              >
                <Image
                  src={img.src}
                  alt="Community"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#08547A",
          borderRadius: 10,
          width: "80vw",
          display: "flex",
          flexDirection: "row",
          mb: 5,
          mt:10
        }}
      >
        <Box
          sx={{
            width: "30vw",
            display: "flex", // Ensures flex behavior
            flexDirection: "column",
            px: 10,
            py: 15,
            textAlign:"left"
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            Build your future with us
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Join our programs to get the skills, mentorship and network that
            helps you outperform in your career.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              textTransform: "none",
              color: "#08547A",
              mt: 5,
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
            >
              Apply for Foundational Year now
            </Typography>
          </Button>
        </Box>
        <Box sx={{ width: "50vw"}}>
          <Image
            src="/becomeChampion.png"
            alt="Become Champion"
            width={800}
            height={200}
            style={{ borderRadius: 35,justifySelf:"right" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Interns;
