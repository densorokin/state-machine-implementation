// import { classNames } from 'shared/lib/classNames';
import cls from "./Button.module.scss";

import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <div data-testid="button-wrap">
      <button data-testid="button" className={cls.btn}>
        {children}
      </button>
    </div>
  );
};
