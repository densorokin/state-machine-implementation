import { Card } from "widgets/Card/Card";
import { useStateMachine } from "state-machine-lib";
import cls from "./Questionnaire.module.scss";
import { useEffect } from "react";
import { useMachineTemplate } from "app/providers/StateMachineProvider/lib/useMachineTemplate";

const initialState = "initial";

export const Questionnaire = () => {
  const { machineTemplate } = useMachineTemplate();
  const { transition, machineState } = useStateMachine(
    initialState,
    machineTemplate
  );

  useEffect(() => {
    if (machineState === "loading") {
      setTimeout(() => {
        transition("success");
      }, 1500);
    }
  }, [machineState]);

  return (
    <div className={cls.wizard} data-testid="wizard-container">
      <Card
        dataTestId="initial"
        active={machineState === "initial"}
        next={{ action: () => transition("start"), content: "Start" }}
        subtitle="Thank you for taking part in our survey"
        title="Survey"
      />

      <Card
        dataTestId="personal"
        active={machineState === "personal"}
        next={{ action: () => transition("next"), content: "Next" }}
        subtitle="Tell us about you!"
        title="Personal"
      >
        <div className={cls["input-group"]}>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input type="text" placeholder="Floppa" id="name" className="input" />
        </div>
      </Card>

      <Card
        dataTestId="occupation"
        active={machineState === "occupation"}
        prev={{ action: () => transition("back"), content: "Back" }}
        subtitle="Do you work or study?"
        title="Occupation"
      >
        <div className={cls["input-group"]}>
          <label htmlFor="occupationStudent" className={cls["label-radio"]}>
            <input
              data-testid="input-occupation-student"
              type="radio"
              name="occupation"
              id="occupationStudent"
              className={cls["input-radio"]}
              onChange={() => transition("education")}
            />
            <span className={cls["label-radio__toggler"]}></span>
            <span className={cls["label-radio__content"]}>Student</span>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="occupationWorker" className={cls["label-radio"]}>
            <input
              data-testid="input-occupation-worker"
              type="radio"
              name="occupation"
              id="occupationWorker"
              className={cls["input-radio"]}
              onChange={() => transition("work")}
            />
            <span className={cls["label-radio__toggler"]}></span>
            <span className={cls["label-radio__content"]}>Worker</span>
          </label>
        </div>
      </Card>

      <Card
        dataTestId="work"
        active={machineState === "work"}
        next={{
          action: () => {
            transition("send");
          },
          content: "Send survey",
        }}
        prev={{ action: () => transition("back"), content: "Back" }}
        subtitle="Wow! What's your job?"
        title="Work"
      >
        <div className={cls["input-group"]}>
          <label htmlFor="job" className="label">
            Job
          </label>
          <input
            type="text"
            placeholder="Caracal"
            id="job"
            className={cls.input}
          />
        </div>
      </Card>

      <Card
        dataTestId="education"
        active={machineState === "education"}
        next={{
          action: () => {
            transition("send");
          },
          content: "Send survey",
        }}
        prev={{ action: () => transition("back"), content: "Back" }}
        subtitle="That's great! What's your future profession?"
        title="Education"
      >
        <div className={cls["input-group"]}>
          <label htmlFor="profession" className={cls.label}>
            Profession
          </label>
          <input
            type="text"
            placeholder="Meme"
            id="profession"
            className={cls.input}
          />
        </div>
      </Card>

      {machineState === "loading" && <div data-testid="loader">...loader</div>}

      <Card
        dataTestId="survey"
        active={machineState === "success"}
        prev={{
          action: () => transition("reset"),
          content: "Take another survey",
        }}
        subtitle="Thank you for your response! Want another survey?"
        title="We got it!"
      />
    </div>
  );
};