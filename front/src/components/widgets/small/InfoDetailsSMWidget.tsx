import CIconBackground from "@/components/mui/CIconBackground/CIconBackground";
import BasicWidget from "../BasicWidget";
import { Color } from "@/types";
import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  color: Color;
  label: string;
  icon: ReactNode;
  amount: string;
  description: string;
}

export default function InfoDetailsSMWidget(props: Props) {
  return (
    <BasicWidget
      colSpan="3"
      color={props.color}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "14px",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <CIconBackground icon={props.icon} color={props.color} />
        <Box
          sx={{
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "30px",
          }}
        >
          {props.amount}
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "22px",
          }}
        >
          {props.label}
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "20px",
          }}
        >
          {props.description}
        </Box>
      </Box>
    </BasicWidget>
  );
}
