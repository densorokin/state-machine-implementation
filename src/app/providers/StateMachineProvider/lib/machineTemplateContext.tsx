import { createContext } from "react";
import { StateMachineConfiguration } from "state-machine-lib";

export interface MachineTemplateContextProps {
  machineTemplate?: StateMachineConfiguration;
}

export const MachineTemplateContext =
  createContext<MachineTemplateContextProps>(undefined);
