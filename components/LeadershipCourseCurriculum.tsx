import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

// Define the curriculum item type
interface CurriculumItem {
  id: string;
  title: string;
}

interface LeadershipCourseCurriculumProps{
  data:{
    title:string,
    course_curriculum:any[]
  }
}

export default function LeadershipCourseCurriculum({data}:LeadershipCourseCurriculumProps) {
  const HighlightText = (text: string) => {
    if (!text || text.trim().length === 0) return null;

    const words = text.split(" ");
    const firstWords = words.slice(0, 2).join(" ");
    const highlightedWord = words[2];

    return (
      <p>
        {firstWords}{" "}
        <span style={{ color: "#0F99C3" }}>{highlightedWord}</span>{" "}
      </p>
    );
  };

  return (
    <Box
      sx={{
        width: '80vw',
        pb: 5, // Padding top and bottom
        px: { xs: 2, md: 0 }, // Responsive padding left and right
      }}
    >
      {/* Header Section */}
      <Box mb={4}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 400,
            display: 'inline',
            color: '#333',
          }}
        >
          {HighlightText(data.title)}
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
                {data.course_curriculum[0].description}
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
                {data.course_curriculum[1].description}
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
                {data.course_curriculum[2].description}
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
                {data.course_curriculum[3].description}
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
                {data.course_curriculum[4].description}
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
                {data.course_curriculum[5].description}
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
                {data.course_curriculum[6].description}
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
                {data.course_curriculum[7].description}
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
                {data.course_curriculum[8].description}
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
                {data.course_curriculum[9].description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}