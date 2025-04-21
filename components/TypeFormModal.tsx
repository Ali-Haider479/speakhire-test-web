"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import { Widget } from "@typeform/embed-react";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const TypeFormModal = (props: { open: boolean; setOpen: any, typeFormId:string }) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <BootstrapDialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: 800,
          maxWidth: "95vw",
          height: "auto",
        },
      }}
    >
      <DialogContent>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[600],
            zIndex:1,
            mb:2
          })}
        >
          <CloseIcon />
        </IconButton>

        <Widget
          id={props.typeFormId}
          style={{ width: "100%", height: 700}}
          medium="demo-test"
          hidden={{ foo: "foo value", bar: "bar value" }}
          transitiveSearchParams={["foo", "bar"]}
          iframeProps={{ title: "Foo Bar" }}
        />
      </DialogContent>
    </BootstrapDialog>
  );
};

export default TypeFormModal;
