import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { EmployeeWizardPage } from "pages/EmployeeWizardPage";
import StateMachineProvider from "app/providers/StateMachineProvider/ui/StateMachineProvider";

export enum AppRoutes {
  MAIN = "main",
  STATE_MACHINE = "state-machine",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
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
        <EmployeeWizardPage />
      </StateMachineProvider>
    ),
  },
];
