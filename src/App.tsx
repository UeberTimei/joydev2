import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="app">
      <Menu className="app__menu" />
      <main className="app__content">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/headingsPage" element={<HeadingsPage />} />
          <Route path="/textPage" element={<TextPage />} />
          <Route path="/paragraphsPage" element={<ParagraphsPage />} />
          <Route path="/buttonsPage" element={<ButtonsPage />} />
          <Route path="/cardsPage" element={<CardsPage />} />
          <Route path="/badgesPage" element={<BadgesPage />} />
          <Route path="/toastPage" element={<ToastPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
