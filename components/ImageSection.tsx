"use client"; // Marks this component as client-side only

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  useTheme 
} from '@mui/material';
import Image from 'next/image';


const ImageSection = (imageSrc:any) => {
  const fullImageSrc = imageSrc 
    ? (process.env.NEXT_PUBLIC_STRAPI_URL+imageSrc.imageSrc)
    : "/stock1.jpg"; // Fallback image if `imageSrc` is undefined
  // Ensure imageSrc is a valid path
  const [dimensions, setDimensions] = useState({
    width: 78 * (typeof window !== 'undefined' ? window.innerWidth / 100 : 1248), // Default width for SSR (78vw)
    height: 89 * (typeof window !== 'undefined' ? window.innerHeight / 100 : 801), // Default height for SSR (89vh)
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: 78 * window.innerWidth / 100, // 78vw
        height: 89 * window.innerHeight / 100, // 89vh
      });

      const handleResize = () => {
        setDimensions({
          width: 78 * window.innerWidth / 100,
          height: 89 * window.innerHeight / 100,
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize); // Cleanup
    }
  }, []);

  return (
    <Box 
      sx={{
        width: '100%',
        height: 'auto', // Adjust height as needed
        background: 'linear-gradient(to bottom, #F2FAFD 50%, #FFFFFF 50%)', // Light blue top 50%, white bottom 50%
        borderTopLeftRadius: '16px', // Top-left border radius
        borderTopRightRadius: '16px', // Top-right border radius
        overflow: 'hidden', // Ensures the image stays within rounded corners
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box 
        sx={{
          width: '80vw', // Adjust width as needed
          height: '89vh', // Adjust height as needed
          backgroundColor: '#08547A1A', // Solid white background for the inner box (fully opaque)
          borderRadius: '60px', // Rounded corners for the inner box
          overflow: 'hidden', // Ensures the image stays within rounded corners
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional shadow for the inner box
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          padding:1.5
        }}
      >
        <Image
          src={fullImageSrc} // Replace with the actual path to your image
          alt="Group discussion"
          width={dimensions.width} // Use dynamic width from state
          height={dimensions.height} // Use dynamic height from state
          style={{ 
            borderRadius: '44px',
            objectFit: 'cover' // Ensures the image covers the container without distortion
          }} // Matches the inner box's rounded corners
        />
      </Box>
    </Box>
  );
};

export default ImageSection;