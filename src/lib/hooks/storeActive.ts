import { useState } from "react";

export default (d: boolean = false) => {
  const [value, setValue] = useState(d);
  const reverseState = () => setValue(!value);
  return { value, setValue, reverseState };
};
