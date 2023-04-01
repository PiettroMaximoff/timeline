import React from "react";
import ReactDOM from "react-dom/client";
import Timeline from "./components/timeline/Timeline";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="container">
        <Timeline />
      </div>
    </div>
  </React.StrictMode>
);
