import { useEffect, useState, ReactNode } from "react";
import { MachineTemplateContext } from "../lib/machineTemplateContext";
import { StateMachineConfiguration } from "state-machine-lib";

import { stateMachineConfigurationMock } from "features/Questionnaire/tests/mocks";

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
    // const response = await fetch("http://denys.sorokin.fvds.ru/api");
    // const data = await response.json();
    // const sleep = (ms: number) =>
    //   new Promise((resolve) => setTimeout(resolve, ms));

    setMachineTemplate(stateMachineConfigurationMock);
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
