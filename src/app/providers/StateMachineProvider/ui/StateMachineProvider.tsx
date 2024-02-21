import { useEffect, useState, ReactNode } from "react";
import { MachineTemplateContext } from "../lib/machineTemplateContext";
import { StateMachineConfiguration } from "state-machine-lib";

export const StateMachineProvider = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: StateMachineConfiguration;
}) => {
  const [machineTemplate, setMachineTemplate] =
    useState<StateMachineConfiguration>(initialState);

  const getStateMachine = async () => {
    const response = await fetch("http://denys.sorokin.fvds.ru/api");
    const data = await response.json();

    setMachineTemplate(data);
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
