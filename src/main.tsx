import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { PostsProvider } from "./context/PostsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PostsProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <App />
      </Router>
    </PostsProvider>
  </StrictMode>
);
