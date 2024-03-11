import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import OurTeam from "./Pages/OurTeam";
import Aboutus from "./Pages/AboutUs"; // Change the component import to match the file name
import  ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/aboutus" element={<Aboutus />} /> {/* Use the imported component name */}
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
