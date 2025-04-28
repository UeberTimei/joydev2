import WelcomePage from "./pages/Welcome/Welcome";
import HeadingsPage from "./pages/HeadingsPage/HeadingsPage";
import TextPage from "./pages/TextPage/TextPage";
import ParagraphsPage from "./pages/ParagraphsPage/ParagraphsPage";
import ButtonsPage from "./pages/ButtonsPage/ButtonsPage";
import CardsPage from "./pages/CardsPage/CardsPage";
import BadgesPage from "./pages/BadgesPage/BadgesPage";
import ToastPage from "./pages/ToastPage/ToastPage";

export const routes = [
  { path: "/welcome", label: "Welcome", component: WelcomePage },
  { path: "/headingsPage", label: "HeadingsPage", component: HeadingsPage },
  { path: "/textPage", label: "TextPage", component: TextPage },
  { path: "/paragraphsPage", label: "ParagraphsPage", component: ParagraphsPage },
  { path: "/buttonsPage", label: "ButtonsPage", component: ButtonsPage },
  { path: "/cardsPage", label: "CardsPage", component: CardsPage },
  { path: "/badgesPage", label: "BadgesPage", component: BadgesPage },
  { path: "/toastPage", label: "ToastPage", component: ToastPage },
] as const;
