import { clickHandler } from "../../lib/handler";
import { DefaultUIProps, O} from "../../types";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  type?: "default" | "info" | "error" | "warning" | "success";
  hover?: boolean
  pointer?: boolean;
} & DefaultUIProps;
const Badge = ({ children, className, onClick, style, type, hover, pointer }: Props) => {
  return <div style={style} onClick={(e) => clickHandler(e, onClick)} className={`${className} ${pointer ? styles.p : ""} ${hover ? styles.h : ""} ${styles.badge} ${(styles as O<any>)[`${type || "default"}`]}`}>
    {children}
  </div>;
};

export default Badge;
