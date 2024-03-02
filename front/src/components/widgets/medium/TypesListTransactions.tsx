import { Transaction, Type, Marketplace } from "@/types/module";
import ListMDWidget from "./ListMDWidget";
import useTypes from "@/hooks/useTypes";
import { useMemo } from "react";

interface Props {
  types?: Array<Type>;
  marketplaces?: Array<Marketplace>;
  transactions?: Array<Transaction>;
}

export default function TypesListTransaction(props: Props) {
  const { typesWithTransactionsAndMarketplaces } = useTypes({
    types: props.types || [],
    transactions: props.transactions || [],
    marketplaces: props.marketplaces || [],
  });
  const listOfTypes = useMemo(() => {
    return typesWithTransactionsAndMarketplaces.map((el) => ({
      label: el.name,
      description: el.marketplaces?.map((it) => it.name)?.join(", ") || "",
      count: el.amountOfAllTransactions,
    }));
  }, [typesWithTransactionsAndMarketplaces]);
  return (
    <ListMDWidget
      label="Types"
      description="This is list of types with count of transactions"
      value={listOfTypes}
    ></ListMDWidget>
  );
}
