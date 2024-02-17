import cls from "./Counter.module.scss";

import { useState } from "react";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={cls.counter}>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)} className="btn">
        btn
      </button>
    </div>
  );
};
