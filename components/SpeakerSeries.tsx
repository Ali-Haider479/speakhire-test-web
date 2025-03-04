'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Grid 
} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';

// Speaker data type
interface Speaker {
  id: number;
  name: string;
  lastName: string;
  title: string;
  description: string;
  image: string;
  youtubeLink: string;
}

// Sample speaker data
const speakers: Speaker[] = [
  {
    id: 1,
    name: "CAROLINA",
    lastName: "JANNICELLI",
    title: "Leader | Entrepreneur",
    description: "Carolina shares how she found her voice and made sure to use it in order to find her place as a leader in an industry dominated by men.",
    image: "/stock1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    name: "DR. EDMUND",
    lastName: "ADJAPONG",
    title: "Leader | Entrepreneur",
    description: "Dr. Edmund Adjapong, a native of the Bronx, NY, is an assistant professor in the Education Studies Department at Seton Hall University.",
    image: "/stock2.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    name: "KIM",
    lastName: "LE",
    title: "Leader | Entrepreneur",
    description: "Kim escaped Vietnam as a refugee to becoming a successful entrepreneur, proving the American Dream is possible!",
    image: "/stock1.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=example3"
  }
];

const SpeakerSeries: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Header Section */}
      <Box sx={{ mb: 5 }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 400, 
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          <Box component="span" sx={{ color: '#000' }}>Global</Box>{' '}
          <Box component="span" sx={{ color: '#005776' }}>Leaders</Box>
          <Box component="span" sx={{ color: '#000' }}>,</Box>{' '}
          <Box component="span" sx={{ color: '#000' }}>Local</Box>{' '}
          <Box component="span" sx={{ color: '#005776' }}>Heroes</Box>
          <Box component="span" sx={{ color: '#000' }}>:</Box>
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 400, 
            fontSize: { xs: '1.75rem', md: '2.5rem' }
          }}
        >
          A Year of Inspiration
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: '900px', lineHeight: 1.6 }}>
          SPEAKHIRE puts up a virtual Speaker Series open to all. Each year from September to June, we present incredible speakers 
          who have overcome many obstacles, identified opportunities, and persevered to reach career success. Our speakers 
          predominantly come from immigrant backgrounds and are very close to the cultures of their countries of origin. We feature one 
          speaker per month through a webinar that is recorded for later viewing purposes for a larger audience. All of our speaker 
          events can be viewed on our YouTube channel.
        </Typography>
      </Box>

      {/* Speaker Cards */}
      <Grid container spacing={3}>
        {speakers.map((speaker) => (
          <Grid item xs={12} md={4} key={speaker.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'visible',
                bgcolor: '#f5f9fc'
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={speaker.image}
                alt={`${speaker.name} ${speaker.lastName}`}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, px: 3, py: 3 }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div" 
                  sx={{ fontWeight: 400, fontSize: '1.4rem', mb: 0.5 }}
                >
                  <Box component="span" sx={{ color: '#000' }}>{speaker.name}</Box>{' '}
                  <Box component="span" sx={{ color: '#005776' }}>{speaker.lastName}</Box>
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  color="text.secondary"
                  sx={{ mb: 2, fontWeight: 400 }}
                >
                  {speaker.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem' }}>
                  {speaker.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  startIcon={<YouTubeIcon />}
                  sx={{ 
                    borderRadius: '20px',
                    padding: '10px 24px',
                    textTransform: 'none',
                    fontWeight: 400,
                    border: '2px solid #0097cc',
                    color: '#0097cc',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 87, 118, 0.04)',
                      borderColor: '#005776'
                    }
                  }}
                  href={speaker.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 'normal', textTransform: 'none' }}>
                    Watch on YouTube
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SpeakerSeries;