"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";

type FormType = {
  email: { type: string; minlength: 3 };
  firstName: string;
  lastName: string;
  message: string;
  subject: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [alertMsg, setAlertMsg] = useState("");

  const onSubmit = async (data: FormType) => {
    try {
      const response = await fetch("http://localhost:1337/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          subject: data.subject,
          text: `${data.firstName} ${data.lastName},\n\n ${data.message}`,
        }),
      });

      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.error || "Something went wrong");
      }

      setAlertType("success");
      setAlertMsg("Email sent successfully!");
      setAlertOpen(true);
      reset();
    } catch (error: any) {
      setAlertType("error");
      setAlertMsg(error.message || "Failed to send email.");
      setAlertOpen(true);
    }
  };
  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlertOpen(false)}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        height="auto"
        minHeight="65vh"
      >
        <Box sx={{ width: { xs: "80vw", md: "40vw" } }}>
          <Typography
            variant="h3"
            sx={{
              color: "#08547a",
              mt: { xs: 5, mt: 0 },
              fontSize: { xs: "2rem" },
            }}
          >
            Contact us.
          </Typography>
          <Typography
            variant="body1"
            sx={{ ml: 1, mt: 3, fontSize: "1.25rem" }}
          >
            You SPEAK. We Listen. Leave a message
          </Typography>
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: { xs: "80vw", md: "40vw" },
            mx: "auto",
            p: { xs: 1, md: 3 },
            borderRadius: 2,
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              {...register("firstName", {
                required: "First Name is required",
                minLength: {
                  value: 3,
                  message: "First Name must be at least 3 characters",
                },
              })}
              error={!!errors.firstName}
              // helperText={errors.name?.message}
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              {...register("lastName", {
                required: "Last Name is required",
                minLength: {
                  value: 3,
                  message: "Last Name must be at least 3 characters",
                },
              })}
              error={!!errors.lastName}
              // helperText={errors.name?.message}
            />
          </Box>

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            // helperText={errors.email?.message}
          />

          <TextField
            label="Subject"
            fullWidth
            margin="normal"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 10,
                message: "Subject must be at least 10 characters",
              },
            })}
            error={!!errors.subject}
            // helperText={errors.name?.message}
          />

          <TextField
            label="Message"
            fullWidth
            margin="normal"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 25,
                message: "Message must be at least 25 characters",
              },
            })}
            error={!!errors.message}
            multiline
            minRows={3}
            // helperText={errors.name?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, textTransform: "none", fontSize: 16 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
