import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar/Navbar";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="app">
      <Navbar>
        <Link to="/">Main page</Link>
        <Link to="/state-machine">State machine</Link>
      </Navbar>
      <AppRouter />
    </div>
  );
};
