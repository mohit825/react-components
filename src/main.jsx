import { scan } from "react-scan";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

scan({
  enabled: true,
});
createRoot(document.getElementById("rot")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
