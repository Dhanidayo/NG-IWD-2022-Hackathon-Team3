import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/sign-up" element={ <Signup /> } />
          <Route path="/reset-password" element={ <ResetPassword /> } />
          <Route path="about" element={ <About /> } />
          <Route path="/blog" element={ <Blog /> } />
          <Route path="/landing-page" element={ <LandingPage /> } />
          <Route path="/" element={ <LandingPage /> } />
          <Route path="*" element={ <NotFound /> } />      
        </Routes>
      </BrowserRouter>
    // </DefaultLayout>
  );
}

export default App;
