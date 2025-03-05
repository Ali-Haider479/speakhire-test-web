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
      title: "ACCOUNTABILITY - BALANCING COMMITMENTS"
    },
    {
      id: "2",
      title: "CONFLICT MANAGEMENT - INTERNAL AND INTERPERSONAL"
    },
    {
      id: "3",
      title: "DIVERSITY AND INCLUSION"
    },
    {
      id: "4",
      title: "NON-POSITIONAL LEADERSHIP - LEADING FROM WITHIN"
    },
    {
      id: "5",
      title: "DEFINING YOUR VISION"
    },
    {
      id: "6",
      title: "THE IMPORTANCE OF LISTENING"
    },
    {
      id: "7",
      title: "ENGAGING IN PRODUCTIVE SELF-REFLECTION AND WELLNESS"
    },
    {
      id: "8",
      title: "GOAL-SETTING"
    },
    {
      id: "9",
      title: "SOCIAL MEDIA AND YOUR PERSONAL PROFILE"
    },
    {
      id: "10",
      title: "LEADERSHIP ESSENTIALS: INTEGRITY, EMPATHY, AUTHENTICITY EMOTIONAL INTELLIGENCE AND HUMILITY"
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
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