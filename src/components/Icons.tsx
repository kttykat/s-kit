import DivLayout from "../layouts/DivLayout/";
import Icon from "../ui/Icon";
import styles from "./styles.module.css";

type Props = {};
const Icons = ({}: Props) => {
  return (
    <>
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Icons</h3>
      <DivLayout row>
        <Icon>
          <i className="iconoir-peace-hand" />
        </Icon>
        <Icon pointer>
          <i className="iconoir-link" />
        </Icon>
        <Icon pointer>
          <i className="iconoir-github" />
        </Icon>
      </DivLayout>
    </>
  );
};

export default Icons;
