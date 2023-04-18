interface Input {
  disabled?: boolean;
}

export interface Text extends Input {
  placeHolder?: string;
  maxLength?: LengthType;
  minLenght?: LengthType;
  readOnly?: boolean;
}

export interface Checkbox extends Input {}


type LengthType = number | null;