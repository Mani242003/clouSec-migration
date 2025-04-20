import React from "react";
import { Link } from "react-router-dom";
// import Link from "next/link";

type DemoButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

const DemoButton: React.FC<DemoButtonProps> = ({ href, label = "Get a Demo →", className = "" }) => {
  return (
    <Link
      to={href}
      className={`w-[180px] px-6 py-3 mt-32 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:from-white hover:to-white hover:text-indigo-600 border-2 border-transparent hover:border-indigo-600 ${className}`}
    >
      {label}
    </Link>
  );
};

export default DemoButton;
