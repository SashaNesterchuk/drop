import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BasicWidget from "../BasicWidget";
import CIconBackground from "@/components/mui/CIconBackground/CIconBackground";
import ParaglidingIcon from "@mui/icons-material/Paragliding";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface List {
  pref?: React.ReactNode;
  label: string;
  description: string;
  count?: string | number;
  options?: React.ReactNode;
}

interface Props {
  label: string;
  description: string;
  value: Array<List>;
}

export default function ListMDWidget(props: Props) {
  return (
    <BasicWidget
      colSpan="4"
      rowSpan="2"
      sx={{ display: "flex", gap: "24px", flexDirection: "column" }}
    >
      <Box>
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "24px",
          }}
        >
          {props.label}
        </Box>
        <Box
          sx={{
            fontSize: "13px",
            lineHeight: "20px",
          }}
        >
          {props.description}
        </Box>
      </Box>
      <Box display="grid" gap="18px">
        {props.value.map((el) => (
          <Box
            key={el.label}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            {el.pref && <CIconBackground icon={<ParaglidingIcon />} />}
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{ fontSize: "15px", fontWeight: "500", lineHeight: "21px" }}
              >
                {el.label}
              </Box>
              <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>
                {el.description}
              </Box>
            </Box>
            {el.count && (
              <Box sx={{ fontSize: "13px", lineHeight: "20px" }}>
                {el.count}
              </Box>
            )}
            {el.options && <ParaglidingIcon />}
          </Box>
        ))}
      </Box>
    </BasicWidget>
  );
}
