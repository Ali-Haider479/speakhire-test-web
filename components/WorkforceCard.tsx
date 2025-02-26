import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WorkforceCard = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#e1f7ff", 
                borderRadius: "40px", 
                padding: { xs: "24px", md: "32px" }, 
                maxWidth: "32rem", 
                marginX: "auto",
                textAlign: "left", 
                marginLeft: 0, 
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 500, 
                    marginBottom: "16px", 
                    color: "#111827", 
                }}
            >
                Where today&apos;s workforce{" "}
                <span style={{ color: "#2563eb" }}>develop</span> tomorrow&apos;s workforce{" "}
                <span style={{ color: "#2563eb" }}>leaders</span>
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: "#374151", 
                    marginBottom: "24px", 
                    lineHeight: "1.25", 
                    fontSize: '1.28rem'
                }}
            >
                We support career awareness, exploration preparation, and training
                of those looking to pursue a career.
            </Typography>

            <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                    console.log("View intern programs clicked");
                }}
                sx={{
                    color: "#006397", 
                    borderColor: "#006397", 
                    borderRadius: "20px", 
                    boxShadow: "none", 
                    textTransform: "none", 
                    paddingX: "14px", 
                    paddingY: '8px',
                    marginTop: "-5px", 
                    marginBottom: "20px", 
                    transition: "all 0.3s ease-in-out", 
                    "&:hover": {
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
                        backgroundColor: "#064067",
                        color: "white", 
                        borderColor: "#064067", 
                    },
                }}
            >
                View intern programs
            </Button>
        </Box>
    );
};

export default WorkforceCard;