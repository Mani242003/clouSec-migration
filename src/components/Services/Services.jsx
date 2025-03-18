// import Access from "../../assets/accesscontrol.svg";
// import Inventory from "../../assets/inventory.svg";
// import Compliance from "../../assets/compliance.svg";
// import Effective from "../../assets/insights.svg";
// import Slider from "react-slick";
import { MdSecurity } from "react-icons/md";
import { GrVulnerability } from "react-icons/gr";
import { MdSavings } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
// import { MdOutlinePermIdentity } from "react-icons/md";
// import { GrResources } from "react-icons/gr";
// import { LuWorkflow } from "react-icons/lu";
// import { GrDocumentPerformance } from "react-icons/gr";
// import { IoIosCloud } from "react-icons/io";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { MdOutlineAccountTree } from "react-icons/md";

// import { MdBugReport } from "react-icons/md";

const skillsData = [
  {
    name: "Security Findings",
    icon: <MdSecurity className="text-[50px]" />,
    link: "#",
    description: "ClouSec identifies misconfigurations that violate regulatory standards, helping organizations maintain a secure cloud. By continuously scanning configurations, it detects risks early and ensures compliance with security frameworks.",
    aosDelay: "0",
  },
  {
    name: "Vulnerability Detection",
    icon: <GrVulnerability className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec identifies vulnerabilities in operating systems, containers, and applications using data from the National Vulnerability Database (NVD). By detecting weaknesses early, it enables faster remediation, reducing the risk of exploitation.",
    aosDelay: "300",
  },
  {
    name: "Threat Monitoring",
    icon: <MdSavings className="text-[50px]" />,
    link: "#",
    description: "ClouSec tracks malicious IP requests and unusual network activity in real time. By analyzing traffic patterns, it helps detect potential cyber threats, ensuring quick response to suspicious activity and reducing security risks.",
    aosDelay: "500",
  },
  {
    name: "Day 1 Compliance ",
    icon: <IoIosNotifications className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec ensures compliance with CIS, SOC, and MAS standards from day one. With automated scans and real-time monitoring, it continuously assesses cloud resources, helping organizations maintain regulatory compliance effortlessly.",
    aosDelay: "700",
  },

];
const Services = () => {
  // var settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 3,
  //   // slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   pauseOnHover: true,
  //   pauseOnFocus: true,
  //   responsive: [
  //     {
  //       breakpoint: 10000,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <span id="features"></span>
      <div className="bg-white-100  py-12 sm:grid sm:place-items-center overflow-hidden">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <span
              data-aos="fade-up"
              className="text-[35px] font-bold sm:text-[55px] text-primary "
            >
              The Power of ClouSec
            </span>
            <h1 className="text-[30px] font-bold  w-full ">
              Optimize Cyber Risk Management with our multi-feature PaaS
              platform
            </h1>
            <p
              data-aos="fade-up"
              className="pr-2 text-black_ w-full sm:w-2/4 mx-auto text-[19px]"
            >
              ClouSec allows you to efficiently manage Security Findings, Vulnerability Detection, Threat Monitoring, and Day 1 Compliance with speed and accuracy.
            </p>
          </div>

          {/* services cards */}
          <div className=" w-full flex pt-6 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                // data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="flex  w-2/4  hover:shadow-lg  items-center  flex-col card space-y-3 sm:space-y-4 p-4 border border-primary2 rounded-lg"
              >
                <div className="   w-[100px] h-[100px] flex items-center justify-center p-1 bg-white  rounded-full text-primary2 border border-primary2 rounded-bg mt-[-70px]">
                  {skill.icon}
                </div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-center py-4">
                  {skill.description}
                </p>
                {/* button */}
                <Link to="/platform-overview" className=" text-primary mt-4">Read More</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
