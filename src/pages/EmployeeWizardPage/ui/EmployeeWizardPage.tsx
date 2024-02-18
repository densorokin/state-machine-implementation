// import cls from "./EmployeeWizard.module.scss";
import { Button } from "shared/ui/Button/Button";
interface EmployeeWizardPageProps {
  className?: string;
}

const EmployeeWizardPage = ({ className }: EmployeeWizardPageProps) => {
  return (
    <div>
      state machine <Button>Test</Button>
    </div>
  );
};

export default EmployeeWizardPage;
