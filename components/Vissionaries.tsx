import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import React from 'react';

export default function VessionariesComponent() {
  return (
    <Box
      sx={{
        width: '100vw', // Full viewport width
        backgroundColor: '#F2FAFD', // Light background color (you can adjust this to match your design, e.g., #ECF6FB or any other color)
        padding: '20px 0', // Optional padding for spacing
        display: 'flex',
        justifyContent: 'center', // Center the inner content horizontally
        alignItems: 'center', // Center vertically if needed
      }}
    >
      <Box
        sx={{
          width: '80vw', // 80% of the screen width
          height: '586px', // Set a height for the box
          borderRadius: '40px', // Border radius
          backgroundColor: '#F2FAFD', // Background color
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
            backgroundColor: '#F2FAFD', // Light background color to match the image
            borderRadius: '20px', // Rounded corners to match the image
            padding: 3, // Add padding for spacing
            display: 'flex',
            flexDirection: 'column', // Stack the elements vertically
            // justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100%', // Ensures the box stretches to full height
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 400,
              marginBottom: 1,
            }}
          >
            <span style={{color: '#0F99C3'}}>Meet{" "}</span>
            the <br/>visionaries<br/> behind SPEAKHIRE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 2,
              fontSize: 20
            }}
          >
            Dedicated to empowering immigrant leaders, our passionate team works together to transform lives and build stronger communities.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              padding: '8px 16px',
              borderColor: '#1976d2',
              color: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                backgroundColor: 'rgba(25, 118, 210, 0.04)'
              },marginTop: '30px'
            }}
          >
            Meet our team
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
    </Box>
  );
}