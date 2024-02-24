import { Questionnaire } from "features/Questionnaire/Questionnaire";
import cls from "./StateMachinePage.module.scss";
import { useMachineTemplate } from "app/providers/StateMachineProvider/lib/useMachineTemplate";

interface StateMachinePageProps {
  className?: string;
}

const StateMachinePage = ({ className }: StateMachinePageProps) => {
  const { isLoading } = useMachineTemplate();

  if (isLoading) {
    return <div>Loading state machine</div>;
  }

  return (
    <div className={cls["state-machine-page"]}>
      <Questionnaire />
    </div>
  );
};

export default StateMachinePage;
