'use client';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image';
import { styled } from '@mui/material/styles';


// Styled components
const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'white'
})

const DonateCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  borderRadius: '24px',
  overflow: 'hidden',
  backgroundColor: '#6AB43E',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  height: '65vh',
  width: '80vw'
}));

const ContentSection = styled(CardContent)(({ theme }) => ({
  flex: '0.3',
  padding: theme.spacing(4),
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(2),
  borderTopRightRadius: '24px',    // Add this
  borderBottomRightRadius: '24px', // Add this
}));

const DonateButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: '#6AB43E',
  padding: theme.spacing(1.5, 3),
  borderRadius: '50px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  }
}));

const ImageSection = styled(Box)({
  flex: '0.7',
  position: 'relative',
  minHeight: '400px',
  overflow: 'hidden',
  borderRadius: '24px', // Change this to round all corners
});

const DonateComponent = () => {
  const handleDonateClick = () => {
    // Handle donation logic here
    console.log('Donate button clicked');
  };

  return (
    <Container>
      <DonateCard>
        <ContentSection>
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Donate today to Change a Life Forever
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            Your support helps individuals from immigrant families build the confidence,
            skills, and networks they need to thrive in the workforce. Every contribution counts.
          </Typography>

          <DonateButton
            variant="contained"
            startIcon={<FavoriteIcon />}
            onClick={handleDonateClick}
          >
            Donate Now
          </DonateButton>
        </ContentSection>

        <ImageSection>
          <Image
            src="/donate.png" // You'll need to put your image in the public/images folder
            alt="Children sitting together"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageSection>
      </DonateCard>
    </Container>
  );
};

export default DonateComponent;