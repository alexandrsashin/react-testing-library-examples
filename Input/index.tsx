import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  value?: string;
  type?: "text" | "number";
  onChange: (event: {
    name: string;
    value: string;
    valueAsNumber: number;
  }) => void;
}

const Input = ({ name, value, type = "text", onChange }: InputProps) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      onChange={({ target }: ChangeEvent<HTMLInputElement>) =>
        onChange({
          name: target.name,
          value: target.value,
          valueAsNumber: target.valueAsNumber,
        })
      }
    />
  );
};

export default Input;
