import {} from "react";
import dashboard from "../../assets/dashboard.gif";
import ScrollToTop from "react-scroll-to-top";
const Hero = () => {
  return (
    <div className=" dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-0 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2  place-items-start mt-24">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 pb-8 sm:pb-0 sm:order-2 relative ">
            <img
              src={dashboard}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[570px]  "
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Customer Satisfaction</p>
              <h1 className="font-bold">
                100% <span className="font-normal">Archived</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Building Brands in the{" "}
              <span className="text-primary">Digital Agency</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              At ClouSec Technologies Pvt Ltd, we significantly reduce your
              cloud expenses, ensuring that your organization's cloud best
              practices are firmly in place. ClouSec simplifies cloud security
              operations, offering a 360-degree view of your cloud environment.
              This comprehensive approach ensures compliance and security,
              reduces costs and effort, and enhances overall cloud management.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
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
