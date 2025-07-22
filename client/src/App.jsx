import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import PersonalDataFormPage from "./pages/PersonalDataFormPage";

function App() {
  function MainLayout() {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Toaster to="top-center" />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/form" element={<PersonalDataFormPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
