import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import AddressFormPage from "./pages/AddressFormPage";
import CitizenFormPage from "./pages/CitizenFormPage";
import DashboardPage from "./pages/DashboardPage";
import MyProfilePage from "./pages/MyProfilePage";
import PaymentPage from "./pages/PaymentPage";
import CreateReportPage from "./pages/CreateReportPage";
import EditReportPage from "./pages/EditReportPage";
import ReportAudioUploadPage from "./pages/ReportAudioPage";
import ConfirmAudioReportPage from "./pages/ConfirmAudioReportPage";
import AuthLayout from "./Layout/AuthLayout";
import ProtectedLayout from "./Layout/ProtectedLayout";

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
        <Toaster position="top-right" />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>

          <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          </Route>

          <Route element={<ProtectedLayout />}>
            <Route path="/addresses-form" element={<AddressFormPage />} />
            <Route path="/citizens-form" element={<CitizenFormPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/reports-form" element={<CreateReportPage />} />
            <Route path="/reports-audio" element={<ReportAudioUploadPage />} />
            <Route
              path="/reports/confirm-audio"
              element={<ConfirmAudioReportPage />}
            />
            <Route path="/reports/:id/edit" element={<EditReportPage />} />
            <Route path="/my-profile" element={<MyProfilePage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
