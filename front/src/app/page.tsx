"use client";
import BasicWidget from "@/components/widgets/BasicWidget";
import "./page.scss";
import InfoXSWidget from "@/components/widgets/extraSmall/InfoXSWidget";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import InfoSMWidget from "@/components/widgets/small/InfoSMWidget";
import InfoDetailsSMWidget from "@/components/widgets/small/InfoDetailsSMWidget";
import EventMDWidget from "@/components/widgets/medium/EventMDWidget";
import TableLGWidget from "@/components/widgets/large/TableLGWidget";
import { useSelector } from "@/store";
import { selectTransactions } from "@/store/transactions";
import { selectMarketplaces } from "@/store/marketplaces";
import useMarketplaces from "@/hooks/useMarketplaces";
import { useMemo } from "react";
import useFetchHome from "@/hooks/useFetchHome";
import useTransactions from "@/hooks/useTransactions";
import TransactionsCheckWidget from "@/components/widgets/extraLarge/TransactionsCheckWidget";
import TypesListTransaction from "@/components/widgets/medium/TypesListTransactions";
import { selectTypes } from "@/store/types";

export default function Home() {
  const transactions = useSelector(selectTransactions);
  const marketplaces = useSelector(selectMarketplaces);
  const types = useSelector(selectTypes);
  useFetchHome();
  const { marketplaceTransactionSortedByAmount } = useMarketplaces({
    transactions,
    marketplaces,
  });

  const { groupTransactionsByName } = useTransactions({ transactions });

  const infoXSWidgetTransactions = useMemo(() => {
    return marketplaceTransactionSortedByAmount.map((el) => {
      const amount = el.transactions.reduce(
        (acc, it) => acc + Math.abs(+it.amount),
        0
      );
      return (
        <InfoXSWidget
          key={el.id}
          icon={<AssignmentIcon />}
          label={amount.toFixed(2)}
          description={el.name}
          color="success"
        />
      );
    });
  }, [marketplaceTransactionSortedByAmount]);

  return (
    <div className="page">
      <section className="home-small-cards-container">
        {infoXSWidgetTransactions}
        <TypesListTransaction
          types={types}
          transactions={transactions}
          marketplaces={marketplaces}
        />
        <TransactionsCheckWidget
          groupTransactionsByName={groupTransactionsByName}
        ></TransactionsCheckWidget>
        <EventMDWidget
          image="dsf"
          label="asdfasdf"
          description="sdfasdf"
          buttonText="fasdfadf"
          onClick={() => {}}
        />
        <TableLGWidget />
        <BasicWidget colSpan="6">test6</BasicWidget>
        <BasicWidget>test7</BasicWidget>
        <InfoDetailsSMWidget
          icon={<ArticleIcon />}
          amount="43"
          color="danger"
          label="test"
          description="sdfsdf sdfsdf"
        ></InfoDetailsSMWidget>
        <InfoSMWidget
          icon={<ArticleIcon />}
          color="danger"
          label="test"
          description="sdfsdf sdfsdf"
        ></InfoSMWidget>
        <BasicWidget>test13</BasicWidget>
        <BasicWidget>test14</BasicWidget>
        <BasicWidget>test15</BasicWidget>
        <BasicWidget>test16</BasicWidget>
        <BasicWidget>test17</BasicWidget>
        <BasicWidget>test18</BasicWidget>
        <BasicWidget>test19</BasicWidget>
        <BasicWidget>test20</BasicWidget>
        <BasicWidget>test21</BasicWidget>
        <BasicWidget>test22</BasicWidget>
        <BasicWidget>test23</BasicWidget>
      </section>
    </div>
  );
}
