import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from './components/BlogDetails';
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import AppStates from './components/stateprovider';

function App() {
  return (
      <AppStates>
          <ToastContainer />
          <BrowserRouter>
          <Routes>
            <Route path="/login" element={ <Login /> } />
            <Route path="/sign-up" element={ <Signup /> } />
            <Route path="/reset-password" element={ <ResetPassword /> } />
            <Route path="about" element={ <About /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/blog" element={ <Blog /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
            <Route path="/landing-page" element={ <LandingPage /> } />
            <Route path="/" element={ <LandingPage /> } />
            <Route path="*" element={ <NotFound /> } />      
          </Routes>
        </BrowserRouter>
      </AppStates>
  );
}

export default App;
