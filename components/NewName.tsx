import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function NewNameComponent() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Title and Subtitle */}
      <Typography 
        variant="h3" 
        component="h2" 
        align="center" 
        color="text.primary" 
        gutterBottom
        sx={{ 
          fontWeight: 500,
          mb: 1
        }}
      >
        Why the new name?
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        align="center" 
        color="text.primary" 
        gutterBottom
        sx={{ mb: 4 }}
      >
        SPEAK Mentorship to SPEAKHIRE
      </Typography>
      
      {/* Light Blue Content Box */}
      <Box 
        sx={{
          backgroundColor: '#f0f8ff', // Light blue background
          borderRadius: '16px',
          p: 4,
          mt: 3,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            lineHeight: 1.7,
            '& .highlight': {
              fontWeight: 'bold'
            }
          }}
        >
          Individuals from immigrant families struggle with getting the skills needed to prepare for their careers. As a result, many settle for jobs they are overqualified for, earning about $30,000 or less than where they could be starting.
          <br />
          More than 80% of internships and first jobs are landed through networks, yet only 3% of students report that counselors have any real impact on their career pathway choice. SPEAK has always been about mobilizing the next generation of workforce leaders and we've moved beyond mentorship to do that. We thought our name should better reflect our goal.
          <br />
          SUPPORT PREPARE EMPOWER ALL KIND...towards economic opportunity through the connections we make, the relationships we build, and the conversations we help initiate, so our future leaders can get greater opportunities like applying to the right colleges, getting into internships, and the highest paid first job that leads to career satisfaction. We want our future leaders to get HIRED by having us SPEAK higher for them and propel them towards successful career pathways.
        </Typography>
      </Box>
    </Container>
  );
}

export default NewNameComponent;