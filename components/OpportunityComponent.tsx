import { Box, Typography, Grid } from "@mui/material";
import React from "react";

interface OpportunityForChangeComponentProps{
  data:{
    statistics:any[]
  }
}

export default function OpportunityForChangeComponent({data}:OpportunityForChangeComponentProps) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F2FAFD",
        marginBottom: 5,
        display: "flex", // Set to flex to align content
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
      }}
    >
      <Box
        sx={{
          width: "80vw",
          py:5,
          px:{xs:0,md:2},
          borderRadius: "0px",
          // background: 'linear-gradient(180deg,rgb(255, 255, 255) 0%,#ecf6fb 90%)',
          // my: 5,
        }}
      >
        <Box sx={{ width: "79vw" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 4,
              color: "#333333",
              fontSize:{xs:"2rem",md:"3rem"}
            }}
          >
            Opportunity for Change
          </Typography>

          <Grid container spacing={3}>
            {data.statistics.map((stat, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#e3f1f8",
                    borderRadius: "15px",
                    padding: "20px",
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#0F99C3",
                      marginBottom: 1,
                      fontSize:{xs:"1.5rem",md:"2.25rem"}
                    }}
                  >
                    {stat.numericTitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555555",
                      fontSize: "1rem",
                    }}
                  >
                    {stat.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
