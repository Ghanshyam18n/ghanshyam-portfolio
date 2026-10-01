import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Navbar from "./pages/Navbar";
import Error from "./pages/Error";
import CursorFollower from "./hooks/useCursor.jsx";
import "./index.css";
import WorkButton from "./components/WorkButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SmoothScroll from "./components/Smooth.jsx";

const App = () => {
  return (
    <Router>
      <CursorFollower>
        <Navbar />
        <ScrollToTop />
        <SmoothScroll>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/workbutton' element={<WorkButton />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </SmoothScroll>
      </CursorFollower>
    </Router>
  );
};

export default App;
