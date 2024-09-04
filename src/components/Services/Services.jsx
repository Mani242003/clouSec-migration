import Access from "../../assets/accesscontrol.svg";
import Inventory from "../../assets/inventory.svg";
import Compliance from "../../assets/compliance.svg";
import Effective from "../../assets/insights.svg"

const skillsData = [
  {
    name: "User Access Matrix & Audit ",
    icon: Access,
    link: "#",
    description:"ClouSec uniquely provides a comprehensive user access matrix, enabling detailed mapping of users to different cloud accounts with periodic audits. This feature ensures efficient user management and enhances security by maintaining up-to-date access controls across your cloud environment by retaining and removing user’s as needed.",
    aosDelay: "0",
  },
  {
    name: "Tree View ",
    icon: Inventory,
    link: "#",
    description:
      "ClouSec offers a unique tree view of multiple AWS accounts, providing detailed security insights that set it apart from AWS and competitors. This feature allows leadership teams to monitor security posture, service outages, cost consumption, and conduct well-architected reviews across all accounts, ensuring strong cloud governance and management.",
    aosDelay: "300",
  },
  {
    name: "Saving Cost ",
    icon: Compliance,
    link: "#",
    description:"ClouSec goes beyond tracking usage and cost like AWS and other products. It intelligently monitors unused resources, shutting them down during idle times to save costs. Additionally, ClouSec provides cost trend analysis for comparison and alerts you if new AWS services are enabled, based on usage pattern analysis.",
    aosDelay: "500",
  },
  {
    name: "AI based Remediation  ",
    icon: Effective,
    link: "#",
    description:
      "ClouSec leads in innovation with its Generative AI-based remediation, automatically diagnosing and resolving issues like permission errors during migrations. This reduces manual intervention and troubleshooting time, setting ClouSec apart from competitors who rely on static guidance or manual processes.",
    aosDelay: "700",
  },

];
const Services = () => {
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
              Best Features Grow Your Business Value
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              Globally actualize cost effective with resource maximizing leadership skills.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div className="w-full h-14"><img className="w-14" src={skill.icon} alt="" /></div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
