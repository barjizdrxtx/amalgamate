import { Button } from "@mui/material";
import React from "react";

export const CustomizedButton = (props: any) => {
  const { disabled, children, onClick, bgcolor, type, mx, boxShadow, color, fontSize } =
    props;

  return (
    <Button
      disabled={disabled}
      type={type}
      sx={{
        boxShadow: boxShadow,
        width: props.width,
        mx: mx,
        fontSize: fontSize,
        color: color,
        my: 1,
        bgcolor: bgcolor,
        border: `1px solid ${bgcolor}`,
        "&:hover": {
          backgroundColor: bgcolor,
          boxShadow: "none",
          color: color,
          border: `1px solid ${bgcolor}`,
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const DrawerButtons = (props: any) => {
  const { disabled, children, onClick, bgcolor, type, mx, boxShadow, color } =
    props;

  return (
    <Button
      disabled={disabled}
      size="small"
      type={type}
      sx={{
        boxShadow: boxShadow,
        width: props.width,
        mx: mx,
        color: color,
        my: 1,
        bgcolor: bgcolor,
        border: `1px solid ${bgcolor}`,
        "&:hover": {
          backgroundColor: bgcolor,
          boxShadow: "none",
          color: color,
          border: `1px solid ${bgcolor}`,
        },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
