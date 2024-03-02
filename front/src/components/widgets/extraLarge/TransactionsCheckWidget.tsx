import { Transaction } from "@/types/module";
import TableXLWidget from "./TableXLWidget";
import { HeadCell } from "@/components/mui/CTable/CTable";
import { Button, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "@/store";
import { selectSortedMarketplaces } from "@/store/marketplaces";
import { useState } from "react";
import { setMarketplaceToTransactionsAsync } from "@/store/transactions";

interface Props {
  groupTransactionsByName: Record<string, Array<Transaction>>;
}

type Rows = {
  name: string;
  count: number;
  marketplace: React.ReactNode;
  options: React.ReactNode;
};

const headers: Array<HeadCell<Rows>> = [
  {
    id: "name",
    label: "Name",
    numeric: false,
    disablePadding: true,
  },
  {
    id: "count",
    label: "Count",
    numeric: false,
    disablePadding: true,
  },
  {
    id: "marketplace",
    label: "Marketplace",
    numeric: false,
    disablePadding: true,
  },
  {
    id: "options",
    label: "Options",
    numeric: false,
    disablePadding: true,
  },
];

export default function TransactionsCheckWidget(props: Props) {
  const marketplaces = useSelector(selectSortedMarketplaces);
  const dispatch = useDispatch();
  const [transactionsMarketplace, setTransactionsMarketplace] = useState<
    Record<string, string>
  >({});

  const handleMarketplaceChoose =
    (data: Array<Transaction>) => (event: SelectChangeEvent<string>) => {
      setTransactionsMarketplace((current) =>
        current
          ? { ...current, [data[0].row_name]: event.target.value }
          : { [data[0].row_name]: event.target.value }
      );
    };

  const handleSaveTransactions = (data: Array<Transaction>) => {
    dispatch(
      setMarketplaceToTransactionsAsync({
        transactionsId: data.map((el) => el.id),
        marketplaceId: transactionsMarketplace[data[0].row_name] || "",
      })
    );
  };

  const SelectInput = (data: Array<Transaction>) => {
    return (
      <>
        <InputLabel id="marketplace-label">Marketplace</InputLabel>
        <Select
          labelId="marketplace-label"
          value={transactionsMarketplace[data[0].row_name] || ""}
          label="Marketplace"
          onChange={handleMarketplaceChoose(data)}
        >
          {marketplaces?.map((el, index) => (
            <MenuItem key={index} value={el.id}>
              {el.name}
            </MenuItem>
          ))}
        </Select>
      </>
    );
  };
  const rows: Array<Rows> = Object.values(props.groupTransactionsByName).map(
    (el) => ({
      name: el[0].row_name,
      count: el.length,
      marketplace: SelectInput(el),
      options: (
        <Button
          variant="contained"
          color="success"
          onClick={() => handleSaveTransactions(el)}
          disabled={!transactionsMarketplace[el[0].row_name]}
        >
          Save
        </Button>
      ),
    })
  );

  return <TableXLWidget rows={rows} headCells={headers}></TableXLWidget>;
}
