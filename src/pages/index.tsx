import { useState } from "react";
import Badges from "../components/Badges";
import Boxes from "../components/Boxes";
import Buttons from "../components/Buttons";
import CodeAndTextArea from "../components/CodeAndTextArea";
import DropdownAndCMDK from "../components/DropdownAndCMDK";
import Hero from "../components/Hero";
import Icons from "../components/Icons";
import InputAndSwitch from "../components/InputAndSwitch";


interface Props {}
const RootPage = ({}: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
      <Hero/>
      <InputAndSwitch/>
      <Icons/>
      <DropdownAndCMDK/>
      <Buttons/>
      <Badges/>
      <Boxes/>
      <CodeAndTextArea/>
    </div>
  );
};

export default RootPage;
