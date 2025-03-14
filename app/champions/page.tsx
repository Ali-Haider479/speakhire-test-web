import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Grid2,
  Typography,
} from "@mui/material";
import PageLayout from "@/components/PageLayout";
import React from "react";
import Image from "next/image";


const activities = [
  {
    title: "Speakhire Series",
    description:
      "Become a speaker and share your story from school to career through our SPEAKHIRE SERIES, 1 hour webinars to our general audience...",
  },
  {
    title: "Skill Leaders",
    description:
      "SPEAKHIRE Seminars, also known as SPEAKHIRE Skills Seminars, are 45-minute to 1-hour sessions led by one of our Champions...",
  },
  {
    title: "Foundational Year",
    description:
      "SPEAKHIRE’s award-winning Foundational Year supports, prepares, and empowers all kinds looking for career counseling...",
  },
  {
    title: "Exploratory Year",
    description:
      "The Exploratory Years are for individuals who have graduated from the Foundational Year and have proven their commitment to...",
  },
  {
    title: "Pathways Days",
    description:
      "Have you ever wondered how others achieved career success? Pathways Days are career-focused events designed to explore different career paths...",
  },
];

const OtherWaysData = [
  {
    icon: "/donateIcon.svg",
    title: "Donate",
    description:
      "Your donation empowers immigrants by providing skills and career opportunities through SPEAKHIRE, helping them build brighter futures. Make an impact today.",
    buttonText: "Donate Now",
  },
  {
    icon: "/companyMatch.svg",
    title: "Company Matching",
    description:
      "Employee match programs encourage giving by rewarding staff donations, offering an easy way to double your impact. It's free money you can use to support your community.",
    buttonText: "Match Now",
  },
  {
    icon: "/sponsorIcon.svg",
    title: "Sponsor",
    description:
      "By sponsoring SPEAKHIRE, you help provide immigrants with the tools and opportunities they need to succeed. Your support creates pathways for education, mentorship, and career growth, empowering individuals to build better futures. Join us in making a meaningful difference today.",
    buttonText: "Sponsor Now",
  },
];

const data = [
  {
    Name: "Wade Cooper",
    designation: "UX Researcher @ Google - Champion",
    title: "How Mentors Shape Careers and Inspire Success.",
    note: "“I'm thankful to learn what it takes to achieve future goals and build my confidence to pursue them through SPEAKHIRE. This is my second year, and I've already had so many doors open for me by the successful women I connected with my first year. ”",
  },
];

const ChampionsSuccessStories = [
  {
    name: "Cathy Whealon",
    story:
      "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE Intern, I gained valuable skills and information my first year and know this year I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
    designation: "UX Researcher",
    companyLogo: "/googleLogo2.svg",
  },
  {
    name: "Sharon Shi",
    story:
      "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE Intern, I gained valuable skills and information my first year and know this year I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me.",
    designation: "Director of Strategy & Operations",
    companyLogo: "/metaLogo.svg",
  },
];

