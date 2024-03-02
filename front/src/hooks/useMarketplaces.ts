import { Marketplace, Transaction } from "@/types/module";
import { useMemo } from "react";

interface Props {
  transactions: Array<Transaction> | undefined;
  marketplaces: Array<Marketplace> | undefined;
}

export default function useMarketplaces(props: Props) {
  const transactionsByMarketplaces = useMemo(() => {
    if (!props.marketplaces) {
      return;
    }

    return props.marketplaces.map((el) => ({
      ...el,
      transactions:
        props.transactions?.filter((it) => it.marketplaceId === el.id) || [],
    }));
  }, [props]);

  const marketplaceTransactionSortedByCount = useMemo(() => {
    if (!transactionsByMarketplaces) {
      return [];
    }

    return transactionsByMarketplaces.sort((a, b) =>
      a.transactions.length > b.transactions.length
        ? -1
        : b.transactions.length > a.transactions.length
        ? 1
        : 0
    );
  }, [transactionsByMarketplaces]);

  const marketplaceTransactionSortedByAmount = useMemo(() => {
    if (!transactionsByMarketplaces) {
      return [];
    }

    const sumTransaction = (transactions: Array<Transaction>) => {
      return transactions.reduce((acc, it) => acc + Math.abs(+it.amount), 0);
    };

    return transactionsByMarketplaces.sort((a, b) =>
      sumTransaction(a.transactions) > sumTransaction(b.transactions)
        ? -1
        : sumTransaction(b.transactions) > sumTransaction(a.transactions)
        ? 1
        : 0
    );
  }, [transactionsByMarketplaces]);

  return {
    marketplaceTransactionSortedByAmount,
    marketplaceTransactionSortedByCount,
    transactionsByMarketplaces,
  };
}
