export interface Button {
  type?: ButtonType;
  disabled?: boolean;
  formId?: string;
  autoFocus?: boolean;
}

type ButtonType = "button" | "submit" | "reset";
