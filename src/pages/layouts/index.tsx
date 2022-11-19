import { LayoutProps } from "../../types";
import CodeLine from "../../ui/CodeLine";
import styles from "./styles.module.css";

type Props = {} & LayoutProps;
const DocsIndex = ({ children }: Props) => {
  return (
    <>
      <h1>Hey! 🌿</h1>
      <p className="opacity-80">
        This page ( and anything after <CodeLine>/layouts</CodeLine> ) is now
        rendered with the <CodeLine>ExampleLayout</CodeLine> component wraping
        it.
      </p>
    </>
  );
};

export default DocsIndex;
