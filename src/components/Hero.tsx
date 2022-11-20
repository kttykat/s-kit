import DivLayout from "../layouts/DivLayout/";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Quote from "../ui/Quote";

type Props = {};
const Hero = ({}: Props) => {
  return (
    <DivLayout>
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
        <Button href="https://github.com/kttykat">Github</Button>
        <Button href="https://discord.com/users/974025524546531380">
          Discord
        </Button>
        <Button href="mailto:hi@saige.lgbt">Email</Button>
        <div style={{ display: "flex", flexDirection: "row", gap: ".5rem", alignItems: "flex-start"}}>
          <Button href="https://saige.systems">Portfolio</Button>
          <Badge type="warning">WIP</Badge>
        </div>
      </div>

      <Quote faded>
        <p>This is quote fyi, Recent changes: Quote, Code line, CMDK, Badges, Updates Code block to allow file names + other small changes.</p>
        <br/>
        <p>Need todo:</p>
        <p>- Fix Keyboard Listener</p>
      </Quote>
    </DivLayout>
  );
};

export default Hero;
