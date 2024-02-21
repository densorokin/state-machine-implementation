import { CSSTransition } from "react-transition-group";
import { Button } from "shared/ui/Button/Button";
import cls from "./Card.module.scss";

export const Card = ({
  dataTestId,
  active,
  children,
  next,
  prev,
  subtitle,
  title,
}: any) => {
  return (
    <CSSTransition in={active} timeout={300} classNames="swipe" unmountOnExit>
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
    </CSSTransition>
  );
};
