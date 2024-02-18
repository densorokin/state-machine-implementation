import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main page</Link>
      <Link to="/state-machine">State machine</Link>
      <AppRouter />
    </div>
  );
};
