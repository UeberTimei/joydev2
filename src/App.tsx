import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import "./App.scss";
import { routes } from "./routes";

function App() {
  return (
    <div className="app">
      <Menu className="app__menu" />
      <main className="app__content">
        <Routes>
          <Route path="*" element={<Navigate to="/welcome" />} />
          {routes.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
