import Brand1 from "../../assets/incubater1.png";
import Brand2 from "../../assets/incubater2.png";
// import Brand3 from "../../assets/brands/3.svg";
// import Brand4 from "../../assets/brands/4.svg";
// import Brand5 from "../../assets/brands/5.svg";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 pt-12 mt-0 sm:mt-0">
        <h1 className="text-center">ClouSec is backed and incubated by</h1>
        <div className="py-6 md:px-32 flex  flex-wrap items-center justify-center gap-7">
          <img src={Brand1} alt="" className="  w-40 "/>
          <img src={Brand2} alt="" className=" w-72 "/>
        
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
