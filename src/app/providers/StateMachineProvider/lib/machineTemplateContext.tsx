import { createContext } from "react";
import { StateMachine } from "state-machine-lib";

export interface MachineTemplateContextProps {
  machineTemplate?: StateMachine;
}

export const MachineTemplateContext =
  createContext<MachineTemplateContextProps>({});
