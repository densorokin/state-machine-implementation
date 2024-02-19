import { Card } from "widgets/Card/Card";
import { useStateMachine } from "state-machine-lib";
import cls from "./Wizard.module.scss";
import { useEffect } from "react";
import { Loader } from "shared/ui/Loader/Loader";

const example = {
  initialState: "initial",
  initial: {
    actions: {
      onEnter() {},
      onExit() {},
    },
    transitions: {
      start: {
        target: "personal",
        action() {
          console.log('transition action for "start" in "initial" state');
        },
      },
    },
  },
  personal: {
    actions: {
      onEnter() {
        // console.log("off: onEnter");
      },
      onExit() {
        // console.log("off: onExit");
      },
    },
    transitions: {
      next: {
        target: "occupation",
        action() {
          console.log('transition action for "next" in "personal" state');
        },
      },
    },
  },
  occupation: {
    actions: {
      onEnter() {
        // console.log("on: onEnter");
      },
      onExit() {
        // console.log("on: onExit");
      },
    },
    transitions: {
      back: {
        target: "personal",
        action() {
          console.log('transition action for "back" in "occupation" state');
        },
      },
      education: {
        target: "education",
        action() {
          console.log(
            'transition action for "education" in "occupation" state'
          );
        },
      },
      work: {
        target: "work",
        action() {
          console.log(
            'transition action for "education" in "occupation" state'
          );
        },
      },
    },
  },
  education: {
    actions: {
      onEnter() {
        // console.log("on: onEnter");
      },
      onExit() {
        // console.log("on: onExit");
      },
    },
    transitions: {
      back: {
        target: "occupation",
        action() {
          console.log('transition action for "back" in "education" state');
        },
      },
      send: {
        target: "loading",
        action() {
          console.log('transition action for "send" in "education" state');
        },
      },
    },
  },
  work: {
    actions: {
      onEnter() {
        // console.log("on: onEnter");
      },
      onExit() {
        // console.log("on: onExit");
      },
    },
    transitions: {
      back: {
        target: "occupation",
        action() {
          console.log('transition action for "back" in "work" state');
        },
      },
      send: {
        target: "loading",
        action() {
          console.log('transition action for "send" in "work" state');
        },
      },
    },
  },
  loading: {
    actions: {
      onEnter() {
        console.log("on: IN loading");
      },
      onExit() {
        console.log("on: OUT loading");
      },
    },
    transitions: {
      success: {
        target: "success",
        action() {
          console.log('transition action for "reset" in "education" state');
        },
      },
    },
  },
  success: {
    actions: {
      onEnter() {
        // console.log("on: onEnter");
      },
      onExit() {
        // console.log("on: onExit");
      },
    },
    transitions: {
      reset: {
        target: "initial",
        action() {
          console.log('transition action for "reset" in "success" state');
        },
      },
    },
  },
};

export const Wizard = () => {
  const { transition, machineState } = useStateMachine(example);

  useEffect(() => {
    if (machineState === "loading") {
      setTimeout(() => {
        transition("success");
      }, 1500);
    }
  }, [machineState]);

  return (
    <div className={cls.wizard}>
      <Card
        active={machineState === "initial"}
        next={{ action: () => transition("start"), content: "Start" }}
        subtitle="Thank you for taking part in our survey"
        title="Survey"
      />

      <Card
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
        active={machineState === "occupation"}
        prev={{ action: () => transition("back"), content: "Back" }}
        subtitle="Do you work or study?"
        title="Occupation"
      >
        <div className={cls["input-group"]}>
          <label htmlFor="occupationStudent" className={cls["label-radio"]}>
            <input
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

      {machineState === "loading" && <Loader />}

      <Card
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
