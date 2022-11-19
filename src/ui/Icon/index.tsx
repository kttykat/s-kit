import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css"

type Props = {
  children: JSX.Element;
  pointer?: boolean;
} & DefaultUIProps
const Icon = ({ pointer, children, className, onClick, style }: Props) => {
  return <div onClick={(e) => {
    if(onClick) {
      onClick(e)
    }
  }} style={style} className={`${className} ${pointer ? styles.point : ""} ${styles.icon}`}>
    {children}
  </div>
}

export default Icon;
export const _styles = styles