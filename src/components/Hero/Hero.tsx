import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../OptimizedImage";
import AspectRatioBox from "../AspectRatioBox";
import a from "/bg1.jpg";

import AnimatedText from "../ui/AnimatedText";

// Custom Hook to detect if an element is in view
const useInView = (offset = 100) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const handleScroll = () => {
      if (!element) return;
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - offset) {
        setIsInView(true);
      }
    };

    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { ref, isInView };
};

const Hero: React.FC = () => {
  const { ref: heroRef, isInView: heroVisible } = useInView(150);
  const { ref: textRef, isInView: textVisible } = useInView(100);

  return (
    <>
      <div className="px-0 md:px-10 pt-[60px]">
        <div
          className="bg-no-repeat bg-cover min-h-[100px] overflow-hidden"
          style={{ backgroundImage: `url(${a})` }}
        >
          <div
            ref={heroRef}
            className={`px-4 md:px-6 pr-0 min-h-[550px] md:min-h-[650px] flex transition-all duration-1000 ease-in-out ${heroVisible ? "animate-fade-in visible" : ""
              }`}
          >
            <div className="flex      w-full ">
              {/* Text Section */}
              <div
                ref={textRef}
                className={` flex flex-col w-[50%] space-y-4 md:space-y-5 mt-24 text-center md:text-left transition-all duration-1000 ease-in-out ${textVisible ? "animate-fade-in visible" : ""
                  }`}
              >
                <AnimatedText
                  className=" w-[350px] spacing  text-white_ font-bolder mb-3 border-b border-dashed"
                  data="Welcome	to	ClouSec	Technologies	Pvt	Ltd "
                />


                <span className="  font-Grotesk text-[45px] sm:text-[55px] text-white_ font-bold leading-none">
                  The AI-Powered RegTech Platform for Effortless Cloud Compliance
                </span>&nbsp; &nbsp;




                <p className="text-white_">
                  ClouSec is an intelligent RegTech platform that unifies SIEM, CIEM, and CCoE to secure cloud infrastructures at any scale. It automates compliance, streamlines cloud security with AI, and cuts monthly cloud costs.
                </p>
                {/* <div className="py-6">
                  {positivePoints.map((point, index) => (
                    <p key={index} className="mb-2 flex items-center  text-[15px] font-bolder text-gray-900 ">
                      <BadgeCheck className=" mr-2 text-[#20A08F]" size={17} />
                      {point}
                    </p>
                  ))}
                </div> */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
                  <Link
                    to="/book-demo"
                    className="px-6 py-3 bg-primary2 hover:bg-white_ text-white hover:text-black rounded-full transition"
                  >
                    Request a Demo →
                  </Link>
                  <Link
                    to="/platform-overview"
                    className="px-6 py-3 border-2 border-white hover:bg-white hover:text-primary2 text-white rounded-full transition"
                  >
                    Take a Product Tour →
                  </Link>
                </div>
                {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold text-white leading-tight">
            The 1st Cloud Security Tool with{" "}
            <span className="text-primary">CSPM</span> &{" "}
            <span className="text-primary2">CCOE</span> Features
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black_ max-w-xl mx-auto md:mx-0">
            ClouSec is a PaaS-based, AI-driven Cloud Infrastructure Entitlement
            Management (CIEM) tool with Cloud Center of Excellence (CCoE)
            capabilities. It automates cloud security operations, ensures
            compliance with regulatory standards, and optimizes costs.
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
          </div> */}
              </div>

              {/* Image Section */}
              <div
                className='  absolute  flex flex-1 h-full w-[80%] right-[-350px] mt-11'
              >
                <div className="  w-full h-full">
                  {/* <img src="/dummy.webp" alt="" /> */}

                  <AspectRatioBox ratio="">
                    <OptimizedImage
                      src="/dummy.webp"
                      alt="ClouSec cloud security platform visualization"
                      priority={true}
                      // width={1000}
                      // height={550}
                      className="absolute"
                    />
                  </AspectRatioBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;


const positivePoints = [
  " Get tailored advice to solve your toughest challenges.",
  "Reduce time spent in the trial-and-error phase.",
  "Connect with rigorously vetted experts you can trust.",
  "Validate your ideas and execute with confidence.",

];


{/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
<Link
  to="/book-demo"
  className="px-6 py-3 bg-primary2 hover:bg-primary-dark text-white rounded-full transition"
>
  Request a Demo →
</Link>
<Link
  to="/platform-overview"
  className="px-6 py-3 border-2 border-white hover:bg-white hover:text-primary2 text-white rounded-full transition"
>
  Take a Product Tour →
</Link>
</div> */}
