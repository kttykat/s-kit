import { ClickEvent } from "../types";

export const clickHandler = (e: ClickEvent, onClick?: (e?: any) => any) => {
  if(onClick) {
    onClick(e)
  }
}