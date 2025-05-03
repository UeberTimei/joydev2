import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { routes } from "./routes";

function App() {
  return (
    <div className="app">
      <main className="app__content">
        <Routes>
          <Route path="*" element={<Navigate to="/general" />} />
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
