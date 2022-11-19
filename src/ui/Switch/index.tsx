import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

type Props = {
  reverseState: () => void;
  value: boolean;
} & DefaultUIProps;
const Switch = ({ reverseState, value, onClick, className, style }: Props) => {
  return (
    <div
      onClick={(e) => {
        reverseState();
        if (onClick) {
          onClick(e);
        }
      }}
      style={style}
      className={`${className} ${value ? styles.a : ""} ${styles.switch}`}
    >
      <div className={styles.i}></div>
    </div>
  );
};

export default Switch;
export const _styles = styles;
