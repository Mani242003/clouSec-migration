import {} from "react";
import dashboard from "../../assets/dashboard.gif";
import ScrollToTop from "react-scroll-to-top";
const Hero = () => {
  return (
    <div className=" dark:bg-gray-950  dark:text-white duration-300 pb-6">
      <div className="container min-h-[620px] flex mt-0 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2  place-items-start mt-24">
          {/* Image section */}
          <div
            data-aos="zoom-in"
            className="order-1 pb-8 sm:pb-0 sm:order-2 relative "
          >
            <img
              src={dashboard}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[570px]  "
            />
            {/* <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Customer Satisfaction</p>
              <h1 className="font-bold">
                100% <span className="font-normal">Archived</span>
              </h1>
            </div> */}
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-30 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              The 1st Cloud Security Tool with{" "}
              <span className="text-primary"> CSPM </span> &
              <span className="text-primary"> CCOE </span> Features
            </h1>
            <p data-aos="fade-up" className="pr-2 " >
              <span className="font-semibold">
              ClouSec is an AI-driven Cloud Security Posture Management (CSPM)
              tool with Cloud Center of Excellence (CCOE) features, designed to
              offer:</span><br/> Security and Regulatory misconfigurations, Suppression logs
              for security audits, Comprehensive tree view, User mapping to
              different cloud accounts with periodic audits, Cloud health
              monitoring, Cost trend analysis with proven savings on billing
              expenditures, Cloud configuration issue resolution and inventory
              management, Cloud Trusted Advisor for resilience, cost
              optimization etc, Vulnerability and threat management, Remediation
              for the findings. All of these features are accessible within a
              centralized dashboard, making the lives of CIOs and CISOs easier
              and enabling faster decision-making.
            </p>
            <button
            
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <ScrollToTop smooth top="20" width="" />
    </div>
  );
};

export default Hero;
