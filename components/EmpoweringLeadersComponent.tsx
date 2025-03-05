import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function EmpoweringLeadersComponent() {
  // List items for the bullet points
  const programFeatures = [
    "Students seeking career exposure",
    "Requires a minimum of 10 sessions",
    "Sessions are between 45 minutes to 3 hours",
    "Between 20 - 30 students depending on course"
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#F5F8FA', // Light blue background
        borderRadius: '30px',
        p: { xs: 3, md: 6 },
        my: 4,
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      {/* Main Title Section */}
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontWeight: 400,
          color: '#333',
          mb: 1,
          fontSize: { xs: '26px', sm: '32px', md: '40px' },
          lineHeight: 1.2,
        }}
      >
        Empowering Tomorrow's{' '}
        <Typography
          variant="h3"
          component="span"
          sx={{
            fontWeight: 400,
            color: '#0F99C3', // Blue color for "Leaders"
            fontSize: 'inherit',
          }}
        >
          Leaders
        </Typography>
        :
      </Typography>

      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: 400,
          color: '#333',
          mb: 3,
          fontSize: { xs: '26px', sm: '32px', md: '40px' },
          lineHeight: 1.2,
        }}
      >
        DBEIA Leadership Program
      </Typography>

      {/* Program Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#555',
          mb: 4,
          fontSize: '16px',
          lineHeight: 1.6,
        }}
      >
        Named after the values we hold around DBEIA, our Leadership Courses introduce students to early and critical leadership skills. Through each course, students learn the leadership skills listed below through different applications to ensure they understand how these skills are exhibited within various industries.
      </Typography>

      {/* Content Grid: Text Left, Image Right */}
      <Grid container spacing={4} alignItems="center">
        {/* Left side - Text content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              mb: 4,
              fontSize: '16px',
              lineHeight: 1.6,
            }}
          >
            We have five courses, spanning from our Discovering Leadership, for our students just beginning to discover the world of career pathways and leadership, and ending with our Empowering Leadership course, for our students who have already been exploring career pathways and are looking to further step into their leadership. The Discovering Leadership course is a pre-requisite to some courses*.
          </Typography>

          {/* Bullet points with custom icons */}
          <Box sx={{ mt: 2 }}>
            {programFeatures.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 2,
                }}
              >
                <CheckCircleOutlineIcon
                  sx={{
                    color: '#0F99C3',
                    mr: 1,
                    mt: '3px',
                    fontSize: '20px',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#555',
                    fontSize: '16px',
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        
        {/* Right side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: '300px', md: '400px' },
              borderRadius: '15px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/stock1.jpg"
              alt="Students collaborating on a leadership activity"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}