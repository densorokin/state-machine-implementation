// import { classNames } from 'shared/lib/classNames';
import "./Counter.scss";

import { useState } from "react";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="counter">{counter}</div>
      <button onClick={() => setCounter(counter + 1)} className="btn">
        btn
      </button>
    </div>
  );
};
