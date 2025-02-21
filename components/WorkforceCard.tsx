import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const WorkforceCard = () => {
    return (
        <Box
            className="!bg-[#e1f7ff] !rounded-[40] !p-6 !md:p-8 !max-w-lg !mx-auto !text-left !ml-0"
        >
            <Typography
                variant="h2"
                component="h2"
                className="!font-medium !mb-4 !text-gray-900"
            >
                Where today&apos;s workforce{" "}
                <span className="text-blue-600">develop</span> tomorrow&apos;s workforce{" "}
                <span className="text-blue-600">leaders</span>
            </Typography>

            <Typography
                variant="h5"
                className="!text-gray-700 !mb-6 !leading-tight"
            >
                We support career awareness, exploration preparation, and training
                of those looking to pursue a career.
            </Typography>

            <Button
                variant='outlined'
                color="primary"
                className="!capitalize !px-6 !mt-[-5] !mb-5"
                endIcon={<ArrowForwardIosIcon />}
                onClick={() => {
                    console.log("View intern programs clicked");
                }}
                sx={{
                    color: '#006397',
                    borderColor: '#006397',
                    borderRadius: 5,
                    boxShadow: "none !important", // Removes default shadow
                    transition: "all 0.3s ease-in-out", // Smooth hover effect
                    "&:hover": {
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2) !important", // Adds shadow on hover
                        backgroundColor: "#064067 !important", // Slightly darker blue on hover,
                        color: 'white !important'
                    },
                }}
            >
                View intern programs
            </Button>
        </Box>
    );
};

export default WorkforceCard;
