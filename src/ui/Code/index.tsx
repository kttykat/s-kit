import { useState } from "react";
import { DefaultUIProps } from "../../types";
import styles from "./styles.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import useExtendedEffect from "../../lib/hooks/useExtendedEffect";

type Props = {
  code: string;
  language: string;
  fileName?: string;
} & DefaultUIProps;

const Code = ({
  code,
  className,
  onClick,
  style,
  language,
  fileName,
}: Props) => {
  const [copied, setCopied] = useState(false);
  useExtendedEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }, [copied]);
  return (
    <div className={`${styles.code} ${className}`} style={style}>
      <div className={styles.main}>
        {fileName ? (
          <div className={styles.fileName}>
            <p>{fileName}</p>
          </div>
        ) : (
          <></>
        )}
        <div className={styles.space}>
          <SyntaxHighlighter showLineNumbers language={language} style={theme}>
            {code.trim()}
          </SyntaxHighlighter>
        </div>
      </div>
      <div
        className={styles.copy}
        onClick={() => {
          if (!copied) {
            setCopied(true);
          }
          window.navigator.clipboard.writeText(code.trim());
        }}
      >
        <i className={`iconoir-${copied ? "check" : "copy"}`}></i>
      </div>
    </div>
  );
};

export default Code;
export const _styles = styles;
