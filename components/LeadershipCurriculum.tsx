'use client'
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, CardActions, Chip } from '@mui/material';
import Image from 'next/image';

// Define the course type
interface CourseType {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
  image: string;
  cohortType: string;
}

// Define the courses data
const coursesData: CourseType[] = [
  {
    id: '1',
    title: 'Discovering',
    titleHighlight: 'Leadership',
    description: 'Through the Discovering Leadership course, participants discover how 10 leadership skills are exhibited within different career sectors...',
    image: '/stock1.jpg',
    cohortType: 'Arts Career Cohort',
  },
  {
    id: '2',
    title: 'Inspiring',
    titleHighlight: 'Leaders',
    description: 'Through the Inspiring Leadership course, participants discover the 10 leadership skills, just as in our Discovering Leadership course...',
    image: '/stock2.jpg',
    cohortType: 'Arts Career Cohort',
  },
  {
    id: '3',
    title: 'Building',
    titleHighlight: 'Leadership',
    description: 'Through the Building Leadership course, participants will use the 10 leadership skills to learn financial literacy and how to manage a personal budget. Led by a Career Pathways F...',
    image: '/stock1.jpg',
    cohortType: '',
  },
  {
    id: '4',
    title: 'Activating',
    titleHighlight: 'Leadership',
    description: 'Through the Activating Leadership course, participants learn 10 leadership skills by activating their civic leadership within their o...',
    image: '/stock2.jpg',
    cohortType: '',
  },
  {
    id: '5',
    title: 'Empowering',
    titleHighlight: 'Leadership',
    description: 'Through the Empowering Leadership course, participants reflect on their experiences to empower their leadership. A Career Pathways...',
    image: '/stock1.jpg',
    cohortType: '',
  },
];

export default function LeadershipCurriculum() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#E6F2F9', // Matching the background color from your component
        padding: '60px 0',
      }}
    >
      <Box
        sx={{
          width:"80vw",
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 400, // Matching the font weight from your component
              display: 'inline',
            }}
          >
            Leadership Course{' '}
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: 400, // Matching the font weight
                color: '#0F99C3', // Using the exact blue color from your component
              }}
            >
              Curriculum
            </Typography>
          </Typography>
        </Box>

        {/* Course Grid */}
        <Grid container spacing={4}>
          {coursesData.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Card 
                elevation={0} 
                sx={{ 
                  backgroundColor: 'transparent',
                  borderRadius: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Course Image Container */}
                <Box sx={{ position: 'relative', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src={course.image}
                    alt={`${course.title} ${course.titleHighlight}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                
                {/* Course Content */}
                <CardContent sx={{ flexGrow: 1, px: 0, pt: 2 }}>
                  {/* Cohort Type (if any) */}
                  {course.cohortType && (
                    <Chip 
                      label={course.cohortType} 
                      size="small" 
                      sx={{
                        backgroundColor: '#E6F2F9',
                        color: '#0F99C3',
                        fontSize: '0.75rem',
                        height: '24px',
                        marginBottom: '10px',
                        borderRadius: '4px',
                      }}
                    />
                  )}
                  
                  {/* Course Title with Highlighted Word */}
                  <Box display="flex" flexWrap="wrap" alignItems="baseline" mb={1}>
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        fontWeight: 400,
                        mr: 1,
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        fontWeight: 400,
                        color: '#0F99C3',
                      }}
                    >
                      {course.titleHighlight}
                    </Typography>
                  </Box>
                  
                  {/* Course Description */}
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: 16, // Matching your fontSize pattern
                    }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>
                
                {/* Read More Button */}
                <CardActions sx={{ justifyContent: 'center', px: 0 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: '20px', // Matching your button style
                      borderColor: '#0F99C3',
                      color: '#0F99C3',
                      padding: '8px 24px',
                      '&:hover': {
                        backgroundColor: 'rgba(15, 153, 195, 0.1)',
                        borderColor: '#0F99C3',
                      },
                      width: '100%'
                    }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontSize: 16, 
                        fontWeight: 400, 
                        textTransform: 'none' // Matching your button text style
                      }}
                    >
                      Read more
                    </Typography>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}