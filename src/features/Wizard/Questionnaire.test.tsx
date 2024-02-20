import { fireEvent, render, screen } from "@testing-library/react";
import { Questionnaire } from "./Questionnaire";

const expectToBeInTheDocument = (testId: string): HTMLElement => {
  const elem = screen.getByTestId(testId);
  expect(elem).toBeInTheDocument();

  return elem;
};

describe("Wizard", () => {
  test("Wizard flow", () => {
    render(<Questionnaire />);
    expect(screen.getByTestId("wizard-container")).toBeInTheDocument();

    expectToBeInTheDocument("initial");
    const initialNextBtn = screen.getByTestId("initial-next-card-btn");
    expect(initialNextBtn.textContent).toBe("Start");
    fireEvent.click(initialNextBtn);

    expectToBeInTheDocument("personal");
    const personalNextBtn = screen.getByTestId("personal-next-card-btn");
    expect(personalNextBtn.textContent).toBe("Next");
    fireEvent.click(personalNextBtn);

    expectToBeInTheDocument("occupation");
    const occupationBackBtn = screen.getByTestId("occupation-prev-card-btn");
    expect(occupationBackBtn.textContent).toBe("Back");
    fireEvent.click(occupationBackBtn);
    fireEvent.click(personalNextBtn);

    const studentRadioBtn = expectToBeInTheDocument("input-occupation-student");
    const workerRadioBtn = expectToBeInTheDocument("input-occupation-worker");

    expect(studentRadioBtn).not.toBeChecked();
    expect(workerRadioBtn).not.toBeChecked();

    fireEvent.click(studentRadioBtn);
    expectToBeInTheDocument("education");
    const educationBackBtn = screen.getByTestId("education-prev-card-btn");
    fireEvent.click(educationBackBtn);

    fireEvent.click(workerRadioBtn);
    expectToBeInTheDocument("work");
    const workBackBtn = screen.getByTestId("work-prev-card-btn");
    fireEvent.click(workBackBtn);

    fireEvent.click(studentRadioBtn);
    const education = screen.getByTestId("education-next-card-btn");
    expect(education.textContent).toBe("Send survey");
    fireEvent.click(education);

    expectToBeInTheDocument("loader");
    // expectToBeInTheDocument("survey");
  });
});
