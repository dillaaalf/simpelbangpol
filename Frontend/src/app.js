// import Login from "./pages/login";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Faq from "./pages/faq";
import Penelitian from "./pages/penelitian";
import Magang from "./pages/magang";
import Wawancara from "./pages/wawancara";
import Footer from "./components/footer";
import ScrollToTop from "./components/totop";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="faq" element={<Faq />} />
        <Route path="penelitian" element={<Penelitian/>} />
        <Route path="magang" element={<Magang />} />
        <Route path="wawancara" element={<Wawancara />}/>
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>  
  );
}

export default App;