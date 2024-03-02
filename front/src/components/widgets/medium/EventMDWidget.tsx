import { Box, Button } from "@mui/material";
import BasicWidget from "../BasicWidget";
import { ReactNode } from "react";

interface Props {
  image: string | ReactNode;
  label: string;
  description: string;
  disabled?: boolean;
  onClick: Function;
  buttonText: string;
}

export default function EventMDWidget(props: Props) {
  return (
    <BasicWidget
      colSpan="4"
      sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
      <Box>{props.image}</Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <Box sx={{ fontSize: "22px", fontWeight: "500", lineHeight: "30px" }}>
          {props.label}
        </Box>
        <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>
          {props.description}
        </Box>
      </Box>
      <Button
        disabled={props.disabled}
        color="primary"
        variant="contained"
        fullWidth
      >
        {props.buttonText}
      </Button>
    </BasicWidget>
  );
}
