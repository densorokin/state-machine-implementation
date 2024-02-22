import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { StateMachinePage } from "pages/StateMachinePage";
import { StateMachineProvider } from "app/providers/StateMachineProvider/ui/StateMachineProvider";

export enum AppRoutes {
  MAIN = "main",
  STATE_MACHINE = "state-machine",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/state-machine-implementation",
  [AppRoutes.STATE_MACHINE]: "/state-machine",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath["state-machine"],
    element: (
      <StateMachineProvider>
        <StateMachinePage />
      </StateMachineProvider>
    ),
  },
];
