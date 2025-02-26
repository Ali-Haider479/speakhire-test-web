'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// Styled components for the background
const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #F2FAFD 50%, #ffffff 50%)',
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const WhiteSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '60%',
  background: '#ffffff',
  borderTopLeftRadius: '40px',
  borderTopRightRadius: '40px',
  zIndex: 0,
}));

// Styled component for the main card with the specific rounded corners
const RoundedContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '80vw', // 80% of the viewport width
  marginLeft: '-8vw', // Add left margin to center it horizontally
  borderRadius: '40px',
  border: '10px solid rgb(195, 206, 211)',
  overflow: 'hidden',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#ffffff',
}));

// Inner content of the curved card (where the image will go)
const CardContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  overflow: 'hidden',
  height: '89vh',
  borderRadius: '32px',
  backgroundColor: '#f0f0f0', // Placeholder for the image background
}));

// Text styling
const SpeakHighlight = styled('span')({
  color: '#0B72B9',
  fontWeight: 700,
});

// Container for the breadcrumb navigation
const BreadcrumbContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
});

// Container for the title
const TitleContainer = styled(Box)({
  textAlign: 'center',
  marginBottom: '24px',
});

const BuildingLeaders: React.FC = () => {
  return (
    <GradientBackground>
      <WhiteSection />
      <Container maxWidth="lg">
        <BreadcrumbContainer>
          <Typography variant="body1" component="div">
            <Box component="span" sx={{ mr: 1 }}>
              <a href="/" style={{ color: '#0B72B9', textDecoration: 'none' }}>Home</a>
            </Box>
            /
            <Box component="span" sx={{ ml: 1, color: '#666' }}>
              About us
            </Box>
          </Typography>
        </BreadcrumbContainer>

        <TitleContainer>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
            About <SpeakHighlight>SPEAKHIRE</SpeakHighlight>: Building leaders
          </Typography>
        </TitleContainer>

        <RoundedContainer>
          <CardContent>
            {/* This is where your image will go */}
            <Image
              src="/stock1.jpg"
              alt="SPEAKHIRE team members in conversation"
              layout="fill"
              objectFit="cover"
            />
          </CardContent>
        </RoundedContainer>
      </Container>
    </GradientBackground>
  );
};

export default BuildingLeaders;