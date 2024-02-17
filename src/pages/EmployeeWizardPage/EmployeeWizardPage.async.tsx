import { lazy } from "react";

export const EmployeeWizardPageAsync = lazy(
  () => import("./EmployeeWizardPage")
);
