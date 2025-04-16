import { useEffect, useState, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

// Regular import for components that are needed immediately
import LoadingSpinner from "./components/LoadingSpinner.jsx";

// Lazy load page components to improve initial load time
const Home = lazy(() => import("./Pages/Home.jsx"));
const ContactUs = lazy(() => import("./components/ContactUs.jsx"));
const PlatformOverview = lazy(() => import("./Pages/PlatformOverview.jsx"));
const C_S_Details = lazy(() => import("./Pages/C_S_Details.jsx"));

const App = () => {
  useEffect(() => {
    // Initialize AOS with a slight delay to improve initial page load
    const initAOS = () => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in",
        delay: 100,
      });
      AOS.refresh();
    };
    
    // Use requestIdleCallback to initialize AOS when browser is idle
    if (window.requestIdleCallback) {
      window.requestIdleCallback(initAOS);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(initAOS, 200);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollProgressBar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-demo" element={<ContactUs />} />
          <Route path="/platform-overview" element={<PlatformOverview />} />
          <Route path="/blogs/:slug" element={<C_S_Details />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
