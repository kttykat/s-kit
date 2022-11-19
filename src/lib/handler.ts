import layouts from "../layouts";
import { ClickEvent, Layout } from "../types";

export const clickHandler = (e: ClickEvent, onClick?: (e?: any) => any) => {
  if (onClick) {
    onClick(e);
  }
};

export const layoutHandler = (path: string): Layout | null => {
  const [, _, ...rest] = path.split("/");
  const layout = layouts.find(
    (z) => z.prefix.toLowerCase() === _?.toLowerCase()
  );
  return layout || null;
};
