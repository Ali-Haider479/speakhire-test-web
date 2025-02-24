import { Box, Typography, Grid } from '@mui/material';
import React from 'react';

export default function OpportunityForChangeComponent() {
  const stats = [
    {
      percentage: '>70%',
      description: 'jobs are identified primarily through network connections.'
    },
    {
      percentage: '45%',
      description: 'of those network connections are family connections (immigrant families don\'t have as strong connections)'
    },
    {
      percentage: '>50%',
      description: 'of all first jobs are received through internships people hold – but, our population of individuals do not hold these internships.'
    },
    {
      percentage: '85%',
      description: 'of internships are identified through network connections'
    },
    {
      percentage: '1:600',
      description: 'is the average school counselor to student ratio reach, especially in high needs schools, when the recommended is 1:250 students applying to and accepted into more target colleges than continuing-gen peers in higher ratio schools'
    },
    {
      percentage: '1:250',
      description: 'counselor to student ratio results in an 18 point increase on each SAT section and lower ratios result in first-gen college going students applying to and accepted into more target colleges than continuing-gen peers in higher ratio schools'
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#F2FAFD',
        padding: '30px',
        borderRadius: '0px',
        marginBottom: 5,
        display: 'flex',               // Set to flex to align content
        justifyContent: 'center',      // Center content horizontally
        alignItems: 'center',          // Center content vertically
      }}
    >
      <Box sx={{ width: '80vw', }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            marginBottom: 4,
            marginLeft: 3,
            color: '#333333',
          }}
        >
          Opportunity for Change
        </Typography>

        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#E4F5FB',
                  borderRadius: '15px',
                  padding: '20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 'bold',
                    color: '#08547A',
                    marginBottom: 1,
                  }}
                >
                  {stat.percentage}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#49454F',
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
  );
}
