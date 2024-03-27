import React from "react";
import ReactDOM from "react-dom/client";
import { Timer } from "./Timer.tsx";
import "./styles/index.css";
import "./styles/ClockFace.css";
import "./styles/Button.css";
import "./styles/useRenderCount.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>
);
