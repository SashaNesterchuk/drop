import { InputBase, InputBaseProps } from "@mui/material";
import styles from "./CInputSearch.module.scss";

export default function CInputSearch(props: InputBaseProps) {
  return <InputBase className={styles.search} {...props} />;
}
