import { CSSProperties } from "react";

export type O<T = any> = {
  [key: string]: T;
};

export type ClickEvent<T = HTMLDivElement> = MouseEvent<
  T,
  globalThis.MouseEvent
>;

export type DefaultUIProps<T = HTMLDivElement> = {
  className?: string;
  onClick?: (e?: ClickEvent<T>) => any;
  style?: CSSProperties;
};

export type DropdownItem = {
  name: string;
  href?: string;
  keybind?: string;
  icon?: JSX.Element;
  onClick?: (e) => any
}

export type InputTypes =
| 'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'
| (string & {});