import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LandingPage from "./components/landing/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";
import Publicaciones from "./components/publicaciones/Publicaciones";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout_ex from "./components/layouts/Layout_ex";
import Login from "./components/login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/login" element={<Login />} />
          <Route path="/layout" element={<Layout_ex />} />
          {/* Agregar rutas necesarias */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