const ChampionPage = () => {
  return (
    <PageLayout>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
            width: "45vw",
          }}
        >
          Shape the future, become a
          <span style={{ color: "#0F99C3" }}> mentor </span>
          today
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "#49454F", // Gray color for the description
            marginBottom: "32px",
            //   maxWidth: '600px',
            width: "35vw",
            margin: "0 auto",
            lineHeight: "1.5",
            fontWeight: 500,
          }}
        >
          Ready to inspire future leaders? With{" "}
          <span style={{ color: "#0F99C3" }}> two years of experience </span> ,
          you can become a SPEAKHIRE CPC and make an impact!
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
            Become a Champion
          </Typography>
        </Button>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "80vw", // 80% of the viewport width
            marginLeft: "-2vw", // Add left margin to center it horizontally
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
          backgroundColor: "#F2FAFD",
          width: "79vw",
          height: "auto",
          mt: 15,
          mb: 5,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            backgroundColor: "#EAF4F8",
            borderRadius: 5,
            padding: 4,
          }}
        >
          {activities.map((activity, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={index}
              sx={{
                borderRight:
                  index < activities.length - 1 && !(index % 2)
                    ? "1px solid #ccc "
                    : "none",
              }}
            >
              <Card
                elevation={0}
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight="bold">
                    {activity.title}
                  </Typography>
                  <Typography variant="body1" mt={1} mb={2}>
                    {activity.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: 50,
                      borderColor: "#006397",
                      color: "#006397",
                      textTransform: "none",
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>

              {index < 2 && <Divider sx={{ width: "90%", ml: 3 }} />}

              {index > 1 && index !== activities.length - 1 && (
                <Divider
                  sx={{
                    ml: index === 3 ? -3 : "",
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ width: "80vw", textAlign: "center", mt: 10, mb: 5 }}>
        <Typography variant="h3">
          <span style={{ color: "#0F99C3" }}>Other ways </span> to make an
          impact
        </Typography>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {OtherWaysData.map((item: any, index: number) => (
            <Grid item xs={12} sm={index !== 2 ? 6 : 12} key={index}>
              <Card
                elevation={0}
                sx={{
                  display: "flex", // Ensures flex behavior
                  flexDirection: "column", // Aligns content vertically
                  textAlign: "left",
                  backgroundColor: "#F2FAFD",
                  p: 5,
                  borderRadius: 5,
                  minHeight: 400,
                }}
              >
                <Image
                  src={item.icon}
                  alt=""
                  height={60}
                  width={60}
                  style={{
                    backgroundColor: "#E6EEF2",
                    borderRadius: 50,
                    padding: 18,
                  }}
                />
                <Typography variant="h4" style={{ marginTop: 30 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" style={{ marginTop: 5 }}>
                  {item.description}
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 50,
                    width: 150,
                    borderColor: "#006397",
                    color: "#006397",
                    mt: "auto",
                    textTransform: "none",
                  }}
                >
                  <Typography variant="body1">{item?.buttonText}</Typography>
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          width: "80vw",
          textAlign: "center",
          py: "100px",
          px: "80px",
          mb: 5,
          borderRadius: 5,
        }}
      >
        <Typography variant="h3">
          Our champions represents{" "}
          <span style={{ color: "#0F99C3" }}> leading companies</span>
        </Typography>
        <Box sx={{ backgroundColor: "#E9F6FB", borderRadius: 5, mt: 5, py: 5 }}>
          <Grid2 sx={{ px: 5, py: 3 }}>
            <Grid2 sx={{ display: "flex", flexDirection: "row", gap: 8 }}>
              <img src="/leadingCompanies/googleLogo.svg" alt="Google" />
              <img src="/leadingCompanies/IBM_Logo.svg" alt="IBM" />
              <img src="/leadingCompanies/cater'sLogo.svg" alt="cater's" />
              <img
                src="/leadingCompanies/LorealParisLogo.svg"
                alt="Loreal Paris"
              />
              <img src="/leadingCompanies/VaynerMedia.svg" alt="Vayner Media" />
            </Grid2>
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                px: 7,
                mt: 5,
              }}
            >
              <img src="/leadingCompanies/usAidLogo.svg" alt="USAID" />
              <img src="/leadingCompanies/nycLogo.svg" alt="NYC DOE" />
              <img
                src="/leadingCompanies/waltDisnepLogo.svg"
                alt="Walt Disnep"
              />
              <img
                src="/leadingCompanies/unitedNationsLogo.svg"
                alt="United Nations"
              />
              <img
                src="/leadingCompanies/harvardUniversityLogo.svg"
                alt="Harvard University"
              />
              <img src="/leadingCompanies/wesLogo.svg" alt="WES" />
            </Grid2>
            <Grid2
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                px: 7,
                mt: 5,
              }}
            >
              <img src="/leadingCompanies/swissReLogo.svg" alt="SwissRe" />
              <img src="/leadingCompanies/unicefLogo.svg" alt="Unicef" />
              <img src="/leadingCompanies/E&Y_Logo.svg" alt="E&Y" />
              <img
                src="/leadingCompanies/bankOfAmerica.svg"
                alt="Bank of America"
              />
            </Grid2>
          </Grid2>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#006397",
              borderRadius: 20,
              textTransform: "none",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Become a champion
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h3">What our champions has to say</Typography>
        <Box sx={{ display: "flex", flexDirection: "row", marginTop: 5 }}>
          <Box sx={{ marginLeft: 0 }}>
            <Image src="/wadeStory.svg" alt="" height={506} width={720} />
          </Box>
          <Box
            sx={{
              backgroundColor: "#e1f7ff",
              borderRadius: "40px",
              padding: { xs: "24px", md: "40px" },
              maxWidth: "32rem",
              marginX: "auto",
              textAlign: "left",
              marginLeft: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                marginBottom: "16px",
                color: "#111827",
              }}
            >
              {data[0].title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#374151",
                marginBottom: "24px",
                lineHeight: "1.25",
                fontSize: "1.28rem",
                marginTop: 5,
              }}
            >
              {data[0].note}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "12px 16px",
                borderLeft: "1px solid #374151", // Left border with a blue shade
                maxWidth: "400px", // Adjust width if needed
                marginTop: 5,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#222" }}
              >
                {data[0].Name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#555" }}>
                {data[0].designation}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          my: 5,
          textAlign: "left",
          width: "80vw",
          backgroundColor: "#F2FAFD",
        }}
      >
        <Box sx={{ ml: 5, mt: 5 }}>
          <Typography variant="h3">
            Champions’{" "}
            <span style={{ color: "#0F99C3" }}> success stories</span>
          </Typography>
          <Typography variant="body1">
            Explore real-life success stories from our champions that
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            padding: 4,
            mt: 4,
          }}
        >
          {ChampionsSuccessStories.map((champion, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  boxShadow: "none",
                  backgroundColor: "#EAF4F8",
                  borderRadius: 5,
                  p: 3,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        margin: "0 0 16px",
                        backgroundColor: "#bbdefb",
                        transform: "scale(1)",
                        transition: "transform 0.3s ease-in-out",
                        alignSelf: "start",
                      }}
                    />
                    <img src={champion.companyLogo} alt="" />
                  </Box>

                  <Typography variant="body1" mt={1} mb={2}>
                    {champion.story}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "12px 16px",
                      borderLeft: "1px solid #374151", // Left border with a blue shade
                      maxWidth: "400px", // Adjust width if needed
                      marginTop: 5,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#222" }}
                    >
                      {champion.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      {champion.designation}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#08547A",
          borderRadius: 10,
          width: "80vw",
          display: "flex",
          flexDirection: "row",
          mb:5
        }}
      >
        <Box sx={{ width: "50vw" }}>
          <Image src="/becomeChampion.png" alt="Become Champion" width={800} height={200} style={{borderRadius:35}}/>
        </Box>
        <Box
          sx={{
            width: "35vw",
            display: "flex", // Ensures flex behavior
            flexDirection: "column",
            px:5,
            py:15
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            Are you ready to become champion?
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            Mentor and empower the next generation of leaders. Join us today and
            help shape brighter futures for immigrants.
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
              sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" ,}}
            >
              Become a Champion
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
    </PageLayout>
  );
};

export default ChampionPage;
