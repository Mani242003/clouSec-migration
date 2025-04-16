import React, { useEffect, useState, lazy, Suspense } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import Solutions from "../components/Solutions";
import C_S_Component from "../components/C_S_Component";
import Price from "../components/Price/Price";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

// Background image
import a from "/hero-bg.jpg";

// Lazy load less critical components
const Popup = lazy(() => import("../components/Popup/Popup"));
const BrandsLogo = lazy(() => import("../components/BrandsLogo/BrandsLogo"));
const BlogsComp = lazy(() => import("../components/Blogs/BlogsComp"));
const ReadMoreLess = lazy(() => import("../components/ReadMoreLess/ReadMoreLess"));

const Home: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);
  
  useEffect(() => {
    // Set a timer to show the popup after 2 seconds
    const timer = setTimeout(() => {
      setPopupVisible(true);
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closePopup = (): void => {
    setPopupVisible(false);
  };

  return (
    <>
      {/* Lazy load popup component */}
      {isPopupVisible && (
        <Suspense fallback={null}>
          <Popup show={isPopupVisible} onClose={closePopup} />
        </Suspense>
      )}
      
      <div
        className="w-full overflow-x-hidden bg-center"
        style={{ 
          backgroundImage: `url(${a})`, 
          backgroundSize: "contain",
          minHeight: "100px" // Prevent layout shift while background loads
        }}
      >
        <Navbar />
        <Hero />
      </div>
      
      {/* Main content sections */}
      <Services />
      <Solutions />
      <C_S_Component />
      
      {/* Pricing section */}
      <Price />
      
      {/* Contact section */}
      <ContactUs />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
