import { useState } from "react";
import "../../css/Timeline.css";

function Timeline() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="timeline">
        <div className="timeline__step timeline__step_complete">
          <div className="timeline__label">Step 1</div>
          <span></span>
        </div>
        <div className="timeline__step timeline__step_complete">
          <div className="timeline__label">Step 2</div>
          <span></span>
        </div>
        <div className="timeline__step timeline__step_inprogress">
          <div className="timeline__label">Step 3</div>
          <span></span>
        </div>
        <div className="timeline__step">
          <div className="timeline__label">Step 4</div>
          <span></span>
        </div>
        <div className="timeline__step">
          <div className="timeline__label">Step 5</div>
          <span></span>
        </div>
      </div>

      <nav className="control-panel">
        <ul className="control-panel__view">
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view1" checked/>
            <label htmlFor="view1">View 1</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view2" />
            <label htmlFor="view2">View 2</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view3" />
            <label htmlFor="view3">View 3</label>
          </li>
          <li className="control-panel__switch">
            <input type="radio" name="view" id="view4" />
            <label htmlFor="view4">View 4</label>
          </li>
        </ul>

        <div className="control-panel__steps">
          <button type="button">-</button>
          <input type="number" name="stepsQuantity" id="" value={2} min={2} max={10} readOnly/>
          <button type="button">+</button>
        </div>
      </nav>
    </>
  );
}

export default Timeline;
