import { Box, SxProps } from "@mui/material";
import BasicWidget from "../BasicWidget";
import { useSelector } from "@/store";
import { selectActiveMonth, selectActiveYear } from "@/store/budget";
import moment from "moment";
import Image from "next/image";
import bus from "../../../public/bus.jpeg";
import sasha from "../../../public/sasha.jpeg";
import useTransactions from "@/hooks/useTransactions";
import { selectTransactionsByMonthAndYear } from "@/store/transactions";

export default function InfoTransactionsXl() {
  const month = useSelector(selectActiveMonth);
  const year = useSelector(selectActiveYear);
  const transactions = useSelector(selectTransactionsByMonthAndYear);
  const { sumAllTransactions } = useTransactions({
    transactions: transactions,
  });

  return (
    <BasicWidget colSpan="8" color="info">
      <Box sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "14px" }}>
        {moment(+month + 1, "M").format("MMMM")} {year}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <Image
          src={sumAllTransactions > 22000 ? bus : sasha}
          alt="buska"
          width="150"
          height="150"
        />
        Буська потратила грошей - {sumAllTransactions}
      </Box>
    </BasicWidget>
  );
}
