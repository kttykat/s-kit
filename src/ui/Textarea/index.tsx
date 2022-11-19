import { Dispatch, SetStateAction } from "react";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  valueFilter?: (value: string) => string;
  mono?: boolean
} & DefaultUIProps;
const TextArea = ({
  className,
  onClick,
  style,
  setValue,
  value,
  valueFilter,
  mono
}: Props) => {
  return (
    <textarea
      className={`${className} ${mono ? styles.mono : ""} ${styles.textarea}`}
      style={style}
      onChange={(e) => {
        let h = valueFilter ? valueFilter(e.target.value) : e.target.value;
        setValue(h);
      }}
      value={value}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    />
  );
};

export default TextArea;
export const _styles = styles;
