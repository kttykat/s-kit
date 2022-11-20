import { useState } from "react";
import DivLayout from "../layouts/DivLayout/";
import storeActive from "../lib/hooks/storeActive";
import Input from "../ui/Input";
import Switch from "../ui/Switch";
import styles from "./styles.module.css";

type Props = {};
const InputAndSwitch = ({}: Props) => {
  const { value: passwordOrNah, reverseState: reversePasswordOrNah } =
    storeActive(false);
  const [name, setName] = useState("");
  return (
    <>
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Input & Switch</h3>
      <DivLayout>
        <DivLayout spacing>
          <Input
            placeholder="What is your name?"
            setValue={setName}
            type={passwordOrNah ? "password" : "text"}
          />
          {name ? (
            <p>
              {passwordOrNah ? `Password: ${name}` : `Name: ${name} (hiii)`}
            </p>
          ) : (
            <></>
          )}
        </DivLayout>
        <DivLayout row spacing>
          <Switch reverseState={reversePasswordOrNah} value={passwordOrNah} />
          <p className={`opacity-${passwordOrNah ? "100" : "50"}`}>
            Password? (switch)
          </p>
        </DivLayout>
      </DivLayout>
    </>
  );
};

export default InputAndSwitch;
