import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../datadogRUM-init.js";

createRoot(document.getElementById("rot")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
