import layouts from "../layouts";
import { ClickEvent, Layout } from "../types";
import { _styles as CMDKStyles } from "../ui/CMDK/"

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


export const toggleCmdk = () => {
  const bg = document.getElementById("cmdk_bg")
  const comp = document.getElementById("cmdk_component")
  if(!bg || !comp) return;
  bg.classList.toggle(`${CMDKStyles.a}`)
  comp.classList.toggle(`${CMDKStyles.a}`)
}