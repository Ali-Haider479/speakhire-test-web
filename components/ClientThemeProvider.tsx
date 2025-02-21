// components/ClientThemeProvider.tsx
"use client";

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Comfortaa, Quicksand } from "next/font/google";

// Import the fonts here so they're only used on the client side
const comforter = Comfortaa({
  weight: "400", // adjust weight as needed
  subsets: ["latin"],
});
const quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
});

// Create a custom MUI theme that uses Comforter for headings and Quicksand for other text.
const theme = createTheme({
  typography: {
    // Default font for body text and other variants.
    fontFamily: quicksand.style.fontFamily,
    h1: { fontFamily: comforter.style.fontFamily },
    h2: { fontFamily: comforter.style.fontFamily },
    h3: { fontFamily: comforter.style.fontFamily },
    h4: { fontFamily: comforter.style.fontFamily },
    h5: { fontFamily: comforter.style.fontFamily },
    h6: { fontFamily: comforter.style.fontFamily },
    body1: { fontFamily: quicksand.style.fontFamily }
  },
});

interface Props {
  children: React.ReactNode;
}

export default function ClientThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
