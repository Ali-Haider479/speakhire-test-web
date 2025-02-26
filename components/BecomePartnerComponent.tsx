import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export default function BecomePartnerComponent() {
    return (
        <Box
            sx={{
                width: '80vw', // 80% of the screen width
                height: '586px', // Set a height for the box
                borderRadius: '40px', // Border radius
                backgroundColor: '#E6F2F9', // Background color
                margin: 'auto', // Centers the box horizontally
                display: 'flex', // To align child boxes in a row
                justifyContent: 'space-between', // Space between the children
                alignItems: 'center', // Center items vertically
                my: 10, // Vertical margin
            }}
        >
            {/* First child box - takes 45% of the width */}
            <Box
                sx={{
                    width: '40%', // Width adjusted
                    backgroundColor: '#E6F2F9', // Light background color to match the image
                    borderRadius: '20px', // Rounded corners to match the image
                    padding: 3, // Add padding for spacing
                    display: 'flex',
                    flexDirection: 'column', // Stack the elements vertically
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    height: '100%', // Ensures the box stretches to full height
                    paddingLeft: 5
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 400,
                        marginBottom: 1,
                    }}
                >
                    <span style={{color:'#0F99C3'}}>Partner with us{" "}</span>
                    to help future talent succeed
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: 2,
                        fontSize: 20
                    }}
                >
                    Your support helps individuals from immigrant families build the confidence.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#0D5C75', // Button color
                        borderRadius: '20px',
                        padding: '10px 30px',
                        '&:hover': {
                            bgcolor: '#0A4A5E', // Darker hover effect
                        },
                        marginTop: 2
                    }}
                >
                    <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 'bold', textTransform: 'none' }}>
                        Become a partner now
                    </Typography>
                </Button>
            </Box>

            {/* Second child box - takes 55% of the width */}
            <Box sx={{ width: '60%', position: 'relative', height: '100%' }}>
                <Image
                    src="/stock2.jpg" // Replace with your actual image source
                    alt="partner-image"
                    layout="fill" // Make the image fill the parent container
                    objectFit="cover" // Ensure the image covers the entire area
                    style={{ borderRadius: '40px' }}
                />
            </Box>
        </Box>
    );
}
