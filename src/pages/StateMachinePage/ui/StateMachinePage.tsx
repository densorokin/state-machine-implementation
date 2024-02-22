import { Questionnaire } from "features/Questionnaire/Questionnaire";
import cls from "./StateMachinePage.module.scss";
interface StateMachinePageProps {
  className?: string;
}

const StateMachinePage = ({ className }: StateMachinePageProps) => {
  return (
    <div className={cls["state-machine-page"]}>
      <Questionnaire />
    </div>
  );
};

export default StateMachinePage;
