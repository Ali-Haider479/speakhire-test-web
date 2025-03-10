'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';

interface PartnershipBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  tagline?: string;
  onButtonClick?: () => void;
}

const PartnershipBanner: React.FC<PartnershipBannerProps> = ({
  title = "Together",
  subtitle = "we're building the workforce of tomorrow",
  buttonText = "Become a partner now",
  tagline = "Join hands with SPEAKHIRE to empower students with the skills they need and the talent your industry deserves",
  onButtonClick = () => {},
}) => {
  return (
    <Box sx={{ 
      width: '100%', 
      bgcolor: '#F2FAFD', 
      py: 5,
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box sx={{ 
          textAlign: 'center', 
          mb: 4,
        }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 500,
              mb: 2,
              lineHeight: 1.2
            }}
          >
            <Box component="span" sx={{ color: '#0a98b5' }}>{title}</Box>
            <Box component="span" sx={{ color: '#222' }}>{` ${subtitle}`}</Box>
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '1rem', md: '1.2rem' },
              mb: 4,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            {tagline}
          </Typography>
          
          <Button 
            variant="contained" 
            onClick={onButtonClick}
            sx={{ 
              bgcolor: '#0a5275',
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'none',
              '&:hover': {
                bgcolor: '#08415e'
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PartnershipBanner;