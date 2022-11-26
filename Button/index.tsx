import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
