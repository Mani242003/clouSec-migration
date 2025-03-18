import { useEffect, useState } from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import BrandsLogo from "../components/BrandsLogo/BrandsLogo";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Popup from "../components/Popup/Popup";
import Price from "../components/Price/Price";
import ReadMoreLess from "../components/ReadMoreLess/ReadMoreLess";
import Services from "../components/Services/Services";
import ContactUs from "../components/ContactUs";

import a from "/hero-bg.jpg"
import Solutions from "../components/Solutions";
import C_S_Component from "../components/C_S_Component";



const Home = () => {

  const [isPopupVisible, setPopupVisible] = useState(false);
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

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>

       {/* <Popup  show={isPopupVisible} onClose={closePopup} /> */}
       <div
  className="w-full overflow-x-hidden bg-center "
  style={{ background: `url(${a})`, backgroundSize: "contain" }}
>
      <Navbar />

      <Hero />
      </div>
      {/* <BrandsLogo /> */}
      <Services />
      <Solutions />
      <C_S_Component/>
      
      {/* <Testimonial /> */}
      {/* <ReadMoreLess /> */}
      {/* <BlogsComp /> */}
      <Price />
      <ContactUs />
      <Footer />
      
    
    </>
  );
};

export default Home;
