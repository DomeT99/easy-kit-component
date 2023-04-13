import { CustomClasses } from "../common/common";

export interface Input {
  type?: InputType;
  placeHolder?: string;
  customClasses?: CustomClasses;
  maxLength?: number | null;
  minLenght?: number | null;
}

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
