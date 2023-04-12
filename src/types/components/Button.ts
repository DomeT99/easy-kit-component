import { CustomClasses } from "../common/common";

export interface Button {
  type?: ButtonType;
  disabled?: boolean;
  formId?: string;
  autoFocus?: boolean;
  customClasses?: CustomClasses;
}

type ButtonType = "button" | "submit" | "reset";
