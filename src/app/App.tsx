import { Link, Route, Routes } from "react-router-dom";
import { EmployeeWizardPage } from "pages/EmployeeWizardPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main page</Link>
      <Link to="/state-machine">State machine</Link>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/state-machine" element={<EmployeeWizardPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
