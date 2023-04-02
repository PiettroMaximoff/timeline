import { useState } from "react";
import "../../css/Timeline.css";
import Step from '../step/Step';

function Timeline() {
  const [view, setView] = useState("above-center");
  const [steps, setStep] = useState([
    {id: 1, stepNumber: 1, classes: 'timeline__step timeline__step_complete'},
    {id: 2, stepNumber: 2, classes: 'timeline__step timeline__step_inprogress'},
  ]);

  const addStep = () => {
    if (steps.length < 10) {
      const stepItem = {
        id: steps.length + 1,
        stepNumber: steps.length + 1,
        classes: 'timeline__step'
      }
      setStep([...steps, stepItem])
    }
  };

  const removeStep = () => {
    if (steps.length > 2) {
      setStep(steps.slice(0, -1));
    }
  };

  return (
    <>
      <div className={"timeline " + view}>
        <div className="timeline__wrapper">
          {steps.map(step => {
            return (
              <Step step={step} />
            )
          })}
        </div>

        <div className="timeline__step timeline__step-additional">
          <span></span>
        </div>
      </div>

      <nav className="control-panel">
        <ul className="control-panel__view center-above">
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view1" onChange={() => setView("above-center")} />
            <label htmlFor="view1" className="button">View 1</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view2" onChange={() => setView("under-center")} />
            <label htmlFor="view2" className="button">View 2</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view3" onChange={() => setView("above-between")} />
            <label htmlFor="view3" className="button">View 3</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view4" onChange={() => setView("under-between")} />
            <label htmlFor="view4" className="button">View 4</label>
          </li>
        </ul>

        <div className="control-panel__steps">
          <div className="control-panel__label">Steps</div>

          <div className="control-panel__wrapper">
            <button type="button" className="button" onClick={removeStep}>-</button>
            <input type="number" name="stepsQuantity" id="stepsQuantity" value={steps.length} readOnly />
            <button type="button" className="button" onClick={addStep}>+</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Timeline;
