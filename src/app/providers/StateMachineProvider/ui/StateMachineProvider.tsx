import { useEffect, useState, ReactNode } from "react";
import { MachineTemplateContext } from "../lib/machineTemplateContext";

export const example = {
  initial: {
    actions: {
      onInAction() {},
      onOutAction() {},
    },
    transitions: {
      start: {
        target: "personal",
        action() {
          console.log('transition action for "start" in "initial" state');
        },
      },
    },
  },
  personal: {
    transitions: {
      next: {
        target: "occupation",
        action() {
          console.log('transition action for "next" in "personal" state');
        },
      },
    },
  },
  occupation: {
    transitions: {
      back: {
        target: "personal",
        action() {
          console.log('transition action for "back" in "occupation" state');
        },
      },
      education: {
        target: "education",
        action() {
          console.log(
            'transition action for "education" in "occupation" state'
          );
        },
      },
      work: {
        target: "work",
        action() {
          console.log(
            'transition action for "education" in "occupation" state'
          );
        },
      },
    },
  },
  education: {
    transitions: {
      back: {
        target: "occupation",
        action() {
          console.log('transition action for "back" in "education" state');
        },
      },
      send: {
        target: "loading",
        action() {
          console.log('transition action for "send" in "education" state');
        },
      },
    },
  },
  work: {
    transitions: {
      back: {
        target: "occupation",
        action() {
          console.log('transition action for "back" in "work" state');
        },
      },
      send: {
        target: "loading",
        action() {
          console.log('transition action for "send" in "work" state');
        },
      },
    },
  },
  loading: {
    transitions: {
      success: {
        target: "success",
        action() {
          console.log('transition action for "reset" in "education" state');
        },
      },
    },
  },
  success: {
    transitions: {
      reset: {
        target: "initial",
        action() {
          console.log('transition action for "reset" in "success" state');
        },
      },
    },
  },
};

export const StateMachineProvider = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: any;
}) => {
  const [machineTemplate, setMachineTemplate] = useState<any>(initialState);

  const getStateMachine = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    setMachineTemplate(example);
  };

  useEffect(() => {
    getStateMachine();
  }, []);

  return (
    <MachineTemplateContext.Provider value={{ machineTemplate }}>
      {children}
    </MachineTemplateContext.Provider>
  );
};
