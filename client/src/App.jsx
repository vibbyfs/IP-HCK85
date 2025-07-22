import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/DashboardPage";
import AddressFormPage from "./pages/AddressFormPage";
import CitizenFormPage from "./pages/CitizenFormPage";
import DashboardPage from "./pages/DashboardPage";
import MyProfilePage from "./pages/MyProfilePage";
import AnnouncementsPage from "./pages/AnnouncementPage";
import PaymentPage from "./pages/PaymentPage";
import CreateReportPage from "./pages/CreateReportPage";

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
          <Route path="/addresses/form" element={<AddressFormPage />} />
          <Route path="/citizens/form" element={<CitizenFormPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/form-reports" element={<CreateReportPage />} />
          <Route path="/my-profile" element={<MyProfilePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
