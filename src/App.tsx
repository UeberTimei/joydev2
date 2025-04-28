import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import HeadingsPage from "./pages/HeadingsPage/HeadingsPage";
import TextPage from "./pages/TextPage/TextPage";
import ParagraphsPage from "./pages/ParagraphsPage/ParagraphsPage";
import ButtonsPage from "./pages/ButtonsPage/ButtonsPage";
import CardsPage from "./pages/CardsPage/CardsPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import ToastPage from "./pages/ToastPage/ToastPage";
import "./App.scss";
import WelcomePage from "./pages/Welcome/Welcome";
import { routes } from "./routes";

const pageComponents = {
  "/welcome": WelcomePage,
  "/headingsPage": HeadingsPage,
  "/textPage": TextPage,
  "/paragraphsPage": ParagraphsPage,
  "/buttonsPage": ButtonsPage,
  "/cardsPage": CardsPage,
  "/badgesPage": BadgesPage,
  "/toastPage": ToastPage,
} as const;

function App() {
  return (
    <div className="app">
      <Menu className="app__menu" />
      <main className="app__content">
        <Routes>
          <Route path="*" element={<Navigate to="/welcome" />} />
          {routes.map(({ path }) => {
            const Component = pageComponents[path];
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
