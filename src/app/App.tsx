import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar/Navbar";
import "./styles/index.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";

export const App = () => {
  return (
    <div className="app">
      <Navbar>
        <AppLink to="/">Main page</AppLink>
        <AppLink to="/state-machine">State machine</AppLink>
      </Navbar>
      <AppRouter />
    </div>
  );
};
