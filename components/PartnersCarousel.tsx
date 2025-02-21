"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

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
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


export default function PartnersCarousel() {

    return (
        <Box sx={{ padding: '50px 0', backgroundColor: '#F2FAFD', display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    centerMode={true}
                    
                >
                    {testimonials.map((testimonial, index) => (
                        <Box
                            key={index}
                            sx={{
                                backgroundColor: '#E6F2F9',
                                borderRadius: '15px',
                                padding: '30px',
                                boxShadow: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                width: '100%',
                                height: '520px',
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
                                    fontSize: 15
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
            </Box>
        </Box>
    );
}
