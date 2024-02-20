import { useContext } from "react";
import { MachineTemplateContext } from "./machineTemplateContext";
import { StateMachine } from "state-machine-lib";

interface UseStateMachineResult {
  machineTemplate: StateMachine;
}

export function useMachineTemplate(): UseStateMachineResult {
  const { machineTemplate } = useContext(MachineTemplateContext);

  return {
    machineTemplate,
  };
}
