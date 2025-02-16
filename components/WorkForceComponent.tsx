'use client';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#E9F6FB',
  borderRadius: theme.spacing(4),
  maxWidth: '80%',    // add this to make content narrower
  margin: '0 auto',   // add this to center the content
}));
const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 'auto',
  marginTop: theme.spacing(2),
  '& img': {
    borderRadius: theme.spacing(1),
  },
}));

const WorkforceComponent = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {/* Text Content Section */}
      <Grid item xs={12} md={6}>
        <StyledPaper elevation={0}>
          <Typography variant="h4" gutterBottom>
            Where today's workforce{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              develop
            </Box>
          </Typography>
          <Typography variant="h4" gutterBottom>
            tomorrow's workforce{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              leaders
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, mb: 3 }}>
            We support career awareness, exploration preparation and training of those looking to
            pursue a career.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              textTransform: 'none',
              alignSelf: 'flex-start',
              borderRadius: 2,
            }}
          >
            View intern programs →
          </Button>
        </StyledPaper>
      </Grid>

      {/* Video Call Image Section */}
      <Grid item xs={12} md={6}>
        <ImageContainer>
          <Box sx={{ position: 'relative', paddingTop: '75%' }}>
            <Image
              src="/work-force.png"  // Add your video call grid image source here
              alt="Video call grid"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </ImageContainer>
      </Grid>
    </Grid>
  );
};

export default WorkforceComponent;