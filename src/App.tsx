
import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
            {selectedView == "props1" ? <PropsDemo title="Props Demo" /> : null}
            {selectedView == "list" ? <ListDemo title="List Demo" /> : null}
            {selectedView == "event" ? <EventDemo title="Event Demo" /> : null}
            {selectedView == "form" ? <FormUncontrolled title="Form Uncontrolled" /> : null}
            {selectedView == "state1" ? <StateDemo1 title="State Demo1" /> : null}
            {selectedView == "state2" ? <StateDemo2 title="State Demo2" /> : null}
            {selectedView == "state3" ? <StateDemo3 title="State Demo3" /> : null}
            {selectedView == "useEffect" ? <UseEffectDemo title="useEffect Demo" /> : null}
            {selectedView == "fetch" ? <FetchDemo title="Fetch Demo" /> : null}
            {selectedView == "liftingstate" ? <LiftingState title="Lifting State" /> : null}
            {selectedView == "context" ? <ContextDemoApp title="Context Demo" /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("list")}>
        List demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("event")}>
        Event demo (imageButtons)
      </button>
      <button className="btn-w100" onClick={() => handleSelected("form")}>
        Forms uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state1")}>
        State demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state2")}>
        State demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("state3")}>
        State demo3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useEffect")}>
        useEffect demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch")}>
        Fetch demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("liftingstate")}>
        Lifting state
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context")}>
        Context demo
      </button>
    </>
  );
};
