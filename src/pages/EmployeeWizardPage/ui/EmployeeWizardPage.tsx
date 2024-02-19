// import cls from "./EmployeeWizard.module.scss";
import { Wizard } from "features/Wizard/Wizard";
import cls from "./EmployeeWizard.module.scss";
interface EmployeeWizardPageProps {
  className?: string;
}

const EmployeeWizardPage = ({ className }: EmployeeWizardPageProps) => {
  return (
    <div className={cls.wizard}>
      <Wizard />
    </div>
  );
};

export default EmployeeWizardPage;
