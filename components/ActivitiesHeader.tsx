// 'use client';
// import React from 'react';
// import { Box, Button, Typography, Container, Breadcrumbs, Link } from '@mui/material';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// export default function ActivitiesHeader() {
//   return (
//     <Box 
//       sx={{
//         width: '100%',
//         backgroundColor: '#F2FAFD', // Light blue background
//         padding: { xs: '40px 0', md: '60px 0' },
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Breadcrumbs */}
//         <Breadcrumbs 
//           separator={<NavigateNextIcon fontSize="small" />} 
//           aria-label="breadcrumb"
//           sx={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             mb: 3,
//             '& .MuiBreadcrumbs-ol': {
//               justifyContent: 'center',
//             }
//           }}
//         >
//           <Link 
//             color="#005776" 
//             href="/" 
//             underline="hover"
//             sx={{ 
//               fontWeight: 400,
//               fontSize: '1rem'
//             }}
//           >
//             Home
//           </Link>
//           <Typography 
//             color="text.primary"
//             sx={{ 
//               fontWeight: 400,
//               fontSize: '1rem'
//             }}
//           >
//             Activities
//           </Typography>
//         </Breadcrumbs>
        
//         {/* Title */}
//         <Typography 
//           variant="h1" 
//           component="h1"
//           sx={{ 
//             fontWeight: 400,
//             fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
//             marginBottom: 4,
//             '& .highlight': {
//               color: '#005776'
//             },
//             '& .regular': {
//               color: '#333'
//             }
//           }}
//         >
//           <span className="highlight">Speakhire</span> <span className="regular">Series</span>
//         </Typography>
        
//         {/* YouTube Button */}
//         <Button
//           variant="outlined"
//           startIcon={<YouTubeIcon />}
//           sx={{
//             borderRadius: '20px',
//             padding: '10px 24px',
//             textTransform: 'none',
//             fontWeight: 400,
//             border: '2px solid #005776',
//             color: '#005776',
//             backgroundColor: 'white',
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             '&:hover': {
//               backgroundColor: 'rgba(0, 87, 118, 0.04)',
//               borderColor: '#005776',
//             }
//           }}
//         >
//           <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 'normal', textTransform: 'none' }}>
//             Watch on YouTube
//           </Typography>
//         </Button>
//       </Container>
//     </Box>
//   );
// }

'use client';
import React from 'react';
import { Box, Button, Typography, Container, Breadcrumbs, Link } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LaunchIcon from '@mui/icons-material/Launch';

// Define the types for our props
interface ActivitiesHeaderProps {
  // Title props
  highlightedWord: string;
  regularWord: string;
  
  // Button props
  buttonConfig: {
    type: 'youtube' | 'internal';
    label: string;
    url: string;
  };
  
  // Optional breadcrumb customization
  breadcrumbLabel?: string;
}

export default function ActivitiesHeader({
  highlightedWord = 'Speakhire',
  regularWord = 'Series',
  buttonConfig = {
    type: 'youtube',
    label: 'Watch on YouTube',
    url: 'https://www.youtube.com/'
  },
  breadcrumbLabel = 'Activities'
}: ActivitiesHeaderProps) {
  
  // Determine which icon to use based on button type
  const buttonIcon = buttonConfig.type === 'youtube' 
    ? <YouTubeIcon /> 
    : <LaunchIcon />;
  
  return (
    <Box 
      sx={{
        width: '100%',
        backgroundColor: '#F2FAFD', // Light blue background
        padding: { xs: '40px 0', md: '60px 0' },
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mb: 3,
            '& .MuiBreadcrumbs-ol': {
              justifyContent: 'center',
            }
          }}
        >
          <Link 
            color="#005776" 
            href="/" 
            underline="hover"
            sx={{ 
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            Home
          </Link>
          <Typography 
            color="text.primary"
            sx={{ 
              fontWeight: 400,
              fontSize: '1rem'
            }}
          >
            {breadcrumbLabel}
          </Typography>
        </Breadcrumbs>
        
        {/* Title with highlighted and regular parts */}
        <Typography 
          variant="h1" 
          component="h1"
          sx={{ 
            fontWeight: 400,
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
            marginBottom: 4
          }}
        >
          <span style={{ color: '#005776' }}>{highlightedWord}</span>{' '}
          <span style={{ color: '#333' }}>{regularWord}</span>
        </Typography>
        
        {/* Button - YouTube or internal link */}
        <Button
          variant="outlined"
          endIcon={buttonIcon}
          component={buttonConfig.type === 'internal' ? Link : 'button'}
          href={buttonConfig.type === 'internal' ? buttonConfig.url : undefined}
          onClick={buttonConfig.type === 'youtube' ? () => window.open(buttonConfig.url, '_blank') : undefined}
          sx={{
            borderRadius: '25px',
            padding: '10px 24px',
            textTransform: 'none',
            fontWeight: 400,
            border: '1px solid #005776',
            color: '#005776',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(0, 87, 118, 0.04)',
              borderColor: '#005776',
            }
          }}
        >
          <Typography variant='body1' sx={{ fontSize: 18, fontWeight: 'normal', textTransform: 'none' }}>
            {buttonConfig.label}
          </Typography>
        </Button>
      </Container>
    </Box>
  );
}