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

async function getData() {
  try {
    const InternsPageApiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/interns-page?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store", // Disables caching (SSR mode)
      }
    );

    if (!InternsPageApiRes.ok) throw new Error("Failed to fetch data");

    const InternsPageApiData = await InternsPageApiRes.json();
    return { ...InternsPageApiData?.data };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const Interns = async () => {
  const InternPageRes = await getData();
  const data = InternPageRes;
  console.log(data);
  const TextHighlighter = (title: string, wordsToHighlight: string) => {
    const titleParts = title.includes(wordsToHighlight)
      ? title.split(wordsToHighlight)
      : [title, ""];
    return (
      <>
        {titleParts[0]}
        <Typography
          component="span"
          sx={{
            color: "#00a6d9",
            fontWeight: 400,
            fontSize: "inherit",
          }}
        >
          {wordsToHighlight}
        </Typography>
        {titleParts[1]}
      </>
    );
  };

  const allImages = data.national_mentorship_month.images;

  const images = [
    allImages.slice(0, 2).map((item: any, index: number) => {
      return {
        src: item.source.url,
        height: "30%",
        width: index % 2 == 0 ? "68%" : "30%",
      };
    }),
    allImages.slice(2, 4).map((item: any, index: number) => {
      return {
        src: item.source.url,
        height: "70%",
        width: index % 2 == 0 ? "30%" : "68%",
      };
    }),
    ,
  ];

  const verticalImagesLayout = allImages
    .slice(4, 6)
    .map((item: any, index: number) => {
      return {
        src: item.source.url,
        height: index % 2 == 0 ? "70%" : "30%",
      };
    });

  const HeaderSection = () => {
    return (
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
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 400,
            marginBottom: "16px",
            lineHeight: "1.2",
            paddingTop: { xs: "5vh", md: "10vh" },
            width: { xs: "80vw", md: "35vw" },
          }}
        >
          {TextHighlighter(data.hero_section.title, "future")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "#49454F", // Gray color for the description
            marginBottom: "32px",
            //   maxWidth: '600px',
            width: { xs: "80vw", md: "45vw" },
            margin: "0 auto",
            lineHeight: "1.5",
            fontWeight: 500,
          }}
        >
          {data.hero_section.description}
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
            sx={{
              fontSize: { xs: 14, md: 16 },
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            {data.hero_section.button.inner_text}
          </Typography>
        </Button>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: { xs: "90vw", md: "80vw" }, // 80% of the viewport width

            borderRadius: "40px",
            border: "10px solid rgb(195, 206, 211)",
            overflow: "hidden",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
            backgroundColor: "#ffffff",
            height: { xs: "25vh", md: "70vh" },
            marginTop: 5,
          }}
        >
          <CardContent>
            {/* This is where your image will go */}
            <Image
              src={
                data.hero_section?.cover_image?.source?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL +
                    data.hero_section?.cover_image?.source?.url
                  : null
              }
              alt={
                data.hero_section?.cover_image.alternate_texts ||
                "intern cover image"
              }
              fill
              style={{ objectFit: "cover" }}
            />
          </CardContent>
        </Box>
      </Box>
    );
  };

  const InternshipCoursesSection = () => {
    return (
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
        <Typography
          variant="h2"
          sx={{
            width: { xs: "80vw", md: "60vw" },
            fontSize: { xs: "2rem", md: "3rem" },
          }}
        >
          {TextHighlighter(data.intership_courses.title, "courses that shape")}
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
            {data.intership_courses.courses_cards.map(
              (item: any, index: number) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    elevation={0}
                    sx={{
                      backgroundColor: "#F2FAFD",
                      p: { xs: 3, md: 6 },
                      textAlign: "left",
                      borderRadius: 5,
                    }}
                  >
                    <img
                      src={
                        item.course_img.source.url
                          ? process.env.NEXT_PUBLIC_STRAPI_URL +
                            item.course_img.source.url
                          : null
                      }
                      alt={item.title}
                    />
                    {item.invite_text && (
                      <Typography
                        sx={{
                          backgroundColor: "#E4ECFC",
                          mt: 2,
                          p: 0.5,
                          px: 2,
                          borderRadius: 5,
                          color: "#063B55",
                          width: "fit-content",
                        }}
                      >
                        {item.invite_text}
                      </Typography>
                    )}
                    <Typography
                      variant="h4"
                      sx={{ mt: 2, px: 1, fontSize: { xs: "1.65rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <List>
                      {item.what_course_offer.map(
                        (detail: any, index: number) => (
                          <ListItem
                            key={index}
                            style={{ margin: 0, padding: 1 }}
                          >
                            <ListItemIcon sx={{ minWidth: "auto", mr: 1 }}>
                              <img src="/checkBadge.svg" alt="check" />
                            </ListItemIcon>
                            <ListItemText>{detail.description}</ListItemText>
                          </ListItem>
                        )
                      )}
                    </List>
                    <Typography
                      variant="body2"
                      sx={{ mt: 2,ml:1, color: "#063B55" }}
                    >
                      Applications closing on{" "}
                      <span
                        style={{ color: "#063B55", fontWeight: "bold" }}
                      >
                        {item.application_closing_date}
                      </span>
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        mt: 2,
                        backgroundColor: "#006397",
                        textTransform: "none",
                        borderRadius: 10,
                        fontWeight: "bold",
                        fontSize:{xs:14,md:16}
                      }}
                    >
                      Register Now
                    </Button>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Box>
    );
  };

  const InternsTestimonialSection = () => {
    return (
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          width: "100vw",
          p: 5,
          mb: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TestimonialSection
          title={
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontWeight: "normal",
                color: "black",
                width: "80vw",
              }}
            >
              {TextHighlighter(data.alumins_testimonials.title, "alumnis")}
            </Typography>
          }
          data={data.alumins_testimonials.testimonials}
        />
      </Box>
    );
  };

  const MentorshipMonthCollage = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: { xs: 2, md: 4 },
            fontWeight: "normal",
            mt: { xs: 2.5, md: 5 },
          }}
        >
          {TextHighlighter(data.national_mentorship_month.title, "Mentorship")}
        </Typography>
        <Box
          sx={{
            backgroundColor: "#F2FAFD",
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            gap: { xs: 1, md: 2 },
            padding: { xs: 2, md: 3 },
            width: { xs: "90vw", md: "80vw" },
            mt: { xs: 2, md: 4 },
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
                  gap: { xs: 1, md: 2 },
                  mb: { xs: 1, md: 2 },
                }}
              >
                {row.map((img: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      borderRadius: "16px",
                      overflow: "hidden",
                      width: img.width,
                      height:
                        img.height === "30%"
                          ? { xs: "15vh", md: "25vh" }
                          : { xs: "25vh", md: "40vh" },
                    }}
                  >
                    <Image
                      src={
                        img?.src
                          ? process.env.NEXT_PUBLIC_STRAPI_URL + img.src
                          : null
                      }
                      alt="Community"
                      fill
                      style={{ objectFit: "cover" }}
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
              gap: { xs: 1, md: 2 },
            }}
          >
            {verticalImagesLayout.map((img: any, index: number) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  width: "100%",
                  height:
                    img.height === "30%"
                      ? { xs: "15vh", md: "20vh" }
                      : { xs: "25vh", md: "45vh" },
                }}
              >
                <Image
                  src={
                    img?.src
                      ? process.env.NEXT_PUBLIC_STRAPI_URL + img.src
                      : null
                  }
                  alt="Community"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  const ApplyForFoundationalYearSection = () => {
    return (
      <Box
        sx={{
          backgroundColor: "#08547A",
          borderRadius: 10,
          width: "80vw",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mb: 5,
          mt: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            width: { md: "30vw" },
            display: "flex", // Ensures flex behavior
            flexDirection: "column",
            px: { xs: 4, md: 10 },
            py: { xs: 4, md: 15 },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: "white", fontSize: { xs: "2rem", md: "3rem" } }}
          >
            {data.apply_now_section.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "white", mt: 2 }}>
            {data.apply_now_section.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              textTransform: "none",
              color: "#08547A",
              mt: 5,
              py: 1.2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 14, md: 16 },
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              {data.apply_now_section.button.inner_text}
            </Typography>
          </Button>
        </Box>
        <Box sx={{ width: { md: "50vw" } }}>
          <Image
            src={
              data?.apply_now_section?.cover_image?.source?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL +
                  data?.apply_now_section?.cover_image?.source?.url
                : null
            }
            alt={
              data?.apply_now_section?.cover_image.alternate_text ||
              "Become Champion"
            }
            width={800}
            height={200}
            style={{ borderRadius: 35, justifySelf: "right" }}
          />
        </Box>
      </Box>
    );
  };

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
      <HeaderSection />
      <InternshipCoursesSection />
      <InternsTestimonialSection />
      <MentorshipMonthCollage />
      <ApplyForFoundationalYearSection />
    </Box>
  );
};

export default Interns;
