import { clickHandler } from "../../lib/handler";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css"

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  faded?: boolean;
} & DefaultUIProps

const Quote = ({ children, className, faded, onClick, style }: Props) => {
  return <div style={style} className={`${className} ${styles.quote}`} onClick={(e) => clickHandler(e, onClick)}>
    <p className={`${faded ? "opacity-60": ""}`}>
      {children}
    </p>
  </div>
}

export default Quote;