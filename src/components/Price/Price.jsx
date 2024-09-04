import { useState } from "react";
import "./Price.scss";
import PriceCard from "./PriceCard/PriceCard";
import Switch from "react-switch";

const Price = () => {
  const [toggle, setToggle] = useState(true);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const Basicfeature = [
    { id: 1, name: "Cost Trends & Saving" },
    { id: 2, name: "Cloud Configuration issues with remediation" },
    { id: 3, name: "User Access Matrix" },
    { id: 4, name: "Comprehensive Tree view" },
    { id: 5, name: "VAPT Testing " },
    {
      id: 6,
      name: "Short & easy videos for non-technical guys regarding the common cloud setups and deployments.",
    },

    { id: 7, name: "User Monitoring" },
  ];
  const Advancefeature = [
    { id: 1, name: "Security Misconfigurations: PCI-DSS, HIPAA, ISO 27001-20" },
    { id: 2, name: "Vulnerabilities" },
    { id: 3, name: "Threats" },
    { id: 4, name: "Inventory Management" },
    {
      id: 5,
      name: "User Access Matrix: Integration with Identity Center for user access review",
    },
    {
      id: 6,
      name: "Well-Architected Review: Cost optimization opportunities and service quota monitoring using Trusted Advisor data",
    },
    {
      id: 7,
      name: "AWS Health Integration: Monitor service-level incidents and deprecation notices ",
    },
    { id: 8, name: "Suppress Ticketing Workflow" },
    { id: 9, name: "Cost Management" },
    { id: 10, name: "Ops Center: EC2 operations and cloud diagnostics" },
    { id: 11, name: "Comprehensive Tree View" },
    { id: 12, name: "Alerts & Reporting" },
  ];

  // console.log(annually);

  return (
    <>
      <span id="price"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}

          {/* services cards */}
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            <div className=" pb-4 sm:pb-1 h-auto sm:min-h-[40rem]  flex flex-col ">
              <div className=" pb:0 sm:pb-10 ">
                <h1 className=" my-8 sm:my-0 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
                  PRICING
                </h1>
              </div>

              <div>
                <h1 className="  border-primary/50 py-2 w-4/4 text-2xl font-semibold">
                  Find a plan to suit your needs
                </h1>
                <span>
                  {/* Understanding the intricacies of pricing in a dynamic market is pivotal, and our approach to comparing pricing is both comprehensive and transparent. We employ advanced algorithms and thorough market analysis to ensure that the evaluation of your pricing is meticulous and up-to-date. Our comparison process goes beyond surface-level assessments, delving into the nuances of your pricing strategy, competitors' offerings, and industry benchmarks. */}
                </span>
                <div className="">
                  <h1 className=" mt-4  py-2 w-4/4 text-1xl font-semibold">
                    Monthly
                  </h1>
                  <Switch
                    onChange={toggler}
                    checked={toggle}
                    onColor="#5147AC"
                  />

                  <h1 className="   py-2 w-4/4 text-1xl font-semibold">
                    Annually
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <PriceCard
                id={true}
                amout={toggle ? "1,800" : "150"}
                plan="Essential"
                prediod={toggle ? "Year" : "Month"}
                subPlan="For Startup’s, Small and Medium Companies"
                features={Basicfeature}
              />
            </div>
            <div>
              <PriceCard
                id={false}
                amout={toggle ? "9,600" : "800"}
                plan="Standard"
                prediod={toggle ? "Year" : "Month"}
                subPlan="For Enterprises "
                features={Advancefeature}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
