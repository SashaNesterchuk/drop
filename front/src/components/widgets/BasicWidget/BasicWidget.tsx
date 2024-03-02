import { ReactNode } from "react";
import { Color } from "@/types";
import { Box, SxProps, Theme } from "@mui/material";
import colors from "../../../styles/colors.module.scss";

interface Props {
  children: ReactNode;
  colSpan?: "2" | "3" | "4" | "6" | "8" | "12";
  rowSpan?: "2";
  color?: Color;
  sx?: SxProps<Theme>;
}

export default function BasicWidget(props: Props) {
  return (
    <Box
      sx={{
        borderRadius: "6px",
        background: "#fff",
        padding: "24px",
        height: "fit-content",
        boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.1)",
        gridColumn: `span ${props.colSpan || 2} / span ${props.colSpan || 2}`,
        gridRow: `span ${props.rowSpan || 1} / span ${props.rowSpan || 1}`,
        ...(props.color
          ? { borderBottom: `2px solid ${colors[props.color]}` }
          : {}),
        ...(props.sx ? props.sx : {}),
      }}
    >
      {props.children}
    </Box>
  );
}
