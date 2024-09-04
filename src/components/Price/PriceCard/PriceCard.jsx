

import { useState, useEffect } from "react";
import { FaDollarSign } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const PriceCard = ({ plan, subPlan, amout, style, id, prediod, features }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  useEffect(() => {
    console.log(isShowMore);
  }, [isShowMore]);

  return (
    <div
  
      className={`w-full sm:w-[23rem] min-h-[41rem]  bg-white flex flex-col items-start justify-center dark:bg-gray-800 text-start  py-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.05)] ${
        id
          ? ""
          : "border-t-[10px] border-[#5147AC] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]"
      }`}
    >
      <h1 className="  w-4/4 text-2xl font-semibold p-8 pt-2">{subPlan}</h1>

      <div className="w-full pb-2 flex flex-col  mt-4 mb-6  p-8 pt-0 ">
        <div className="flex items-center text-center">
          {" "}
          <FaDollarSign
            className=" text-black dark:text-white mt-2 text-[30px]"
            style={{}}
          />
          <span className="  w-4/4 text-4xl font-bold">{amout}</span>
        </div>

        <span className=" text-1xl font-semibold "> &nbsp; / {prediod}</span>
      </div>

      {features.map((feature) => (
        <>
          {feature.id > 6 ? (
            <>
              {isShowMore ? (
                <div
                  key={feature.id}
                  className="w-full  flex items-start gap-2 text-align-start p-1 border-t-[1px] border-b-[1px] pl-3 border-gray"
                >
                  <div>
                    {/* <FaRegDotCircle className="te"/> */} {feature.id}){" "}
                  </div>
                  <span>{feature.name}</span>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <div
                key={feature.id}
                className="w-full  flex items-start gap-2 text-align-start p-1 border-t-[1px] border-b-[1px] pl-3 border-gray"
              >
                <div>
                  {/* <FaRegDotCircle className="te"/> */} {feature.id}){" "}
                </div>
                <span>{feature.name}</span>
              </div>
            </>
          )}
        </>
      ))}
      <div className="w-full flex items-center justify-end pr-10 pt-5">
        <button onClick={toggleReadMoreLess}>
          {isShowMore ? (
            <span className="border-b-[1px] border-black dark:border-white flex items-center text-center justify-center text-1xl ">
              Read Less
              <IoIosArrowUp />
            </span>
          ) : (
            <span className=" border-b-[1px] border-black dark:border-white flex items-center text-center justify-center text-1xl ">
              Read More
              <IoIosArrowDown />
            </span>
          )}
        </button>
      </div>

      <div className="w-full mt-6 pb-4 flex items-center justify-center">
        <a href="">
          <button
            className={`outline-none  border border-[#5147AC] border-[1px] border-[#5147AC] px-[20px] py-[10px] rounded  cursor-pointer  hover:opacity-90 ${
              id ? "" : " text-[white] bg-[#5147AC]"
            }`}
          >
            Purchase Now!
          </button>
        </a>
      </div>
    </div>
  );
};

export default PriceCard;
