import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';

export default function EcoSytemAbout() {
    return (
        <Box
            sx={{
                width: '80vw', // 80% of the screen width
                height: '70vh', // Set a height for the box
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
                    borderRadius: '40px', // Rounded corners to match the image
                    paddingY: 5, // Add padding for spacing
                    paddingX: 4,
                    display: 'flex',
                    flexDirection: 'column', // Stack the elements vertically
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    height: '100%', // Ensures the box stretches to full height
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'lightgray',
                        borderRadius: '50%',
                        color: '#08547A',
                        width: 40,
                        height: 40,
                        display: 'flex', // Enable flexbox
                        alignItems: 'center', // Center vertically
                        justifyContent: 'center', // Center horizontally
                        marginBottom: 2
                    }}
                >
                    <ExtensionOutlinedIcon />
                </Box>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 1,
                        width: 20
                    }}
                >
                    <span style={{color:'#0F99C3'}}>SPEAKHIRE{" "}</span>
                    Ecosystem
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: 2,
                        fontSize: 20
                    }}
                >
                    We bring together community resources, a network of professionals to facilitate and empower individuals from immigrant families.
                </Typography>

            </Box>

            {/* Second child box - takes 55% of the width */}
            <Box sx={{ width: '50%', position: 'relative', height: '100%' }}>
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
