import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import BasicWidget from "../BasicWidget";
import { MonthCalendar, YearCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import { useDispatch, useSelector } from "@/store";
import { selectActiveMonth, selectActiveYear, slice } from "@/store/budget";
import moment from "moment";

interface Props {}

export default function CalendarMDWidget(props: Props) {
  const [alignment, setAlignment] = useState<"month" | "year">("month");
  const dispatch = useDispatch();
  const activeMonth = useSelector(selectActiveMonth);
  const activeYear = useSelector(selectActiveYear);

  const handleChange = () => {
    setAlignment((current) => (current === "month" ? "year" : "month"));
  };

  const handleMonthChange = (value: any) => {
    const month = value.month();
    dispatch(slice.actions.setMonth({ month }));
  };

  const handleYearChange = (value: any) => {
    const year = value.year();
    dispatch(slice.actions.setYear({ year }));
  };

  return (
    <BasicWidget colSpan="4" rowSpan="2">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="year">Year</ToggleButton>
            <ToggleButton value="month">Month</ToggleButton>
          </ToggleButtonGroup>
          <Box>
            {alignment === "month" ? (
              <MonthCalendar
                onChange={handleMonthChange}
                value={moment().set("month", +activeMonth)}
              />
            ) : (
              <YearCalendar
                onChange={handleYearChange}
                value={moment().set("y", +activeYear)}
              />
            )}
          </Box>
        </Box>
      </LocalizationProvider>
    </BasicWidget>
  );
}
