// import cls from "./EmployeeWizard.module.scss";
import { Questionnaire } from "features/Wizard/Questionnaire";
interface EmployeeWizardPageProps {
  className?: string;
}

const EmployeeWizardPage = ({ className }: EmployeeWizardPageProps) => {
  return (
    <div>
      <Questionnaire />
    </div>
  );
};

export default EmployeeWizardPage;
