import CTable, {
  HeadCell,
  Props as TableProps,
} from "@/components/mui/CTable/CTable";
import BasicWidget from "../BasicWidget";

interface Props<T> extends TableProps<T> {}

export default function TableXLWidget<T extends object>(props: Props<T>) {
  return (
    <BasicWidget colSpan="8">
      <CTable rows={props.rows} headCells={props.headCells}></CTable>
    </BasicWidget>
  );
}
