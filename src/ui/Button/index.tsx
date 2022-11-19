import { CSSProperties, MouseEvent, useState } from "react";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

type Props = {
  children: string;
  href?: string;
  type?: "sm";
} & DefaultUIProps<HTMLAnchorElement>;
const Button = ({ className, type, style, children, href, onClick }: Props) => {
  return (
    <a
      className={`${className} ${type ? styles[`${type}`] : ""} ${styles.button}`}
      style={style}
      onClick={(e) => {
        if (href) {
          window.location.href = `${href}`;
        }
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </a>
  );
};

export default Button;
export const _styles = styles
