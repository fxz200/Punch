import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "./components/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";
import CalendarPage from "./pages/CalendarPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index" element={<InboxPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
