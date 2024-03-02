import { ReactNode } from "react";
import { Color } from "@/types";
import { Box } from "@mui/material";
import colors from "../../../styles/colors.module.scss";

interface Props {
  icon: ReactNode;
  color?: Color;
  round?: boolean;
}

export default function CIconBackground(props: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "9px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: colors[props.color || "primary"],
          borderRadius: props.round ? "50%" : "6px",
          opacity: "16%",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      <Box sx={{ color: colors[props.color || "primary"], display: "flex" }}>
        {props.icon}
      </Box>
    </Box>
  );
}
