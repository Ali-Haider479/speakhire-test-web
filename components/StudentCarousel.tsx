'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface TestimonialType {
  id: number;
  name: string;
  year: string;
  text: string;
  image?: string;
}

const StudentCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: 'Stacy',
      year: '18',
      text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me."
    },
    {
      id: 2,
      name: 'Afrida',
      year: '20',
      text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me."
    },
    {
      id: 3,
      name: 'Dayra',
      year: '21',
      text: "This is my second year in SPEAKHIRE's Foundational Year, and I'm excited to work with more career professionals in business who can help me choose the right business career pathway for my future. As a SPEAKHIRE intern, I gained valuable skills and information my first year and know I'll be able to continue to work on skills that I can apply at a future job and gain more information about colleges and careers that are right for me."
    },
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: '32px 16px' }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 700,
            marginBottom: 2,
            '& span': { color: '#2196f3' }
          }}
        >
          Student <span>Success Stories</span>
        </Typography>
        <Typography 
          sx={{ 
            color: '#666',
            fontSize: '1.1rem'
          }}
        >
          Explore real-life success stories from our students that have achieved remarkable results
        </Typography>
      </Box>

      {/* Carousel Section */}
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        position: 'relative'
      }}>
        <IconButton 
          onClick={handlePrevious}
          sx={{
            backgroundColor: '#2196f3',
            color: 'white',
            '&:hover': { backgroundColor: '#1976d2' }
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box sx={{ 
          display: 'flex',
          gap: 3,
          overflow: 'hidden'
        }}>
          {testimonials.map((testimonial, index) => (
            <Paper
              key={testimonial.id}
              elevation={index === activeIndex ? 4 : 1}
              sx={{
                width: 400,
                padding: 3,
                backgroundColor: index === activeIndex ? '#E9F6FB' : '#fff',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)',
                opacity: index === activeIndex ? 1 : 0.7,
                '&:hover': {
                  transform: index === activeIndex ? 'scale(1.05)' : 'translateY(-5px)'
                }
              }}
            >
              <Avatar 
                sx={{
                  width: 80,
                  height: 80,
                  margin: '0 auto 16px',
                  backgroundColor: '#e3f2fd'
                }}
              />
              <Typography 
                sx={{ 
                  textAlign: 'center',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  marginBottom: 1
                }}
              >
                {testimonial.name} '{testimonial.year}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#666',
                  textAlign: 'center',
                  fontSize: '0.875rem'
                }}
              >
                {testimonial.text}
              </Typography>
            </Paper>
          ))}
        </Box>

        <IconButton 
          onClick={handleNext}
          sx={{
            backgroundColor: '#2196f3',
            color: 'white',
            '&:hover': { backgroundColor: '#1976d2' }
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StudentCarousel;