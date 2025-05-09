import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  </StrictMode>
);
