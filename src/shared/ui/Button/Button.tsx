import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  dataTestId?: string;
}

export const Button = ({
  children,
  onClick,
  dataTestId,
  className,
}: ButtonProps) => {
  return (
    <div>
      <button
        data-testid={dataTestId}
        className={classNames(cls.btn, {}, [className])}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
