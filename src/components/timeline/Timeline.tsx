import { useState } from "react";
import "../../css/Timeline.css";

function Timeline() {
  const [count, setCount] = useState(0);

  return (
    <div className="timeline">
      <div className="timeline__step timeline__step_complete">
        <div className="timeline__label">Step 1</div>
        <span></span>
      </div>
      <div className="timeline__step timeline__step_inprogress">
        <div className="timeline__label">Step 2</div>
        <span></span>
      </div>
      <div className="timeline__step">
        <div className="timeline__label">Step 3</div>
        <span></span>
      </div>
    </div>
  );
}

export default Timeline;
