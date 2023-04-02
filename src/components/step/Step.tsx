import { useState } from "react";

function Step({step} : {step: any}) {

  const changeStatus = evt => {
    const self = evt.currentTarget;
    if (evt.target.tagName === "SPAN") {             
        if (!self.classList.contains('timeline__step_inprogress') && !self.classList.contains('timeline__step_complete')) {
            self.classList.add('timeline__step_inprogress');
        } else if (self.classList.contains('timeline__step_inprogress')) {
            self.classList.remove('timeline__step_inprogress');
            self.classList.add('timeline__step_complete');
        } else {
            self.classList.remove('timeline__step_complete');
        }
    }
  }

  return (
    <div key={step.id} className={step.classes} onClick={changeStatus}>
        <div id={step.id} className="timeline__label">Step {step.stepNumber}</div>
        <span></span>
    </div>
  );
}

export default Step;
