import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css"

type Props = {
  children: JSX.Element | JSX.Element[]
  flex?: boolean;
} & DefaultUIProps
const Box = ({ children, className, onClick, flex, style }: Props) => {
  return <div onClick={(e) => {
    if(onClick) {
      onClick(e)
    }
  } } className={`${className} ${flex ? "flex": ""} ${styles.box}`} style={style}>
    {children}
  </div>
}

export default Box;
export const _styles = styles