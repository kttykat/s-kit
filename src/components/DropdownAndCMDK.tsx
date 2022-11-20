import { useState } from "react";
import DivLayout from "../layouts/DivLayout/";
import { toggleCmdk } from "../lib/handler";
import Button from "../ui/Button";
import CMDK from "../ui/CMDK";
import Dropdown from "../ui/Dropdown";
import Icon from "../ui/Icon";
import { toggleToast } from "../ui/Toast";
import styles from "./styles.module.css";

type Props = {};
const DropdownAndCMDK = ({}: Props) => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <CMDK
        onSelect={({ activeOne, close }) => {
          setSelected(activeOne.name);
          close();
          if(activeOne.href) {
            window.location.href = activeOne.href
          }
        }}
        values={[
          { name: "Hey select me!", icon: <i className="iconoir-check-circled-outline"></i> },
          { name: "NO wait select me!!", icon: <i className="iconoir-check"></i> },
          { name: "Dont select me :(", href: "https://www.youtube.com/watch?v=p7YXXieghto", icon: <i className="iconoir-cancel"></i> },
          { name: "Github", href: "https://github.com/kttykat/s-kit", icon: <i className="iconoir-github"></i> },
          { name: "Portfolio", href: "https://saige.systems" },
          { name: "Not a thing", description: "A thing with a description though :o", icon: <i className="iconoir-app-notification"></i> },
        ]}
      />
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}} >Dropdown & CMDK</h3>
      <DivLayout row>
        <Dropdown
          toggler={{
            text: "Dropdown + Links To Layouts",
          }}
          items={[
            { name: "Example Layout", href: "/layouts" },
            {
              name: "Filler",
              keybind: "ctrl+x",
              onClick: () => {
                toggleToast("Filler dropdown item interacted with");
              },
            },
          ]}
        />
        <Button
          onClick={() => {
            toggleCmdk();
          }}
        >
          Toggle CMDK
        </Button>
        <p style={{ marginTop: "0.2rem" }}>selected: {selected || "None"}</p>
      </DivLayout>
    </>
  );
};

export default DropdownAndCMDK;
