export interface Text {
  placeHolder?: string;
  maxLength?: LengthType;
  minLenght?: LengthType;
  readOnly?: boolean;
  disabled?: boolean;
}

type LengthType = number | null;
