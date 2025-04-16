import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactUs from "../components/ContactUs";
import Solutions from "../components/Solutions";
import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import Workflow from "../components/Workflow";
import Services from "../components/Services/Services";

// Import images
import platform_bg from "/platform-page-bg.jpg";
import about from "/sam-sol-1.webp";

const PlatformOverview: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ClouSec - Platform Overview";
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-[90px]">
        <div
          className="DevOpsMainHeader h-[250px] flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `url(${platform_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          role="banner"
          aria-label="Platform Overview Banner"
        >
          <h1 className="text-[60px] font-semibold tracking-wide drop-shadow-lg text-white/400">
            ClouSec Platform Overview
          </h1>
        </div>
      </div>
      
      <section className="flex flex-col md:flex-row bg-gray-100 p-[50px]">
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="font-semibold text-[40px] md:text-[48px] text-gray-900 leading-[66.8px] md:leading-[76.8px] w-full">
            About <span className="text-primary">ClouSec </span>Technologies Pvt
            Ltd
          </h2>
          <p className="font-poppins font-normal text-gray-900 text-[18px] leading-[30.8px] mt-5">
            At ClouSec, we help businesses{" "}
            <span className="font-bold">
              optimize cloud expenses, enforce best practices, and automate SOC
              operations{" "}
            </span>
            , making life easier for{" "}
            <span className="font-bold">
              CISOs, cloud security teams, and IT leaders
            </span>
            .
          </p>
          <p className="font-poppins font-normal text-gray-900 text-[18px] leading-[30.8px] mt-5">
            With ClouSec, you get a{" "}
            <span className="font-bold">
              360-degree view of your cloud environment
            </span>
            , ensuring{" "}
            <span className="font-bold">
              compliance, security, cost efficiency, and streamlined cloud
              operations
            </span>
            .
          </p>
          <Link
            to="/book-demo"
            className="w-[180px] text-center rounded-full hidden md:block px-4 py-2 bg-primary2 text-white hover:bg-primary-dark transition-all my-12"
            aria-label="Request a product demonstration"
          >
            Request Demo
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center md:ml-10 mt-10 md:mt-0">
          <img 
            src={about} 
            alt="ClouSec platform visualization" 
            className="w-full h-full"
            width={600}
            height={400}
          />
        </div>
      </section>
      
      <Workflow />
      <CardDeal />
      <Business />
      <Solutions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PlatformOverview;
