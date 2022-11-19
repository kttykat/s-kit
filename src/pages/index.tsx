"use client";

import { useState } from "react";
import storeActive from "../lib/hooks/storeActive";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Code from "../ui/Code";
import Dropdown from "../ui/Dropdown";
import Icon from "../ui/Icon";
import Input from "../ui/Input";
import Switch from "../ui/Switch";
import TextArea from "../ui/Textarea";
import { toggleToast } from "../ui/Toast";

interface Props {}
const RootPage = ({}: Props) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState(
    `// Code Block\nconsole.log("Hello world!")`
  );
  const { value: passwordOrNah, reverseState: reversePasswordOrNah } =
    storeActive(false);
  return (
    <>
      <h1>Saige's Kit</h1>
      <p className="opacity-80">
        A simple{" "}
        <a className="link" href="https://beta.nextjs.org">
          next.js
        </a>{" "}
        template built on top of the t3 stack.
      </p>
      <div
        style={{
          margin: ".5rem 1rem 1rem 0rem",
          gap: ".5rem",
        }}
        className="flex"
      >
        <Button type="sm" href="https://github.com/kttykat">
          Github
        </Button>
        <Button type="sm" href="https://discord.com/users/974025524546531380">
          Discord
        </Button>
        <Button type="sm" href="mailto:hi@saige.lgbt">
          Email
        </Button>
      </div>

      <h3 style={{ marginBottom: ".5rem", marginTop: "2rem" }}>UI Examples</h3>
      <div
        className="flex"
        style={{
          gap: ".5rem",
          flexDirection: "column",
        }}
      >
        <div className="flex" style={{ gap: ".5rem", alignItems: "center" }}>
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
        </div>
        <div className="flex" style={{ alignItems: "center", gap: "1rem" }}>
          <Switch reverseState={reversePasswordOrNah} value={passwordOrNah} />
          <p className={`opacity-${passwordOrNah ? "100" : "50"}`}>
            Password? (switch)
          </p>
        </div>
        <div
          className="flex"
          style={{ marginTop: ".5rem", gap: ".5rem", alignItems: "center" }}
        >
          <Icon>
            <i className="iconoir-peace-hand" />
          </Icon>
          <Icon pointer>
            <i className="iconoir-link" />
          </Icon>
          <Icon pointer>
            <i className="iconoir-github" />
          </Icon>
        </div>
        <div className="flex" style={{ gap: ".5rem", alignItems: "center" }}>
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
          <Button
            onClick={() => {
              toggleToast("Smol button pressed :o (click me to close)");
            }}
            style={{ width: "fit-content" }}
            type="sm"
          >
            Button (smol)
          </Button>
        </div>
        <div
          className="flex"
          style={{ marginTop: ".5rem" }}
        >
          <Dropdown
            toggler={{
              text: "Hello world?",
            }}
            items={[
              { name: "Documentation", keybind: "ctrl+d", href: "/test" },
              { name: "Users" },
            ]}
          />
        </div>
        <div className="flex" style={{ marginTop: ".5rem" }}>
          <TextArea
            mono
            setValue={setCode}
            value={code}
          />
        </div>
        <Code code={code} language="javascript" />
      </div>
      <Box style={{ marginTop: ".5rem"}}>
        <h3>This is a box</h3>
        <p>Its just a simple HTML div with some styling and position relative.</p>
      </Box>
    </>
  );
};

export default RootPage;
