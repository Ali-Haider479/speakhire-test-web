"use client"
import { Box, Container } from "@mui/material";

// Custom styles for consistent 80vw layout
const containerStyle = {
  width: '80vw',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  boxSizing: 'border-box',
};

import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box>
      <Container sx={containerStyle} disableGutters>
        {children}
      </Container>
    </Box>
  );
}