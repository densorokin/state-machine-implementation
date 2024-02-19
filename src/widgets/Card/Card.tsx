import { CSSTransition } from "react-transition-group";
import { Button } from "shared/ui/Button/Button";
import cls from "./Card.module.scss";

export const Card = ({
  active,
  children,
  next,
  prev,
  subtitle,
  title,
}: any) => {
  return (
    <CSSTransition in={active} timeout={300} classNames="swipe" unmountOnExit>
      <div>
        <div className={cls.card}>
          <header className={cls["header"]}>
            <h2 className={cls["title"]}>{title}</h2>
            <p className={cls["subtitle"]}>{subtitle}</p>
          </header>
          <div className={cls["main"]}>{children}</div>
          <div className={cls["actions"]}>
            {prev && (
              <Button
                className={(cls["action"], cls["action_prev"])}
                onClick={prev.action}
              >
                {prev.content}
              </Button>
            )}
            {next && (
              <button
                className={(cls["action"], cls["action_next"])}
                onClick={next.action}
              >
                {next.content}
              </button>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
