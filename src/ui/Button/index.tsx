import { CSSProperties, MouseEvent, useState } from "react";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

type Props = {
  children: string;
  href?: string;
} & DefaultUIProps<HTMLAnchorElement>;
const Button = ({ className, style, children, href, onClick }: Props) => {
  return (
    <a
      className={`${className} ${styles.button}`}
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
