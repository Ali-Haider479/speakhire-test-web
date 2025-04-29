"use client";
import { Button, SxProps, Theme } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

interface buttonProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  innerText: any;
  sx: SxProps<Theme>;
  variant: "text" | "outlined" | "contained";
  iconOnStart?: boolean;
  linkUrl?: boolean;
  typeFormId?: string;
  url?: string;
}

const CustomButton: React.FC<buttonProps> = ({
  icon,
  innerText,
  sx,
  variant,
  iconOnStart,
  onClick,
  linkUrl,
  typeFormId,
  url,
}: buttonProps) => {
  const router = useRouter();
  const defaultOnClick = () => {
    console.log("button clicked");
  };

  const customOnClick = () => {
    typeFormId
      ? router.push(`/form/${typeFormId}`)
      : url
      ? window.open(url, "_blank")
      : null;
  };

  return (
    <Button
      variant={variant}
      startIcon={iconOnStart ? icon : undefined}
      endIcon={!iconOnStart ? icon : undefined}
      onClick={linkUrl ? customOnClick : onClick ? onClick : defaultOnClick}
      sx={{
        ...sx,
      }}
    >
      {innerText}
    </Button>
  );
};

export default CustomButton;
