import Button from "../ui/Button";

type Props = {};
const Page404 = ({}: Props) => {
  return (
    <div>
      <h1 style={{ color: `var(--accent-main)` }}>Page Not Found!</h1>
      <p>We were unable to find the page you were looking for.</p>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <Button href="/">Send me home!</Button>
      </div>
    </div>
  );
};

export default Page404;
