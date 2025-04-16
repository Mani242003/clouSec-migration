import React from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import AspectRatioBox from "../AspectRatioBox";

const Hero: React.FC = () => {
  return (
    <>
      <div className="pb-6 pt-14">
        <div className="container px-4 md:px-6 min-h-[500px] md:min-h-[600px] flex mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center md:place-items-start mt-16 md:mt-24">
            {/* Text section */}
            <div className="space-y-4 md:space-y-5 order-2 md:order-1 text-center md:text-left">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-black_ leading-tight"
              >
                The 1st Cloud Security Tool with{" "}
                <span className="text-primary"> CSPM </span> &
                <span className="text-primary2"> CCOE </span> Features
              </h1>
              <p 
                data-aos="fade-up" 
                data-aos-delay="100"
                className="text-sm md:text-base lg:text-lg text-black_ max-w-xl mx-auto md:mx-0"
              >
                ClouSec is a PaaS-based, AI-driven Cloud Infrastructure
                Entitlement Management (CIEM) tool with Cloud Center of
                Excellence (CCoE) capabilities. It automates cloud security
                operations, ensures compliance with regulatory standards, and
                optimizes costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
                <Link
                  to="/platform-overview"
                  className="w-full sm:w-auto text-center rounded-full px-6 py-3 bg-primary2 text-white hover:bg-primary-dark transition-all"
                  aria-label="Learn more about our platform"
                >
                  Read More
                </Link>
                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto text-center rounded-full px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  aria-label="Request a product demonstration"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Image section - Using OptimizedImage with AspectRatioBox */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="order-1 md:order-2 relative w-full max-w-md mx-auto"
            >
              <AspectRatioBox ratio="16:9">
                <OptimizedImage 
                  src="/hero-image-providers.webp" 
                  alt="ClouSec cloud security platform visualization" 
                  priority={true}
                  width={800}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </AspectRatioBox>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
