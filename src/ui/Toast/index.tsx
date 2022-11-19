import useExtendedEffect from "../../lib/hooks/useExtendedEffect";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";

export const toggleToast = (message?: string) => {
  const element = document.getElementById("toast");
  const child = document.getElementById("toast-child");
  if (!element || !child) return;
  if (message) {
    const _ = () => {
      child.innerText = `${message}`;
      element.classList.add(`${styles.a}`);
    };
    if (element.classList.contains(`${styles.a}`)) {
      element.classList.remove(`${styles.a}`);
      setTimeout(() => {
        child.innerText = ``;
        _();
      }, 500);
    } else {
      _();
    }
  } else {
    element.classList.remove(`${styles.a}`);
    setTimeout(() => {
      child.innerText = ``;
    }, 500);
  }
};

const isActive = () => {
  const element = document.getElementById("toast");
  if (!element) return false;
  return element.classList.contains(`${styles.a}`) ? true : false;
};

type Props = {} & DefaultUIProps;
const Toast = ({ className, onClick, style }: Props) => {
  return (
    <div
      id="toast"
      className={`${className} ${styles.toast}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        toggleToast();
      }}
      style={style}
    >
      <p id="toast-child">TEST</p>
    </div>
  );
};

export default Toast;
export const _styles = styles;
