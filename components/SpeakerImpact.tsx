'use client'
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SpeakerImpact() {
  // Speaker data
  const speakers = [
    { id: 1, imageUrl: '/stock1.jpg', alt: 'Speaker 1', offsetY: 0 },
    { id: 2, imageUrl: '/stock2.jpg', alt: 'Speaker 2', offsetY: 5 },
    { id: 3, imageUrl: '/stock1.jpg', alt: 'Speaker 3', offsetY: 0 },
    { id: 4, imageUrl: '/stock2.jpg', alt: 'Speaker 4', offsetY: 5 },
    { id: 5, imageUrl: '/stock1.jpg', alt: 'Speaker 5', offsetY: 0 },
    { id: 6, imageUrl: '/stock2.jpg', alt: 'Speaker 6', offsetY: 5 },
    { id: 7, imageUrl: '/stock1.jpg', alt: 'Speaker 7', offsetY: 0 },
    { id: 8, imageUrl: '/stock2.jpg', alt: 'Speaker 8', offsetY: 5 },
    { id: 9, imageUrl: '/stock1.jpg', alt: 'Speaker 9', offsetY: 0 },
    { id: 10, imageUrl: '/stock2.jpg', alt: 'Speaker 10', offsetY: 5 },
    { id: 11, imageUrl: '/stock1.jpg', alt: 'Speaker 11', offsetY: 0 },
    { id: 12, imageUrl: '/stock2.jpg', alt: 'Speaker 12', offsetY: 5 },
  ];

  return (
    <Box sx={{ textAlign: 'center', py: 8, width: '100%', mx: 'auto' }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 400,
          marginBottom: 1,
        }}
      >
        How <span style={{ color: '#005776' }}>SPEAKHIRE</span> speakers impact lives
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: 4,
          fontSize: 20
        }}
      >
        Watch our speakers here
      </Typography>
      
      {/* Speaker images container with zig-zag pattern */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 220,
          overflowX: 'auto',
          margin: '40px 0',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          scrollbarWidth: 'none',
        }}
      >
        <Box 
          sx={{ 
            display: 'flex',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max-content'
          }}
        >
          {speakers.map((speaker) => (
            <Box
              key={speaker.id}
              sx={{
                width: 100,
                height: 180,
                borderRadius: 100,
                overflow: 'hidden',
                position: 'relative',
                marginTop: speaker.offsetY,
                marginRight: 1.5,
                marginLeft: 1.5,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Image
                src={speaker.imageUrl}
                alt={speaker.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="100px"
                priority={speaker.id <= 6}
              />
            </Box>
          ))}
        </Box>
      </Box>
      
      <Button
        variant="outlined"
        startIcon={<YouTubeIcon />}
        sx={{
          borderRadius: '20px',
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 500,
          border: '2px solid #005776',
          color: '#005776',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(0, 87, 118, 0.04)',
            borderColor: '#005776',
          }
        }}
      >
        <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 'normal', textTransform: 'none' }}>
          Watch on YouTube
        </Typography>
      </Button>
    </Box>
  );
}