import { Questionnaire } from "features/Questionnaire/Questionnaire";
interface StateMachinePageProps {
  className?: string;
}

const StateMachinePage = ({ className }: StateMachinePageProps) => {
  return (
    <div>
      <Questionnaire />
    </div>
  );
};

export default StateMachinePage;
