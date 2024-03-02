import { Color } from "@/types";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import CIconBackground from "../../mui/CIconBackground/CIconBackground";
import BasicWidget from "../BasicWidget";

interface Props {
  label: string;
  description: string;
  icon: ReactNode;
  color: Color;
}

export default function InfoSMWidget(props: Props) {
  return (
    <BasicWidget colSpan="3">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "24px",
              marginBottom: "2px",
            }}
          >
            {props.label}
          </Box>
          <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>
            {props.description}
          </Box>
        </Box>
        <CIconBackground round icon={props.icon} color={props.color} />
      </Box>
    </BasicWidget>
  );
}
