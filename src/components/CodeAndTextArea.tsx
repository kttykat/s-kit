import { useState } from "react";
import DivLayout from "../layouts/DivLayout/";
import Code from "../ui/Code";
import Icon from "../ui/Icon";
import TextArea from "../ui/Textarea";
import styles from "./styles.module.css";

type Props = {};
const CodeAndTextArea = ({}: Props) => {
  const [code, setCode] = useState(
    `// Code Block\nconsole.log("Hello world!")`
  );
  return (
   <>
   <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Code blocks & Text areas</h3>
    <DivLayout>
        <DivLayout spacing>
          <TextArea mono setValue={setCode} value={code} />
        </DivLayout>
        <Code fileName="write_above.js" code={code} language="javascript" />
    </DivLayout>
   </>
  );
};

export default CodeAndTextArea;
