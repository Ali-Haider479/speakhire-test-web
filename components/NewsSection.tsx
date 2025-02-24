'use client';

import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  styled 
} from '@mui/material';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  images: string[];
  date?: string;
}

const StyledCard = styled(Card)({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
});

const ImageGroup = styled(Box)({
  display: 'flex',
  gap: '4px',
  marginBottom: '16px',
  '& img': {
    width: 'calc(33.333% - 3px)',
    aspectRatio: '1/1',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  '& img:last-child': {
    position: 'relative',
    '&::after': {
      content: '"JUNE 16"',
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      background: '#1a237e',
      color: 'white',
      padding: '2px 8px',
      borderRadius: '4px',
      fontSize: '12px',
    },
  },
});

const ViewAllButton = styled(Button)({
  borderRadius: '25px',
  padding: '8px 32px',
  border: '1px solid #1976d2',
  color: '#1976d2',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1976d2',
    color: 'white',
  },
});

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
    {
      id: 2,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
    {
      id: 3,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
    {
      id: 4,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
    {
      id: 5,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
    {
      id: 6,
      title: '#SpeakingMyName campaign to raise awareness about impo...',
      description: 'Jani (whose name is pronounced Heh-thul Jah-nee) experienced first-hand how often times people wouldn\'t even try to say her name properly from an...',
      images: ['/stock1.jpg', '/stock2.jpg', '/stock1.jpg'],
    },
  ];

  return (
    <Box sx={{ 
      bgcolor: '#f8fafc',
      py: 8,
      px: '10%',
    }}>
      <Typography 
        variant="h2" 
        sx={{ 
          fontSize: { xs: '2rem', md: '2.75rem' },
          fontWeight: 400,
          mb: 2,
        }}
      >
        Latest news
      </Typography>

      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary',
          maxWidth: '900px',
          mb: 6,
          fontSize: '1.1rem',
          lineHeight: 1.6,
        }}
      >
        Stay informed with the latest stories, achievements, and updates from SPEAKHIRE. 
        Explore how we're empowering immigrant leaders, celebrating successes, and making 
        an impact in communities nationwide.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {newsItems.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <StyledCard>
              <ImageGroup>
                {item.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`News image ${index + 1}`}
                  />
                ))}
              </ImageGroup>
              <CardContent sx={{ p: 0 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#1976d2',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    mb: 1,
                    '&:hover': {
                      textDecoration: 'underline',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <ViewAllButton variant="outlined">
          View all news
        </ViewAllButton>
      </Box>
    </Box>
  );
};

export { NewsSection as default };