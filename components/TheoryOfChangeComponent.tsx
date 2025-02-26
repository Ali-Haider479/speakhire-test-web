import { Box, Typography } from '@mui/material';
import React from 'react';

export default function TheoryOfChangeComponent() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#F2FAFD', // Light blue background
                padding: '20px',
                borderRadius: '0px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5,
                height: '60vh'
            }}
        >
            {/* Left section with text content */}
            <Box
                sx={{
                    width: '50%',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: '150px',
                    paddingRight: '20px',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 10,
                        color: '#333333',
                    }}
                >
                    Theory of Change
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'medium',
                            marginBottom: 1,
                        }}
                    >
                        Increase the <span style={{ color: '#0F99C3' }}>Quantity</span>
                        <br />and <span style={{ color: '#0F99C3' }}>Quality</span> of Relationships
                    </Typography>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: 2,
                        color: '#555555',
                        lineHeight: 1.7,
                        fontSize: '1.1rem'
                    }}
                >
                    Career guidance and support through innovative social capital and
                    network development expands the circle of opportunities for
                    individuals and forms the critical connections they need to make
                    realizing those opportunities tangible.
                </Typography>
            </Box>

            {/* Right section with YouTube video */}
            <Box
                sx={{
                    width: '43%',
                    height: '400px',
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: '#f5f5f5',
                    mr: 10,
                }}
            >
                {/* YouTube Video Player */}
                <Box sx={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#F2FAFD', borderRadius: '20px', overflow: 'hidden' }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                    }}>

                        {/* iFrame for YouTube Video */}
                        <iframe
                            width="80%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Story"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '20px' }}
                        />
                    </Box>
                    {/* Play button overlay (optional, as YouTube has its own) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '70px',
                            height: '70px',
                            backgroundColor: 'red',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 5,
                            pointerEvents: 'none', // Ensures clicks go through to the iframe
                        }}
                    >
                        <Box
                            sx={{
                                width: 0,
                                height: 0,
                                borderTop: '15px solid transparent',
                                borderLeft: '25px solid white',
                                borderBottom: '15px solid transparent',
                                marginLeft: '5px', // Slight adjustment to center the triangle
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}