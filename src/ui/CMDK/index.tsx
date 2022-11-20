import { Dispatch, SetStateAction, useState } from "react";
import { toggleCmdk } from "../../lib/handler";
import storeActive from "../../lib/hooks/storeActive";
import useExtendedEffect from "../../lib/hooks/useExtendedEffect";
import { CMDKOption, DefaultUIProps } from "../../types";
import Icon from "../Icon";
import Input from "../Input";
import styles from "./styles.module.css";

type onSelectProps = {
  activeOne: CMDKOption;
  close: () => any;
  query: string;
};

type Props = {
  values: CMDKOption[];
  onSelect: (values: onSelectProps) => any;
} & DefaultUIProps;

const formatName = (z: CMDKOption): string | null =>
  z ? z.name?.toLowerCase().split(" ").join("-") : null;

const setItems = (
  onSelect: (values: onSelectProps) => any,
  values: CMDKOption[],
  search: string,
  setActiveOne: Dispatch<SetStateAction<string | null>>,
  activeOne: string,
  reverseState: () => any,
  setSearch: Dispatch<SetStateAction<string>>,
  value: boolean
) => {
  const filtered = values.filter((h) =>
    search
      ? h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.description?.toLowerCase().includes(search.toLowerCase())
      : true
  );

  return filtered && filtered.length > 0 ? (
    <>
      {values
        .filter((h) =>
          search
            ? h.name.toLowerCase().includes(search.toLowerCase()) ||
              h.description?.toLowerCase().includes(search.toLowerCase())
            : true
        )
        .map((v) => {
          return (
            <div
              onClick={() => {
                setActiveOne(formatName(v) as string);
                onSelect({
                  activeOne: v as CMDKOption,
                  close: () => {
                    setSearch("");
                    toggleCmdk();
                    if (value) {
                      reverseState();
                    }
                  },
                  query: search,
                });
              }}
              key={formatName(v)}
              className={`${styles.item} ${
                activeOne === formatName(v) ? styles.a : ""
              }`}
            >
              <div className={styles.full}>
                {v.icon ? <Icon className={styles.icon}>{v.icon}</Icon> : <></>}
                <div className={styles.content}>
                  <h4>
                    {v.name}
                  </h4>
                  {v.description ? <p>{v.description}</p> : <></>}
                </div>
              </div>
            </div>
          );
        })}
    </>
  ) : (
    <>
      <p className={`opacity-80 ${styles.nofound}`}>
        Hmmm, appears no items match your query :(
      </p>
    </>
  );
};

const CMDK = ({ className, style, values, onSelect }: Props) => {
  const { value, reverseState } = storeActive(false);
  const [search, setSearch] = useState("");
  const [activeOne, setActiveOne] = useState(
    formatName(values[0] as CMDKOption)
  );
  useExtendedEffect(() => {
    document.onkeydown = (ev) => {
      const currentActive = values.find((f) => formatName(f) === activeOne);
      if (!currentActive) return;
      let next = values.indexOf(currentActive) + 1;
      let s = search;
      if (ev.key.toLowerCase() === "arrowdown") {
        if (!values[next]) next = 0;
        setActiveOne(formatName(values[next] as CMDKOption));
      }
      if (ev.key.toLowerCase() === "arrowup") {
        next = values.indexOf(currentActive) + -1;
        if (!values[next]) next = values.length - 1;
        setActiveOne(formatName(values[next] as CMDKOption));
      }
      if (ev.key.toLowerCase() === "enter") {
        onSelect({
          activeOne: currentActive,
          close: () => {
            setSearch("");
            toggleCmdk();
            if (value) {
              reverseState();
            }
          },
          query: search,
        });
      }
    };
  });

  return (
    <div className={styles.cmdk}>
      <div
        className={`${styles.bg} ${value ? styles.a : ""}`}
        id="cmdk_bg"
        onClick={() => {
          setSearch("");
          toggleCmdk();
          if (value) {
            reverseState();
          }
        }}
      ></div>
      <div
        className={`${className} ${styles.component} ${value ? styles.a : ""}`}
        style={style}
        id="cmdk_component"
      >
        <Input
          className={styles.input}
          setValue={setSearch}
          afterSet={(s) => {
            const filtered = values.filter((h) =>
              s
                ? h.name?.toLowerCase().includes(s.toLowerCase()) ||
                  h.description?.toLowerCase().includes(s.toLowerCase())
                : true
            );
            setActiveOne(formatName(filtered[0] as CMDKOption));
          }}
          placeholder="..."
        />
        <div className={styles.list}>
          {setItems(
            onSelect,
            values,
            search,
            setActiveOne,
            activeOne as string,
            reverseState,
            setSearch,
            value
          )}
        </div>
      </div>
    </div>
  );
};

export default CMDK;
export const _styles = styles;
