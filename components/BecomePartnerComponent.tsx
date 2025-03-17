import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface BecomePartnerComponentProps{
    data: {
        title: string;
        description: string;
        cover_image: any;
        button:any
      };
}

export default function BecomePartnerComponent({data}:BecomePartnerComponentProps) {
    const HighlightText = (text: string) => {
        if (text?.length > 0) {
          const words = text.split(" ");
          const firstPart = words.slice(0,3).join(" ");;
          const secondPart = words.slice(3).join(" ");
    
          return (
            <p>
                 
              <span style={{ color: "#0F99C3" }}> {firstPart} </span> 
              {secondPart}
            </p>
          );
        } else {
          return "";
        }
      }
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
                    {HighlightText(data?.title)}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: 2,
                        fontSize: 20
                    }}
                >
                    {data?.description}
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
                        marginTop: 2,
                        textTransform:"none",
                        fontWeight:"bold",
                        fontSize:16                       
                    }}
                >
                    {data?.button?.inner_text}
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
