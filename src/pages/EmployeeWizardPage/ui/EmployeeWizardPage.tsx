// import cls from "./EmployeeWizard.module.scss";
import { Wizard } from "features/Wizard/Wizard";
interface EmployeeWizardPageProps {
  className?: string;
}

const EmployeeWizardPage = ({ className }: EmployeeWizardPageProps) => {
  return (
    <div>
      <Wizard />
    </div>
  );
};

export default EmployeeWizardPage;
