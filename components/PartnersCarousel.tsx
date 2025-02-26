"use client"; // Marks this component as client-side only

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, IconButton, SxProps, Theme, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Sample data for partner testimonials
const testimonials = [
    {
        logo: '/partner1.png',
        name: 'IDEA Public Schools',
        title: 'Enrichment Activities Director',
        testimonial:
            'The Empowering Leadership Course is one of the most beneficial programs I\'ve seen for our students across all our schools because it teaches 21st Century skills and concepts while improving the self-efficacy of students through the diverse professionals of the Speaker Series you connect them with, helping them see themselves in future careers.',
    },
    {
        logo: '/partner2.png',
        name: 'Frankford High School',
        title: 'Assistant Principal',
        testimonial:
            'This is so great that the Foundational Year gets our students started early with the college and career exposure and pathways because they need to start thinking about that and they usually don\'t get this information in such a targeted way early enough. Connecting with professionals who are dedicating their time is a great experience for them so they know there are supportive people out there willing to help.',
    },
    {
        logo: '/partner3.png',
        name: 'Frankford High School',
        title: 'Assistant Principal',
        testimonial:
            'This is so great that the Foundational Year gets our students started early with the college and career exposure and pathways because they need to start thinking about that and they usually don\'t get this information in such a targeted way early enough. Connecting with professionals who are dedicating their time is a great experience for them so they know there are supportive people out there willing to help.',
    },
    // Add more testimonials as needed
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2, // Show 2 cards at once
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1, // Show 1 card on smaller screens
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Show 1 card on mobile
    },
};

// Type for the arrow button props from react-multi-carousel
interface ArrowProps {
    onClick?: () => void; // Make onClick optional since it can be undefined in some cases
  }
  
  // Custom arrow components with TypeScript types
const CustomLeftArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick} // Ensure onClick is passed and functional
      sx={{
        // backgroundColor: '#CEDDE4', // Light blue background to match the reference image
        border: '1px solid gray', // Use `border` instead of `borderColor` for a gray border
        color: '#08547A', // Blue icon color
        borderRadius: '50%', // Circular button
        width: 50,
        height: 50,
        '&:hover': {
          backgroundColor: '#074b6d', // Darker blue on hover
          color: '#FFFF', // White icon on hover
        },
        marginRight: '10px', // Space between arrows
      } as SxProps<Theme>} // Type for MUI sx prop
    >
      <ArrowBackIcon sx={{ fontSize: 20 }} />
    </IconButton>
  );
  
  const CustomRightArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick} // Ensure onClick is passed and functional
      sx={{
        // backgroundColor: '#CEDDE4', // Light blue background to match the reference image
        border: '1px solid gray', // Use `border` instead of `borderColor` for a gray border
        color: '#08547A', // Blue icon color
        borderRadius: '50%', // Circular button
        width: 50,
        height: 50,
        '&:hover': {
          backgroundColor: '#074b6d', // Darker blue on hover
          color: '#FFFF', // White icon on hover
        },
      } as SxProps<Theme>} // Type for MUI sx prop
    >
      <ArrowForwardIcon sx={{ fontSize: 20 }} />
    </IconButton>
  );
  
export default function PartnersCarousel() {
    return (
        <Box sx={{ padding: '40px 0', backgroundColor: '#F2FAFD', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '80vw', textAlign: 'center' }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    centerMode={false} // Disable center mode for better alignment
                    arrows={false} // Hide default arrows (we'll use custom arrows)
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: '#E6F2F9',
                                borderRadius: '15px',
                                padding: '20px',
                                boxShadow: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: '80%',
                                height: '480px', // Fixed height for consistency
                                margin: '0 auto',
                            }}
                        >
                            <Image
                                src={testimonial.logo}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                objectFit="contain"
                                style={{ marginBottom: '20px', marginLeft: 0 }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    marginBottom: '15px',
                                }}
                            >
                                Exceptional performance
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: 'left',
                                    marginBottom: '15px',
                                    fontSize: 15,
                                    height: '150px', // Fixed height for testimonial content
                                    overflow: 'hidden', // Hide overflow text if it exceeds the height
                                    textOverflow: 'ellipsis', // Add ellipsis for truncated text
                                    display: '-webkit-box',
                                    WebkitLineClamp: 6, // Limit to 6 lines
                                    WebkitBoxOrient: 'vertical',
                                }}
                            >
                                {testimonial.testimonial}
                            </Typography>
                            <Box sx={{ borderLeft: '1px solid #0D5C75', mt: 2 }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#0C111D',
                                        textAlign: 'left',
                                        paddingLeft: 1,
                                        fontSize: 20
                                    }}
                                >
                                    {testimonial.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#49454F',
                                        textAlign: 'left',
                                        paddingLeft: 1,
                                        fontSize: 15
                                    }}
                                >
                                    {testimonial.name}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {/* Navigation buttons positioned underneath the carousel */}
                    <CustomLeftArrow />
                    <CustomRightArrow />
                </Box>
            </Box>
        </Box>
    );
}