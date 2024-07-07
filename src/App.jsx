import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import DevelopmentsSearchpage from './pages/DevelopmentsSearchpage/DevelopmentsSearchpage';
import ScrollToTop from './components/Global/ScrollToTop';
import OurAgentpage from './pages/OurAgentspage/OurAgentpage';
import SingleDevlopmentpage from './pages/SingleDevlopmentspage/SingleDevlopmentpage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import DevSearchMapPage from './components/DevelopmentsSearchPageComps/DevSearchMapPage';
import SingleUnitPage from './pages/SingleUnitPage/SingleUnitPage';
import SingleAgentPage from './pages/SingleAgentPage/SingleAgentPage';
import NewsPage from './pages/NewsPage/NewsPage';
import SingleNewsPage from './pages/SingleNewsPage/SingleNewsPage';

function App() {

  const location = useLocation();

  // Define an array of paths where Navbar and Footer should be hidden
  const pathsToHideNavbarAndFooter = ["/developmentssearchmap", "/singleunitpage", "/singleagentpage"];

  // Check if the current path is in the array
  const hideNavbarAndFooter = pathsToHideNavbarAndFooter.includes(location.pathname);

  useEffect(() => {
    AOS.init({
      offset: 160, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      // mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <ScrollToTop />
      {!hideNavbarAndFooter && <Navbar isNavbarFixed={false}/>}
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/developmentssearch" element={<DevelopmentsSearchpage />}></Route>
        <Route exact path="/developmentssearchmap" element={<DevSearchMapPage />}></Route>
        <Route exact path="/ouragents" element={<OurAgentpage />}></Route>
        <Route exact path="/singledevelopmenpage" element={<SingleDevlopmentpage />}></Route>
        <Route exact path="/singleunitpage" element={<SingleUnitPage />}></Route>
        <Route exact path="/singleagentpage" element={<SingleAgentPage />}></Route>
        <Route exact path="/newspage" element={<NewsPage />}></Route>
        <Route exact path="/singlenewspage/:title" element={<SingleNewsPage />}></Route>
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
