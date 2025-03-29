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
import React from "react";
import Image from "next/image";

const OtherWaysIcons = [
  {
    icon: "/donateIcon.svg",
  },
  {
    icon: "/companyMatch.svg",
  },
  {
    icon: "/sponsorIcon.svg",
  },
];

async function getData() {
  try {
    const ChampionApiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/champions-page?populate=*`,
      { next: { revalidate: 60 } }
    );

    if (!ChampionApiRes.ok) throw new Error("Failed to fetch data");

    const ChampionApiData = await ChampionApiRes.json();
    return { ...ChampionApiData?.data };
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}

const ChampionPage = async () => {
  const ChampionPageRes = await getData();
  const data = ChampionPageRes;
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
  const groupedLogos = data.leading_companies_section.partner_logos.reduce(
    (acc: any[], curr: any, index: number) => {
      const rowIndex = Math.floor(index / 5);
      acc[rowIndex] = acc[rowIndex] || [];
      acc[rowIndex].push(curr);
      return acc;
    },
    []
  );
  return (
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
          {/* Shape the future, become a
          <span style={{ color: "#0F99C3" }}> mentor </span>
          today */}
          {TextHighlighter(data.hero_section.title, "mentor")}
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
          {TextHighlighter(
            data.hero_section.description,
            "two years of experience"
          )}
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
            {data.hero_section.button.inner_text}
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
            height: "100vh",
            marginTop: 5,
          }}
        >
          <CardContent>
            {/* This is where your image will go */}
            <Image
              src={
                data?.hero_section?.cover_image?.source?.url
                  ? process.env.NEXT_PUBLIC_STRAPI_URL +
                    data?.hero_section?.cover_image?.source?.url
                  : null
              }
              alt="Donate Cause"
              fill
              style={{ objectFit: "cover" }}
            />
          </CardContent>
        </Box>
      </Box>
      <Typography variant="h3" sx={{ mt: 10 }}>
        {TextHighlighter(
          data.champion_activities_section.title,
          "Champion activities"
        )}
      </Typography>
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          width: "79vw",
          height: "auto",
          mt: 5,
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
          {data.champion_activities_section.contribute_card.map(
            (activity: { title: string; description: string }, index: any) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                sx={{
                  borderRight:
                    index <
                      data.champion_activities_section.contribute_card.length -
                        1 && !(index % 2)
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

                {index > 1 &&
                  index !==
                    data.champion_activities_section.contribute_card.length -
                      1 && (
                    <Divider
                      sx={{
                        ml: index === 3 ? -3 : "",
                      }}
                    />
                  )}
              </Grid>
            )
          )}
        </Grid>
      </Box>
      <Box sx={{ width: "80vw", textAlign: "center", mt: 10, mb: 5 }}>
        <Typography variant="h3" >
          {TextHighlighter(
            data.other_way_to_impact_section.title,
            "Other ways"
          )}
        </Typography>
        <Grid container spacing={3} sx={{ mt: 0 }}>
          {data.other_way_to_impact_section.contribute_card.map(
            (
              item: { title: string; description: string; button: any },
              index: number
            ) => (
              <Grid item xs={12} sm={index !== 2 ? 6 : 12} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    display: "flex", // Ensures flex behavior
                    flexDirection: "column", // Aligns content vertically
                    textAlign: "left",
                    backgroundColor: "#F2FAFD",
                    p: 6,
                    borderRadius: 5,
                    minHeight: 400,
                  }}
                >
                  <Image
                    src={OtherWaysIcons[index].icon}
                    alt={`${item.title} icon`}
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
                    <Typography variant="body1">
                      {item?.button?.inner_text}
                    </Typography>
                  </Button>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2FAFD",
          width: "100vw",
          textAlign: "center",
          py: "100px",
          px: "15vw",
          mb: 5,
          // borderRadius: 5,
        }}
      >
        <Typography variant="h3">
          {TextHighlighter(
            data.leading_companies_section.title,
            "leading companies"
          )}
        </Typography>
        <Box sx={{ backgroundColor: "#E9F6FB", borderRadius: 10, mt: 5, py: 5 }}>
          <Grid2 sx={{ px: 5, py: 3 }}>
            {groupedLogos.map((row: any[], index: number) => (
              <Grid2
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  flexWrap: "wrap", // Ensures responsiveness
                  justifyContent: "center", // Centers content nicely
                  mt: index === 0 ? 0 : 5, // Adds spacing between rows
                }}
              >
                {row.map((item: any, idx: number) => (
                  <Box
                    key={idx}
                    sx={{
                      maxWidth: "100px", // Ensures logos are uniform in size
                      minWidth: "80px", // Helps maintain structure in smaller screens
                      textAlign: "center", // Centers logos
                    }}
                  >
                    <img
                      src={
                        item.source?.url
                          ? process.env.NEXT_PUBLIC_STRAPI_URL + item.source.url
                          : ""
                      }
                      alt={item.alternate_text || "Company Logo"}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
              </Grid2>
            ))}
          </Grid2>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#006397",
              borderRadius: 20,
              textTransform: "none",
              fontSize: 16,
              fontWeight: "bold",
              py:1.2
            }}
          >
            {data.leading_companies_section?.buttons[0].inner_text}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5, mb: 5 }}>
        <Typography variant="h3">What our champions has to say</Typography>
        {data.champion_testimonial_section.testimonials.map(
          (item: any, index: number) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: index % 2 == 0 ? "row" : "row-reverse",
                marginTop: 5,
              }}
            >
              <Box sx={{ marginLeft: 0 }}>
                <Image
                  src={
                    item.cover_image?.source?.url
                      ? process.env.NEXT_PUBLIC_STRAPI_URL +
                        item.cover_image?.source?.url
                      : null
                  }
                  alt={
                    item.cover_image.alternate_text ||
                    `TestimonialImage${index}`
                  }
                  height={506}
                  width={720}
                />
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
                  {item?.highlight}
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
                  {item.description}
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
                    {item.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    {`${item.designation} ${
                      item.employer ? ` @ ${item.employer}` : ""
                    } - ${item.association}`}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        )}
      </Box>
      <Box
        sx={{
          my: 5,
          textAlign: "left",
          width: "100vw",
          px: '10vw',
          backgroundColor: "#F2FAFD",
        }}
      >
        <Box sx={{ ml: 4, mt: 5 }}>
          <Typography variant="h3">
            {TextHighlighter(
              data.champion_stories_section.title,
              "success stories"
            )}
          </Typography>
          <Typography variant="body1">
            {data.champion_stories_section.description}
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{
            padding: 4,
            mt: 0,
          }}
        >
          {data.champion_stories_section.champion_story_card.map(
            (champion: any, index: number) => (
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
                        src={
                          champion?.picture?.source?.url
                            ? process.env.NEXT_PUBLIC_STRAPI_URL +
                              champion?.picture?.source?.url
                            : ""
                        }
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
                      <img
                        src={
                          champion?.employer_logo?.source?.url
                            ? process.env.NEXT_PUBLIC_STRAPI_URL +
                              champion?.employer_logo?.source?.url
                            : ""
                        }
                        alt={champion.employer_logo.aria_description}
                      />
                    </Box>

                    <Typography variant="body1" mt={1} mb={2}>
                      {champion.message}
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
            )
          )}
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: "#08547A",
          borderRadius: 10,
          width: "80vw",
          display: "flex",
          flexDirection: "row",
          my: 5,
        }}
      >
        <Box sx={{ width: "50vw" }}>
          <Image
            src={
              data.become_champion_section?.cover_image?.source?.url
                ? process.env.NEXT_PUBLIC_STRAPI_URL +
                  data.become_champion_section?.cover_image?.source?.url
                : ""
            }
            alt="Become Champion"
            width={800}
            height={200}
            style={{ borderRadius: 35 }}
          />
        </Box>
        <Box
          sx={{
            width: "35vw",
            display: "flex", // Ensures flex behavior
            flexDirection: "column",
            px: 5,
            py: 15,
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            {data.become_champion_section.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "white", paddingBottom:1 }}>
            {data.become_champion_section.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              textTransform: "none",
              color: "#08547A",
              mt: 1,
              py:1.2
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: 16, fontWeight: "bold", textTransform: "none" }}
            >
              {data.become_champion_section.button.inner_text}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionPage;
