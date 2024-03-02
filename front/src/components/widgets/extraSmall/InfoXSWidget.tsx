import { ReactNode } from "react";
import BasicWidget from "../BasicWidget";
import { Box } from "@mui/material";
import { Color } from "@/types";
import CIconBackground from "../../mui/CIconBackground/CIconBackground";

interface Props {
  icon: ReactNode;
  label: string | number;
  description: string;
  color?: Color;
}

export default function InfoXSWidget(props: Props) {
  return (
    <BasicWidget color={props.color}>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CIconBackground
          icon={props.icon}
          color={props.color || "primary"}
          round
        />
        <Box sx={{ fontSize: "18px", fontWeight: "500", lineHeight: "24px" }}>
          {props.label}
        </Box>
        <Box sx={{ fontSize: "13px" }}>{props.description}</Box>
      </Box>
    </BasicWidget>
  );
}
