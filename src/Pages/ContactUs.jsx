import ContactForm from "../components/ContactForm";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import a from "../assets/backgroundOrg.png";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
const ContactUs = () => {
  return (
    <>
      <span id="contact-us"></span>

      <div
        className="w-full   bg-cover bg-center bg-no-repeat dark:bg-none "
        style={{ background: `url(${a})` }}
      >
        <div className=" w-full pt-[65px] sm:pt-[85px]   ">
          <section className="container  pb-8 ">
            <div className="flex  flex-col sm:flex-row">
              <div className="flex-1 pb-4 sm:pb-0 " data-aos="fade-up">
                <h1 className="  border-l-8 border-primary/50  pl-2 text-4xl text-black dark:text-white font-bold py-0 my-8 ">
                  Have Questions? We've Got Answers
                </h1>

                <div className="flex items-center text-center mt-2">
                  <IoLocation className="text-primary text-2xl mr-2 " />
                  <h1 className="text-1xl sm:text-2xl font-bold pt-0 ">
                    Address
                  </h1>
                </div>
                <p className="text-sm text-white-600 tracking-wide leading-6 ml-8">
                  ClouSec Technologies Private Ltd<br/>No 1, 2nd floor, Meenambal
                  Salai, Vivekandhar Nagar, Chennai-600118, India
                </p>
                <p className="text-sm text-white-600 tracking-wide leading-6 ml-8 mt-4">
                  11700 Lebanon Road, Apt 1527 Frisco,<br/>TX 75035-75025
                </p>

                <div className="flex items-center text-center mt-5">
                  <FaPhoneVolume className="text-primary text-2xl mr-2 " />
                  <h1 className="text-1xl sm:text-2xl font-bold pt-0 ">
                    Phone 24/7
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row ml-8 my-4 gap-0 sm:gap-6 ">
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6 "
                  >
                    +91 9790845787
                  </a>
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  "
                  >
                    +91 9345336553
                  </a>{" "}
                
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white"
                  >
                    +91 9840068989
                  </a>
                </div>

              
                <div className="flex items-center text-center mt-2">
                  <TbWorld className="text-primary text-2xl mr-2 " />
                  <h1 className="text-1xl sm:text-2xl font-bold pt-0 ">
                    {" "}
                    Website
                  </h1>
                </div>

                <div className="flex flex-col sm:flex-row ml-8 my-4  gap-0 sm:gap-6">
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white"
                  >
                    www.clousec.io
                  </a>
               
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white "
                  >
                    www.clousec.in
                  </a>{" "}
                  <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white "
                  >
                    www.clousec.net
                  </a>
                </div>
              <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 justify-between px-2">
              <div>
                <div className="flex items-center text-center mt-2">
                  <IoMailSharp className="text-primary text-2xl mr-2 " />
                  <h1 className="text-1xl sm:text-2xl font-bold pt-0 ">Mail</h1>
                </div>
               
                <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white"
                  >
                                      sales@clousec.io

                  </a>
                </div>
                <div>
                <div className="flex items-center text-center mt-2">
                  <FaLinkedin className="text-primary text-2xl mr-2 " />
                  <h1 className="text-1xl sm:text-2xl font-bold pt-0 ">LinkedIn</h1>
                </div>
              
                <a
                    href="https://www.clousec.io"
                    className="text-[15px] text-white-600 tracking-wide leading-6  border-b border-white"
                  >
                                      https://www.linkedin.com/company/103767687

                  </a>
                </div>

              </div>
           
                
              </div>
              <div className="flex-1 p-0 sm:p-4  ">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
