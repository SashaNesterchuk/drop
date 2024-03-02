"use client";
import BasicWidget from "@/components/widgets/BasicWidget";
import "./page.scss";
import InfoXSWidget from "@/components/widgets/extraSmall/InfoXSWidget";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import InfoSMWidget from "@/components/widgets/small/InfoSMWidget";
import InfoDetailsSMWidget from "@/components/widgets/small/InfoDetailsSMWidget";
import ListMDWidget from "@/components/widgets/medium/ListMDWidget";
import EventMDWidget from "@/components/widgets/medium/EventMDWidget";
import TableLGWidget from "@/components/widgets/large/TableLGWidget";
import { useSelector } from "@/store";
import { selectTransactionsByMonthAndYear } from "@/store/transactions";
import { selectMarketplaces } from "@/store/marketplaces";
import { selectTypes } from "@/store/types";
import useFetchDashboard from "@/hooks/useFetchDashboard";
import useMarketplaces from "@/hooks/useMarketplaces";
import { Transaction } from "@/types/module";
import { useMemo } from "react";
import CalendarMDWidget from "@/components/widgets/medium/CalendarMDWidget";
import InfoTransactionsXl from "@/components/widgets/extraLarge/InfoTransactionsXL";
import TypesListTransaction from "@/components/widgets/medium/TypesListTransactions";

export default function Dashboard() {
  const transactions = useSelector(selectTransactionsByMonthAndYear);
  const marketplaces = useSelector(selectMarketplaces);
  const types = useSelector(selectTypes);
  useFetchDashboard();
  const { marketplaceTransactionSortedByAmount } = useMarketplaces({
    transactions,
    marketplaces,
  });

  const infoXSWidgetTransactions = useMemo(() => {
    return marketplaceTransactionSortedByAmount.slice(0, 10).map((el) => {
      // return marketplaceTransactionSortedByAmount.map((el) => {
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
      <section className="dashboard-small-cards-container">
        <CalendarMDWidget />
        <InfoTransactionsXl />
        {infoXSWidgetTransactions}
        <TypesListTransaction
          types={types}
          transactions={transactions}
          marketplaces={marketplaces}
        />
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
