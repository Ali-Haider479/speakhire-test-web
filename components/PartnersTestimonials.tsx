import { Box, Typography } from '@mui/material'
import React from 'react'
import PartnersCarousel from './PartnersCarousel'

export default function PartnersTestimonials() {
    return (
        <Box sx={{ backgroundColor: '#F2FAFD', py: 5 }}>
            <Typography
                variant="h3"
                align="center"
                sx={{ mb: 2, fontWeight: 400, color: 'black' }}
            >
                What Our
                <span className="!text-[#0F99C3]"> Partners Say{" "}</span>
            </Typography>
            <Typography
                variant="body1"
                align="center"
                sx={{ mx: "auto", color: '#49454F', fontSize: 22 }}
            >
                Our customers accomplish amazing things every day. They work to find cures to cancer, travel
            </Typography>
            <PartnersCarousel/>
        </Box>
    )
}
