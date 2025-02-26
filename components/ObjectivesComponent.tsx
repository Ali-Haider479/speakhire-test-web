import { Box, Grid, Typography } from '@mui/material';
import { Settings, Description, Psychology } from '@mui/icons-material'; 
import React from 'react';

export default function ObjectivesComponent() {
    return (
        <Box sx={{ padding: '50px 0', backgroundColor: '#ffffff', textAlign: 'center' }}>
            <Typography
                variant="h3"
                align="center"
                sx={{ mb: 2, fontWeight: 400, color: 'black' }}
            >
                Our Objective is to
            </Typography>

            {/* Single Box Container for all objectives */}
            <Box sx={{ width: '70vw', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center',backgroundColor: '#E6F2F9', borderRadius: '15px' }}>
                
                {/* Objective 1 - Support */}
                <Box sx={{ backgroundColor: '#E6F2F9', borderRadius: '15px', padding: '20px', width: '30%', boxShadow: 0, height:'250px'  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Settings sx={{ fontSize: 40, color: '#0D5C75' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0D5C75', marginBottom: '15px' }}>
                        Support
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#49454F', marginBottom: '20px' }}>
                        by pooling community resources, increasing impact and stimulating community development from within
                    </Typography>
                </Box>

                {/* Diamond Separator */}
                <Typography sx={{ fontSize: '30px', color: '#0D5C75' }}>&#9670;</Typography>

                {/* Objective 2 - Prepare */}
                <Box sx={{ backgroundColor: '#E6F2F9', borderRadius: '15px', padding: '20px', width: '30%', boxShadow: 0 , height:'250px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Description sx={{ fontSize: 40, color: '#0D5C75' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0D5C75', marginBottom: '15px' }}>
                        Prepare
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#49454F', marginBottom: '20px' }}>
                        by creating and promoting projects and programs that empower individuals from immigrant families to identify and pursue opportunities
                    </Typography>
                </Box>

                {/* Diamond Separator */}
                <Typography sx={{ fontSize: '30px', color: '#0D5C75' }}>&#9670;</Typography>

                {/* Objective 3 - Empower */}
                <Box sx={{ backgroundColor: '#E6F2F9', borderRadius: '15px', padding: '20px', width: '30%', boxShadow: 0, height:'250px'  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <Psychology sx={{ fontSize: 40, color: '#0D5C75' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0D5C75', marginBottom: '15px' }}>
                        Empower
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#49454F', marginBottom: '20px' }}>
                        by creating and inspiring a network of professionals to facilitate dialogue with key players who guide individuals
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
