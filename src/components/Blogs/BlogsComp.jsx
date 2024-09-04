import Img1 from "../../assets/blog/prob1.png";
import Img2 from "../../assets/blog/prob2.png";
import Img3 from "../../assets/blog/prob3.png";
import Img4 from "../../assets/blog/prob4.png";
import Img5 from "../../assets/blog/prob5.png";
import Img6 from "../../assets/blog/prob6.png";



import Slider from "react-slick";
import problemImg from "../../assets/probBg.png"
import { LuCheckCircle2 } from "react-icons/lu";
import workingGif from "../../assets/compliance.svg"
import Lottie from 'react-lottie';
import BlogCard from "./BlogCard";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "CLOUD CONFIGURATION ISSUES DURING MIGRATION",
    description:
      "A company is migrating its application data from a source instances to target instance. During the migration, permission issues arise due to misconfigured IAM roles and policies. In this the OPS team is dependent on the cloud team.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    title: "COMPLIANCE AND AUDIT PREPARATION",
    description:
      "An organization needs to prepare for a security audit but is struggling with scattered security logs and compliance documentation across multiple cloud accounts.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img3,
    title: "USER ACCESS MANAGEMENT",
    description:
      "An organization faces challenges in managing user access across multiple cloud accounts, leading to security risks and inefficiencies. Thus consuming 3-5 days to pull the data for periodic auditing of the users.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 4,
    image: Img4,
    title: "CONSOLIDATED SECURITY VISIBILITY",
    description:
      "The leadership team needs a comprehensive view of security across multiple AWS accounts to make informed decisions about security posture and resource allocation.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 5,
    image: Img5,
    title: "CONFIGURATION ISSUES AND TROUBLESHOOTING",
    description:
      "After implementing a new cloud configuration, the team encounters unexpected errors that disrupt application performance.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 6,
    image: Img6,
    title: "COST MANAGEMENT AND OPTIMIZATION",
    description:
      "A company notices unexpected spikes in its cloud expenditure but cannot identify the source of these costs or how to optimize them.",
    author: "Someone",
    date: "April 22, 2022",
  },
];


const checklistItems = [
  {
    title: "Scattered Security Insights Across Multiple AWS Services",
    // description:
      // "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Lack of Customizable Compliance Management Across Multiple Frameworks",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Manual Remediation for Cloud Configuration Issues",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Limited User Access Governance Across Multi-Account AWS Environments",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Inefficient Cost Management and Idle Resource Monitoring",
    // description:
      // "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Lack of Proactive Well-Architected Reviews and Service Monitoring",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Disjointed Security Insights for Leadership Teams",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Complex Ticketing Workflows for Security Exceptions",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];





const BlogsComp = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  return (
    <>
   <span id="problem"></span>
     <div className="pt-10 bg-gray-100 dark:bg-gray-900 dark:text-white" >
     <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Problem Statement
            </h1>
            <p
              data-aos="fade-up"
              className=" text-gray-600 dark:text-gray-400 text-sm  text-center sm:px-[40px]"
            >
              Many existing CSPM tools are SaaS-based, which means they access customer data, whereas ClouSec is a PaaS-based model that keeps customer data safe and secure within their vault. In SaaS-based approach, pricing based on resource count makes adoption difficult. Other challenges include...
            </p>
          </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={problemImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
        
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-1">
              <div className="text-[#5147AC] mx-1 h-10 w-10 p-2 justify-center items-center rounded-full">
                <LuCheckCircle2  />
              </div>
              <div>
                <h5 className="  text-[18px]">{item.title}</h5>
                {/* <p className="text-md text-neutral-500">{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
        {/* <h2 className="text-3xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2> */}
        
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
          <Slider {...settings}>

            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
            </Slider>
            

          </div>
          {/* <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
