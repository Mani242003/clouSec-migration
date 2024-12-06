import Access from "../../assets/accesscontrol.svg";
import Inventory from "../../assets/inventory.svg";
import Compliance from "../../assets/compliance.svg";
import Effective from "../../assets/insights.svg";
import Slider from "react-slick";
import { MdSecurity } from "react-icons/md";
import { GrVulnerability } from "react-icons/gr";
import { MdSavings } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePermIdentity } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { LuWorkflow } from "react-icons/lu";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoIosCloud } from "react-icons/io";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineAccountTree } from "react-icons/md";

import { MdBugReport } from "react-icons/md";

const skillsData = [
  {
    name: "Security Misconfiguration findings",
    icon: <MdSecurity className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec helps organizations to adopt best practices for security, reliability. Ensure to be compliant towards the regulations. The misconfigurations are identified using Security hub. The regulation support includes GDPR, HIPAA, FedRAMP, PCI DSS, ISO/IEC 27001, NIST and SOX",
    aosDelay: "0",
  },
  {
    name: "Vulnerability & Threat findings",
    icon: <GrVulnerability className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec ensures cloud security by continuously monitoring accounts and workloads for vulnerabilities and threats. It scans EC2, containers, and Lambda functions for third-party package issues and tracks unusual spikes in network traffic and API calls from suspicious locations and malicious IPs.",
    aosDelay: "300",
  },
  {
    name: "Optimization and Cost Savings",
    icon: < MdSavings className="text-[50px]" />,
    link: "#",
    description:
      "Trusted Advisor provides recommendations to optimize your cloud infrastructure for cost-effectiveness. Security and Compliance: Trusted Advisor offers best practices and alerts to enhance security and ensure compliant.",
    aosDelay: "500",
  },
  {
    name: "Periodic Security notifications ",
    icon: <IoIosNotifications className="text-[50px]"/>,
    link: "#",
    description:
      "ClouSec keeps the stake holders with periodic update  of their cloud security reports and security score of the organizations. Email, Teams, Slack integrations(as in MVP stage).",
    aosDelay: "700",
  }, 
  {
    name: "User Identity",
    icon: <MdOutlinePermIdentity className="text-[50px]" />,
    link: "#",
    description:
      "User identity provide 360 degree insights of an user mapped to different cloud accounts with a centralised Tree & Matrix View. Admin can periodically review the user mapping and take actions like retain & remove. ",
    aosDelay: "700",
  },
  {
    name: "Cloud Resource Management ",
    icon: <GrResources className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec continuously monitor the cloud inventories (resources) and provide centralised view of cloud resources mapped to different accounts. Alert on enabling new services - Pattern analysis. ClouSec provides detailed insights of compliant cloud resource. ",
    aosDelay: "700",
  },
  {
    name: "Suppress Workflow",
    icon: <LuWorkflow className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec maintains a detailed log of suppressed misconfigurations, including reasons and suppression duration. This log is essential for auditing activities. It ensures transparency and helps verify compliance with policies.",
    aosDelay: "700",
  },

  {
    name: "Performance and Fault Tolerance",
    icon: <GrDocumentPerformance className="text-[50px]" />,
    link: "#",
    description:
      "Trusted Advisor provides insights to enhance the performance and reliability of your cloud resources through suggestions for improvement and optimization. It ensures continuous review of your architecture. This helps maintain and optimize the efficiency of your cloud infrastructure.",
    aosDelay: "700",
  },
  {
    name: "Cloud Health",
    icon: <IoIosCloud className="text-[50px]" />,
    link: "#",
    description:
      "ClouSec Health provides personalized alerts and notifications about events from your cloud service provider that could impact your resources and applications. With real-time monitoring, it helps you stay informed and take immediate action to minimize downtime.",
    aosDelay: "700",
  },
  {
    name: "Cost Trends & Cost Saving ",
    icon: <FaArrowTrendUp className="text-[50px]"  />,
    link: "#",
    description:
      "ClouSec Cost Report provides tools to monitor and manage cloud spending effectively. It helps with rightsizing resources, identifying idle or underutilized instances, and offers detailed visibility into spending across services, regions, and instances. This helps control costs and optimize resource usage.",
    aosDelay: "700",
  },
  {
    name: "OPS Center",
    icon:<GrVulnerability className="text-[50px]" />,
    link: "#",
    description:
      "With ClouSec Debug, you can ensure your cloud configurations adhere to best practices and compliance standards. It offers recommendations that reduce the need for cloud experts and their hourly consulting fees. This makes maintaining compliance more cost-effective and efficient.",
    aosDelay: "700",
  },
  {
    name: "Tree View",
    icon: <MdOutlineAccountTree   className="text-[50px]" /> ,
    link: "#",
    description:
      "ClouSec provides a comprehensive view of root and associated accounts, including health information, cost consumption, and misconfiguration details. This overview helps in managing and monitoring account performance and security. It ensures you have all necessary insights for effective oversight.",
    aosDelay: "700",
  },
  {
    name: "Reporting",
    icon: <MdBugReport className="text-[50px]" /> ,
    link: "#",
    description:
      "ClouSec offers export features to Excel and CSV for all pages, making it easier for CISOs to manage data. This functionality streamlines the process of sharing information with stakeholders. It ensures that data distribution is both easy and efficient.",
    aosDelay: "700",
  },
  

];
const Services = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <span id="features"></span>
      <div className="bg-white-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              ClouSec helps Customers with
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Security, Governance & Compliance and CCOE features
            </p>
          </div>

          {/* services cards */}
          <div className=" w-full gap-4">
            <Slider {...settings}>
              {skillsData.map((skill) => (
                <div
                  key={skill.name}
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  className="card space-y-3 sm:space-y-4 p-4 "
                >
                  <div className="   w-[70px] h-[70px] flex items-center justify-center p-1 bg-primary rounded-full text-white border border-gray-300">
                    {skill.icon }
                  </div>
                  <h1 className="text-lg font-semibold">{skill.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
