import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Font1 from './pages/Font1';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import DevelopmentsSearchpage from './pages/DevelopmentsSearchpage/DevelopmentsSearchpage';
import ScrollToTop from './components/Global/ScrollToTop';
import OurAgentpage from './pages/OurAgentspage/OurAgentpage';
import SingleDevlopmentpage from './pages/SingleDevlopmentspage/SingleDevlopmentpage';
import BigMenu from './components/Global/BigMenu';

function App() {
  const location = useLocation();
  
  // Define an array of paths where Navbar and Footer should be hidden
  const pathsToHideNavbarAndFooter = ["/menu"];

  // Check if the current path is in the array
  const hideNavbarAndFooter = pathsToHideNavbarAndFooter.includes(location.pathname);

  return (
    <div>
      <ScrollToTop />
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/menu" element={<BigMenu />}></Route>
        <Route exact path="/developmentssearch" element={<DevelopmentsSearchpage />}></Route>
        <Route exact path="/ouragents" element={<OurAgentpage />}></Route>
        <Route exact path="/singledevelopmenpage" element={<SingleDevlopmentpage />}></Route>
        <Route exact path="/font" element={<Font1 />}></Route>
        {/* Add more routes as needed */}
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
