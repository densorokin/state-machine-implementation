import { ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div data-testid="button-wrap">
      <button data-testid="button" className={cls.btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
