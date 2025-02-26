'use client';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import WorkforceCard from './WorkforceCard';

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%', // Ensures the container fills the grid cell height
  '& img': {
    borderRadius: theme.spacing(1),
  },
}));

const WorkforceComponent = () => {
  return (
    <Box sx={{
      backgroundColor: '#F2FAFD',
      py: 2
    }}>
      <Grid
        container
        rowSpacing={4} // Vertical spacing remains the same
        columnSpacing={8} // Increased horizontal spacing between the two columns
        sx={{
          width: '80vw', // Parent grid width is 80vw
          mx: 'auto',   // Centers the grid horizontally
          alignItems: 'stretch', // Ensures both grid items are the same height
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {/* WorkforceCard Section (40% on md and up, 100% on xs) */}
        <Grid
          xs={12}
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 40%' },
            maxWidth: { xs: '100%', md: '40%' },
            display: 'flex',
          }}
        >
          <WorkforceCard />
        </Grid>

        {/* Image Section (60% on md and up, 100% on xs) */}
        <Grid
          xs={12}
          sx={{
            flex: { xs: '0 0 100%', md: '0 0 60%' },
            maxWidth: { xs: '100%', md: '60%' },
            display: 'flex',
          }}
        >
          <ImageContainer>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src="/work-force.png" // Replace with your actual image source
                alt="Video call grid"
                fill
                style={{ objectFit: 'cover', borderRadius: 40 }}
              />
            </Box>
          </ImageContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkforceComponent;