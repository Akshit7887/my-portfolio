import { BrowserRouter as Router }   from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
          <Navbar />
          <Home />
        </div>
      </Router>
    </HelmetProvider>
  );
}