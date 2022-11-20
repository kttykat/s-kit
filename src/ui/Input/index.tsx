import { Dispatch, SetStateAction, useState } from "react";
import { DefaultUIProps, InputTypes } from "../../types";
import styles from "./styles.module.css";

type Props = {
  type?: InputTypes;
  placeholder?: string;
  valueFilter?: (value: string) => string;
  afterSet?: (z: string) => any;
  setValue: Dispatch<SetStateAction<string>>;
} & DefaultUIProps;
const Input = ({
  className,
  onClick,
  style,
  type,
  placeholder,
  valueFilter,
  setValue,
  afterSet,
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.input} ${className}`} style={style}>
      <input
        onChange={(e) => {
          let h = valueFilter ? valueFilter(e.target.value) : e.target.value;
          setValue(h);
          if (afterSet) {
            afterSet(h);
          }
        }}
        type={type ? (type === "password" && show ? "text" : type) : "text"}
        placeholder={placeholder || "..."}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
      />
      {type === "password" ? (
        <div
          onClick={() => {
            setShow(!show);
          }}
          className={styles.show}
        >
          <i className={`iconoir-${show ? "eye-empty" : "eye-off"}`}></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
export const _styles = styles;
