import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import C_S_Data from "../assets/C_S_Data";

const C_S_Component = () => {
  return (
    <section>
      <div className="container mx-auto px-4 pt-[2rem] overflow-hidden">
        <div
          data-aos="zoom-out"
          data-aos-duration="500"
          className="text-center py-12 relative group"
        >
          <h2 className="text-[35px] font-bold mt-6 tracking-wide inline-block relative pb-2">
            Explore our Insights &
            <span className="ml-2 text-primary">Case Studies</span>
            {/* Animated Border */}
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-primary transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>
        <C_S_List />
      </div>
    </section>
  );
};

const C_S_List = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap">
      {C_S_Data.slice(0, 3).map((item) => (
        <C_S_Item item={item} key={item.id} />
      ))}
    </div>
  );
};

const C_S_Item = ({ item }) => {
  const { title,  imgUrl, challenges1 } = item;

  return (
    <div data-aos="zoom-in" className="lg:w-1/3 md:w-1/2 sm:w-1/2 p-4 mb-5">
      <div className="border border-gray-200 rounded overflow-hidden">
        <img
          loading="lazy"
          role="presentation"
          src={imgUrl}
          srcSet={`${imgUrl}?w=500&h=500&fit=crop 500w, ${imgUrl}?w=1000&h=1000&fit=crop 1000w`}
          sizes="(max-width: 600px) 500px, 1000px"
          className="w-full"
          alt="Description of the image"
        />
        <div className="p-4">
          <Link
            to={`/blogs/${title}`}
            className="text-blue-900 text-lg font-semibold hover:text-black transition duration-300"
          >
            {title}
          </Link>
          <p className="text-gray-600 mt-3">
            {challenges1.length > 100 ? challenges1.substr(0, 120) : challenges1}
          </p>
          <Link
            to={`/blogs/${title}`}
            className="text-blue-900 font-semibold text-base mt-2 inline-block hover:text-black"
          >
            Read More
          </Link>
          <div className="border-t border-gray-200 pt-3 mt-3 flex items-center justify-between">
            <span className="text-titleBlue font-semibold flex items-center">
              ClouSec Technologies Pvt Ltd
            </span>
            <div className="flex items-center gap-3 text-gray-600">
              <span className="flex items-center gap-1">
                {/* <i className="ri-calendar-line text-desGray"></i> {date} */}
              </span>
              <span className="flex items-center gap-1">
                {/* <i className="ri-time-line text-desGray"></i> {time} */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
C_S_Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    challenges: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
  }).isRequired,
};

export default C_S_Component;
