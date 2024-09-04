import aniImg from "../../assets/aniImg.png";
import ani from "../../assets/g.gif";

import Content1 from "./content1/Content1";

import reactIcon from "../../assets/reactIcon.png";
import javaSdkIcon from "../../assets/javaSDK.png";
import springIcon from "../../assets/springBoot.png";
import pgIcon from "../../assets/pgSql.png";

const ReadMoreLess = () => {
  return (
   <>

<span id="projects"></span>
    <section className=" " id="features">
      <div className=" pt-10  bg-custom-bg bg-cover bg-center dark:bg-none">
        <div className="pb-0 sm:pb-12 text-center space-y-3">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
          >
            Tech Stack & Architecture
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            Globally actualize cost effective with resource maximizing
            leadership skills.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row ">
          <div className=" flex-1">
            <Content1 img={reactIcon} titel="FRONTEND" />
            <Content1 img={pgIcon} titel="DATABASE" />
          </div>
          <div className="w-full  flex items-center justify-center flex-1">
            <img src={ani} className="w-80 bg-black" alt="" />
          </div>
          
          <div className="w-full  flex-1">
            <Content1 img={springIcon} img1={javaSdkIcon} titel="BACKEND" />

 
          </div>
        </div>
      </div>
    </section>
   
   </>
  );
};

export default ReadMoreLess;
