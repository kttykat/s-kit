import createListner from "../../lib/hooks/createListner";
import storeActive from "../../lib/hooks/storeActive";
import { DefaultUIProps, DropdownItem } from "../../types";
import styles from "./styles.module.css";

type Props = {
  toggler: {
    text: string;
    icon?: JSX.Element;
  };
  items: DropdownItem[];
} & DefaultUIProps;
const Dropdown = ({ items, toggler, className, onClick, style }: Props) => {
  const { value, reverseState } = storeActive(false);
  items.forEach((item) => {
    if (item.keybind) {
      const ctrl = item.keybind.includes("ctrl");
      const shift = item.keybind.includes("shift");
      createListner(
        () => {
          if (item.onClick) {
            item.onClick(null);
          }
        },
        item.keybind
          .replaceAll("ctrl", "")
          .replaceAll("shift", "")
          .replaceAll("+", ""),
        ctrl,
        shift
      );
    }
  });
  return (
    <div className={styles.d}>
      <div
        className={`${value ? styles.a : ""} ${styles.bg}`}
        id="bg"
        onClick={() => {
          if (value) {
            reverseState();
          }
        }}
      ></div>
      <div
        className={`${className} ${styles.dropdown} ${value ? styles.a : ""}`}
        style={style}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
      >
        <div className={styles.toggler} onClick={() => reverseState()}>
          <p>{toggler.text}</p>
          {toggler.icon ? toggler.icon : <i className="iconoir-arrow-down"></i>}
        </div>
        <div className={styles.component}>
          {items.map((item) => {
            const _ = item.name.split(" ").join("-");
            return (
              <div
                id={_}
                key={_}
                className={styles.item}
                onClick={(e) => {
                  if (item.href) {
                    reverseState();
                    window.location.href = item.href;
                  }
                  if (item.onClick) {
                    item.onClick(e);
                  }
                }}
              >
                <div>
                  {item.icon}
                  <p>{item.name}</p>
                </div>
                {item.keybind ? (
                  <p className={styles.keybind}>{item.keybind}</p>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
export const _styles = styles;
