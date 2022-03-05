import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// import DefaultLayout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/" element={<Navigate replace to="/landing-page" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
