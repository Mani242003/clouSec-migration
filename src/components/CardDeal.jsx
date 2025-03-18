import { Link } from "react-router-dom";
import card from "/sam-sol-2.webp";

const CardDeal = () => {
  return (
    <section className="flex flex-col bg-gray-900 p-[50px] md:flex-row py-16">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold text-[40px] md:text-[48px] text-white leading-[66.8px] md:leading-[76.8px] w-full">
          Integrations & Alerts
        </h2>
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Get real-time alerts via Slack, Teams, or Email for critical security
          incidents.
        </p>
        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          All these features are accessible through a centralized dashboard,
          enabling CIOs, CISOs, and security teams to make faster, more informed
          decisions.
        </p>

        <Link
          to="/book-demo"
          className="w-[180px] text-center rounded-lg hidden md:block px-4 py-2 bg-primary2 text-white hover:bg-primary-dark transition-all my-12"
        >
          Get Started
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 mt-10 md:mt-0">
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CardDeal;
