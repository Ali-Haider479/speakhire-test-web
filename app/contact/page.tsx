import { Box, Typography } from "@mui/material";
import PageLayout from "@/components/PageLayout";
import React from "react";

function Contact() {
  return (
    <PageLayout>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="black" variant="h4">
          Contact Us Page
        </Typography>
      </Box>
    </PageLayout>
  );
}

export default Contact;
