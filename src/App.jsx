import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Font1 from './pages/Font1';
import Navbar from './components/Global/Navbar';
import Footer from './components/Global/Footer';
import DevelopmentsSearchpage from './pages/DevelopmentsSearchpage/DevelopmentsSearchpage';
import ScrollToTop from './components/Global/ScrollToTop';
import OurAgentpage from './pages/OurAgentspage/OurAgentpage';
import SingleDevlopmentpage from './pages/SingleDevlopmentspage/SingleDevlopmentpage';

function App() {

  return (
    <div className='font-FuturaMedium'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/developmentssearch" element={<DevelopmentsSearchpage />}></Route>
          <Route exact path="/ouragents" element={<OurAgentpage />}></Route>
          <Route exact path="/singledevelopmenpage" element={<SingleDevlopmentpage />}></Route>
          <Route exact path="/font" element={<Font1 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
