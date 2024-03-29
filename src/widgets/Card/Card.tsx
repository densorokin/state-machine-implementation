import { Button } from "shared/ui/Button/Button";
import cls from "./Card.module.scss";
import { ReactNode } from "react";

type CardProps = {
  dataTestId: string;
  active: boolean;
  children?: ReactNode;
  next?: {
    action: () => void;
    content: string;
  };
  prev?: {
    action: () => void;
    content: string;
  };
  subtitle: string;
  title: string;
};

export const Card = ({
  dataTestId,
  active,
  children,
  next,
  prev,
  subtitle,
  title,
}: CardProps) => {
  if (!active) return;

  return (
    <div data-testid={dataTestId}>
      <div className={cls.card}>
        <header className={cls.header}>
          <h2 className={cls.title}>{title}</h2>
          <p className={cls.subtitle}>{subtitle}</p>
        </header>
        <div className={cls.main}>{children}</div>
        <div className={cls.actions}>
          {prev && (
            <Button
              dataTestId={`${dataTestId}-prev-card-btn`}
              className={cls.btn_prev}
              onClick={prev.action}
            >
              {prev.content}
            </Button>
          )}
          {next && (
            <Button
              className={cls.btn_next}
              onClick={next.action}
              dataTestId={`${dataTestId}-next-card-btn`}
            >
              {next.content}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
