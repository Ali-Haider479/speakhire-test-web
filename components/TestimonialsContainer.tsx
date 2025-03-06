import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Testimonial from './Testimonial';

interface TestimonialData {
  statement: string;
  personName: string;
  designation: string;
  videoUrl: string;
  avatarUrl?: string;
}

interface TestimonialsContainerProps {
  title: string;
  highlightedWord: string;
  testimonials: TestimonialData[];
}

const TestimonialsContainer: React.FC<TestimonialsContainerProps> = ({
  title,
  highlightedWord,
  testimonials
}) => {
  // Split the title to highlight the specific word
  const titleParts = title.split(highlightedWord);
  
  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* Title with highlighted word */}
      <Typography variant="h2" component="h1" sx={{ 
        fontSize: { xs: '2rem', md: '3rem' }, 
        fontWeight: 400,
        mb: 6,
        textAlign: 'left'
      }}>
        {titleParts[0]}
        <Typography component="span" sx={{ 
          color: '#00a6d9', // Blue color for the highlighted word
          fontWeight: 400,
          fontSize: 'inherit'
        }}>
          {highlightedWord}
        </Typography>
        {titleParts[1]}
      </Typography>
      
      {/* First testimonial - with video on left, text on right */}
      <Box sx={{ mb: 6 }}>
        {testimonials.length > 0 && (
          <Testimonial
            textOnLeft={false}
            statement={testimonials[0].statement}
            personName={testimonials[0].personName}
            designation={testimonials[0].designation}
            videoUrl={testimonials[0].videoUrl}
            avatarUrl={testimonials[0].avatarUrl}
          />
        )}
      </Box>
      
      {/* Second testimonial - with text on left, video on right */}
      <Box sx={{ mb: 6 }}>
        {testimonials.length > 1 && (
          <Testimonial
            textOnLeft={true}
            statement={testimonials[1].statement}
            personName={testimonials[1].personName}
            designation={testimonials[1].designation}
            videoUrl={testimonials[1].videoUrl}
            avatarUrl={testimonials[1].avatarUrl}
          />
        )}
      </Box>
    </Container>
  );
};

export default TestimonialsContainer;