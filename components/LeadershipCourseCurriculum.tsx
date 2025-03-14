import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

// Define the curriculum item type
interface CurriculumItem {
  id: string;
  title: string;
}

export default function LeadershipCourseCurriculum() {
  // Data for the curriculum items
  const curriculumItems: CurriculumItem[] = [
    {
      id: "1",
      title: "Accountability - Balancing commitments"
    },
    {
      id: "2",
      title: "Conflict management - Internal and interpersonal"
    },
    {
      id: "3",
      title: "Diversity and inclusion"
    },
    {
      id: "4",
      title: "Non-positional leadership - Leading from within"
    },
    {
      id: "5",
      title: "Defining your vision"
    },
    {
      id: "6",
      title: "The importance of listening"
    },
    {
      id: "7",
      title: "Engaging in productive self-reflection and wellness"
    },
    {
      id: "8",
      title: "Goal-setting"
    },
    {
      id: "9",
      title: "Social media and your personal profile"
    },
    {
      id: "10",
      title: "Leadership essentials: Integrity, empathy, authenticity, emotional intelligence, and humility"
    }
  ];

  return (
    <Box
      sx={{
        width: '80vw',
        py: 5, // Padding top and bottom
        px: { xs: 2, md: 8 }, // Responsive padding left and right
      }}
    >
      {/* Header Section */}
      <Box mb={4}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 400,
            display: 'inline',
            color: '#333',
          }}
        >
          Leadership Course{' '}
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 400,
              color: '#0F99C3', // Using the blue color from your first image
            }}
          >
            Curriculum
          </Typography>
        </Typography>
      </Box>

      {/* Main Grid Container */}
      <Box 
        sx={{
          backgroundColor: '#F5F8FA', // Light blue/gray background
          borderRadius: '20px',
          overflow: 'hidden',
          mt: 2
        }}
      >
        {/* First row: items 1-3 */}
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[0].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[1].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[2].title}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Horizontal divider */}
        <Divider sx={{ borderColor: '#E0E0E0' }} />

        {/* Second row: items 4-6 */}
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[3].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[4].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[5].title}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Horizontal divider */}
        <Divider sx={{ borderColor: '#E0E0E0' }} />

        {/* Third row: items 7-9 */}
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[6].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[7].title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ 
            borderLeft: { xs: 'none', md: '1px solid #E0E0E0' },
            borderTop: { xs: '1px solid #E0E0E0', md: 'none' }
          }}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px'
                }}
              >
                {curriculumItems[8].title}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Horizontal divider */}
        <Divider sx={{ borderColor: '#E0E0E0' }} />

        {/* Fourth row: item 10 (full width) */}
        <Grid container>
          <Grid item xs={12}>
            <Box 
              sx={{ 
                p: 4,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontWeight: 500,
                  color: '#555',
                  fontSize: '16px',
                  textAlign: 'center'
                }}
              >
                {curriculumItems[9].title}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}