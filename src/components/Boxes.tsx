import DivLayout from "../layouts/DivLayout/";
import Box from "../ui/Box";
import Icon from "../ui/Icon";
import styles from "./styles.module.css";

type Props = {};
const Boxes = ({}: Props) => {
  return (
    <>
      <h3 style={{ marginBottom: "0.5rem", opacity: "0.6"}}>Box</h3>
      <DivLayout>
        <Box>
          <h3>This is a box</h3>
          <p>
            Its just a simple HTML div with some styling and position relative.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil
            officiis! At, libero est vero dignissimos illo aliquid laudantium
            sequi magnam optio nesciunt excepturi? Minus aspernatur esse
            voluptatibus maxime temporibus.
          </p>
        </Box>
      </DivLayout>
    </>
  );
};

export default Boxes;
