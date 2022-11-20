import DivLayout from "../layouts/DivLayout/";
import Badge from "../ui/Badge";
import Icon from "../ui/Icon";
import styles from "./styles.module.css";

type Props = {};
const Badges = ({}: Props) => {
  return (
    <>
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Badges</h3>
      <DivLayout row>
        <Badge>Default</Badge>
        <Badge type="error">Error</Badge>
        <Badge type="info">Info</Badge>
        <Badge type="warning">Warning</Badge>
        <Badge type="success">Success</Badge>
      </DivLayout>

      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Badges Hover</h3>
      <DivLayout row>
        <Badge hover>Default - Hover</Badge>
        <Badge type="error" hover>
          Error - Hover
        </Badge>
        <Badge type="info" hover>
          Info - Hover
        </Badge>
        <Badge type="warning" hover>
          Warning - Hover
        </Badge>
        <Badge type="success" hover>
          Success - Hover
        </Badge>
      </DivLayout>

      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Badges Pointer</h3>
      <DivLayout row>
        <Badge hover>Default - Pointer</Badge>
        <Badge type="error" hover pointer>
          Error - Pointer
        </Badge>
        <Badge type="info" hover pointer>
          Info - Pointer
        </Badge>
        <Badge type="warning" hover pointer>
          Warning - Pointer
        </Badge>
        <Badge type="success" hover pointer>
          Success - Pointer
        </Badge>
      </DivLayout>
    </>
  );
};

export default Badges;
