"use client";
import { Button, SxProps, Theme } from "@mui/material";
import React from "react";

interface buttonProps {
  icon?: React.ReactNode;
  // onClick: () => void;
  innerText: string;
  sx: SxProps<Theme>;
  variant: "text" | "outlined" | "contained";
  iconOnStart: boolean;
}

const CustomButton: React.FC<buttonProps> = ({
  icon,
  innerText,
  sx,
  variant,
  iconOnStart,
}: buttonProps) => {
  const onClick = () => {
    console.log("button clicked");
  };

  return (
    <Button
      variant={variant}
      startIcon={iconOnStart ? icon : undefined}
      endIcon={!iconOnStart ? icon : undefined}
      onClick={onClick}
      sx={{
        ...sx,
      }}
    >
      {innerText}
    </Button>
  );
};

export default CustomButton;
