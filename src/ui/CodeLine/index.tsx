import { clickHandler } from "../../lib/handler";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

type Props = {
  children: string;
} & DefaultUIProps;
const CodeLine = ({ children, className, onClick, style }: Props) => {
  return (
    <span
      className={`${className} ${styles.codeLine}`}
      style={style}
      onClick={(e) => clickHandler(e, onClick)}
    >
      {children}
    </span>
  );
};

export default CodeLine;
