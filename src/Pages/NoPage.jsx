import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="pt-20 flex items-center justify-center h-[300px] flex-col bg-[rgba(0,0,0,0.1)]">
      No Page <Link 
       className =
       "mt-8 bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
      to="/">Go to Home Page</Link>{" "}
    </div>
  );
  // https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4
  // https://royeraadames.medium.com/open-react-router-link-at-top-of-page-c8e48a72da99
};

export default NoPage;
