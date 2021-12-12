import "./App.css";
import Navbar from "./UI/Navbar";
import Change from "./components/Change";
import Click from "./components/Click";
import KeyPress from "./components/KeyPress";
import Mousemove from "./components/Mousemove";
import Submit from "./components/Submit";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Change />
        </Route>
        <Route path="/click">
          <Click />
        </Route>
        <Route path="/keypress">
          <KeyPress />
        </Route>
        <Route path="/mousemove">
          <Mousemove />
        </Route>
        <Route path="/submit">
          <Submit />
        </Route>
      </Switch>
    </>
  );
}

export default App;
