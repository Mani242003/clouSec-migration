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
import ContactUs from "./ContactUs";

import a from "../assets/backgroundOrg.png"
// style={{ background: `url(${a})`



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

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>

       <Popup  show={isPopupVisible} onClose={closePopup} />
    <div className=" w-full dark:bg-black dark:text-white text-black overflow-x-hidden  bg-cover bg-center bg-no-repeat " style={{ background: `url(${a})` }}>
      <Navbar />

      <Hero />
      </div>
      <div className="bg-white dark:bg-black dark:text-white  text-black overflow-x-hidden">
      <BrandsLogo />
      <Services />
      
      {/* <Testimonial /> */}
      <ReadMoreLess />
      <BlogsComp />
      <Price />
      <ContactUs />
      <Footer />
      
    </div>
    
    </>
  );
};

export default Home;
