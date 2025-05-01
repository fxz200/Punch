import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
