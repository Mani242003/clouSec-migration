import {} from "react";
import dashboard from "../../assets/dashboard.gif";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className=" pb-6 pt-14">
        <div className="container min-h-[600px] flex mt-0 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2  place-items-start mt-24">
            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="order-1 pb-8 sm:pb-0 sm:order-2 relative "
            >
              <img src="/hero-image-providers.webp" alt="Hero" />
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-30 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-[48px] font-semibold pr-2 text-black_"
                style={{ lineHeight: 1.2 }}
              >
                The 1st Cloud Security Tool with{" "}
                <span className="text-primary"> CSPM </span> &
                <span className="text-primary2"> CCOE </span> Features
              </h1>
              <p data-aos="fade-up" className="pr-2 text-black_ ">
                ClouSec is a PaaS-based, AI-driven Cloud Infrastructure
                Entitlement Management (CIEM) tool with Cloud Center of
                Excellence (CCoE) capabilities. It automates cloud security
                operations, ensures compliance with regulatory standards, and
                optimizes costs. With advanced AI, ClouSec enhances security,
                governance, and inventory management, helping businesses stay
                ahead in the dynamic cloud landscape.
              </p>
              <Link
                to="/platform-overview"
                className="w-[180px] text-center rounded-full hidden md:block px-4 py-2 bg-primary2 text-white hover:bg-primary-dark transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        {/* <ScrollToTop smooth top="20" width="" /> */}
      </div>
    </>
  );
};

export default Hero;
