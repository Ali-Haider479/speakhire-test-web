'use client'
import React from 'react';
import { Box, Typography, Grid, } from '@mui/material';
import CourseCard from './CourseCard';

// Define the course type
interface CourseType {
  id: string;
  title: string;
  description: string;
  cover_image: any;
  cohortType?: string;
  outcomes:any[]
}

// Define the courses data
const coursesData = [
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

interface LeadershipCurriculumProps{
  data:{
    title:string,
    leadership_courses:CourseType[]
  }
}

export default function LeadershipCurriculum({data}:LeadershipCurriculumProps) {
  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 2).join(" ");
    const highlightedWord = words[2];

    return (
      <>
        {firstWords}{" "}
        <span style={{ color: "#0F99C3" }}>{highlightedWord}</span>{" "}
      </>
    );
  };
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#F2FAFD', // Matching the background color from your component
        padding: '60px 0',
        mt:5
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
            {HighlightText(data.title)}
          </Typography>
        </Box>

        {/* Course Grid */}
        <Grid container spacing={4}>
          {data.leadership_courses.map((course) => (
            <CourseCard course={course}/>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}