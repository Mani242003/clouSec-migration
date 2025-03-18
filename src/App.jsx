import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import ContactUs from "./components/ContactUs.jsx"; // Import the ContactUs component
import PlatformOverview from "./Pages/PlatformOverview.jsx";
import C_S_Details from "./Pages/C_S_Details.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

 

  return (
    <BrowserRouter>
    <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-demo" element={<ContactUs />} /> {/* Ensure the component is imported */}
        <Route path="/platform-overview" element={< PlatformOverview/>} /> {/* Ensure the component is imported */}
        <Route path="/blogs/:slug" element={<C_S_Details />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
