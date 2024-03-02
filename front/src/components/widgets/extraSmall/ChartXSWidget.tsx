import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  label: string;
  description: string;
  chart: ReactNode;
  info: string;
}

export default function ChartSmallWidget() {
  return (
    <Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}
