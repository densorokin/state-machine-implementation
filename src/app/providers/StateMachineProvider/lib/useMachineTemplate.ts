import { useContext } from "react";
import { MachineTemplateContext } from "./machineTemplateContext";
import { StateMachineConfiguration } from "state-machine-lib";

interface UseStateMachineResult {
  machineTemplate: StateMachineConfiguration;
  isLoading: boolean;
}

export function useMachineTemplate(): UseStateMachineResult {
  const { machineTemplate } = useContext(MachineTemplateContext);

  return {
    machineTemplate,
    isLoading: !machineTemplate,
  };
}
