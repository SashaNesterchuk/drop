import { Marketplace, Transaction, Type } from "@/types/module";
import useMarketplaces from "./useMarketplaces";
import { useMemo } from "react";

interface Props {
  types: Array<Type>;
  transactions: Array<Transaction>;
  marketplaces: Array<Marketplace>;
}

export default function useTypes(props: Props) {
  const { types, transactions, marketplaces } = props;
  const { transactionsByMarketplaces } = useMarketplaces({
    marketplaces,
    transactions,
  });

  const typesWithTransactionsAndMarketplaces = useMemo(() => {
    return types.map((el) => {
      const marketplacesByType = transactionsByMarketplaces?.filter(
        (item) => item.TypeId === el.id
      );
      return {
        ...el,
        marketplaces: marketplacesByType,
        amountOfAllTransactions: marketplacesByType
          ?.reduce(
            (acc, it) =>
              acc +
              it.transactions.reduce(
                (act, itt) => act + Math.abs(+itt.amount),
                0
              ),
            0
          )
          .toFixed(2),
      };
    });
  }, [types, transactionsByMarketplaces]);

  return { typesWithTransactionsAndMarketplaces };
}
