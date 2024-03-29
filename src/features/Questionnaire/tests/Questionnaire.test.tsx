import { fireEvent, render, screen } from "@testing-library/react";
import { StateMachineProvider } from "app/providers/StateMachineProvider";
import { Questionnaire } from "../Questionnaire";
import { stateMachineConfigurationMock } from "./mocks";

const expectToBeInTheDocument = (testId: string): HTMLElement => {
  const elem = screen.getByTestId(testId);
  expect(elem).toBeInTheDocument();

  return elem;
};

describe("Wizard", () => {
  test("Wizard flow", () => {
    render(
      <StateMachineProvider initialState={{ ...stateMachineConfigurationMock }}>
        <Questionnaire />
      </StateMachineProvider>
    );
    expect(screen.getByTestId("wizard-container")).toBeInTheDocument();

    expectToBeInTheDocument("initial");
    const initialNextBtn = screen.getByTestId("initial-next-card-btn");
    expect(initialNextBtn.textContent).toBe("Start");
    fireEvent.click(initialNextBtn);

    expectToBeInTheDocument("personal");
    let personalNextBtn = screen.getByTestId("personal-next-card-btn");
    expect(personalNextBtn.textContent).toBe("Next");
    fireEvent.click(personalNextBtn);

    expectToBeInTheDocument("occupation");
    const occupationBackBtn = screen.getByTestId("occupation-prev-card-btn");
    expect(occupationBackBtn.textContent).toBe("Back");
    fireEvent.click(occupationBackBtn);

    expectToBeInTheDocument("personal");
    personalNextBtn = screen.getByTestId("personal-next-card-btn");
    fireEvent.click(personalNextBtn);

    const studentRadioBtn = expectToBeInTheDocument("input-occupation-student");
    let workerRadioBtn = expectToBeInTheDocument("input-occupation-worker");

    expect(studentRadioBtn).not.toBeChecked();
    expect(workerRadioBtn).not.toBeChecked();

    fireEvent.click(studentRadioBtn);
    expectToBeInTheDocument("education");
    const educationBackBtn = screen.getByTestId("education-prev-card-btn");
    fireEvent.click(educationBackBtn);

    workerRadioBtn = screen.getByTestId("input-occupation-worker");
    fireEvent.click(workerRadioBtn);
    expectToBeInTheDocument("work");
    const workBackBtn = screen.getByTestId("work-prev-card-btn");
    fireEvent.click(workBackBtn);

    workerRadioBtn = screen.getByTestId("input-occupation-worker");
    fireEvent.click(workerRadioBtn);
    const workNextBtn = screen.getByTestId("work-next-card-btn");
    expect(workNextBtn.textContent).toBe("Continue");
    fireEvent.click(workNextBtn);

    expectToBeInTheDocument("success");
    const successBtn = expectToBeInTheDocument("success-next-card-btn");
    expect(successBtn.textContent).toBe("Take another survey");
    fireEvent.click(successBtn);

    expectToBeInTheDocument("initial");
  });
});
