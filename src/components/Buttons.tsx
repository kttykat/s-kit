import DivLayout from "../layouts/DivLayout/";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { toggleToast } from "../ui/Toast";
import styles from "./styles.module.css";

type Props = {};
const Buttons = ({}: Props) => {
  return (
    <>
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Buttons + Toast</h3>
      <DivLayout row>
        <Button
          onClick={() => {
            toggleToast(
              "You would of been redirected but for this example enjoy another toast (click me to close)"
            );
          }}
          style={{ width: "fit-content" }}
        >
          Button (link)
        </Button>
        <Button
          onClick={() => {
            toggleToast("Onclick button pressed! :3 (click me to close)");
          }}
          style={{ width: "fit-content" }}
        >
          Button (click)
        </Button>
      </DivLayout>
    </>
  );
};

export default Buttons;
