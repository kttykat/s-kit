import Button from "../ui/Button";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
};
const ExampleLayout = ({ children }: Props) => {
  return (
    <>
      <div className="window">
        {children}

        <div
        className="flex"
          style={{
            marginTop: "1rem",
            gap: ".5rem"
          }}
        >
          <Button>This is rendered within the layout</Button>
          <Button href="/">Head Home!</Button>
        </div>
      </div>
    </>
  );
};

export default ExampleLayout;
