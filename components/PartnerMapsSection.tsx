import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const PartnerMapsSection = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px 8vw",
                backgroundColor: "#ffffff",
                // width: '80vw'
            }}
        >
            {/* Left Section: US Map */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50%",
                    height: "400px", // Fixed height for both sections
                    justifyContent: "center", // Center content vertically
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        marginBottom: "20px",
                        textAlign: "center",
                        fontSize: '1.8rem',
                        color: '#49454F',
                        width: '50%'
                    }}
                >
                    <span style={{ color: '#08547A' }}>
                        4 States {' '}
                    </span>with Partner Schools & Orgs
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        flexGrow: 1, // Allows the image to grow within the fixed height
                        display: "flex",
                        alignItems: "center", // Center the image vertically
                    }}
                >
                    <Image
                        src="/usa-map.svg"
                        alt="US Map with Partner States"
                        width={400}
                        height={300}
                        layout="responsive"
                    />
                </Box>
            </Box>

            {/* Right Section: World Map */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50%",
                    height: "400px", // Fixed height for both sections
                    justifyContent: "center", // Center content vertically
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600,
                        marginBottom: "20px",
                        textAlign: "center",
                        fontSize: '1.8rem',
                        color: '#49454F'
                    }}
                >
                    <span style={{ color: '#08547A' }}>70{' '}</span>
                    countries represented
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        flexGrow: 1, // Allows the image to grow within the fixed height
                        display: "flex",
                        alignItems: "center", // Center the image vertically
                    }}
                >
                    <Image
                        src="/world-map.svg"
                        alt="World Map with Represented Countries"
                        width={400}
                        height={400}
                        layout="responsive"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PartnerMapsSection;