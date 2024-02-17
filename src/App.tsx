import { Link, Route, Routes } from "react-router-dom";
import { EmployeeWizardPageAsync } from "./pages/EmployeeWizardPage/EmployeeWizardPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";
import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main page</Link>
      <Link to="/state-machine">State machine</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/state-machine" element={<EmployeeWizardPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
