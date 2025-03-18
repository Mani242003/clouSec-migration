
import img1 from "/AiIcons1.jpg"
import img2 from "/AiIcons2.jpg"
import img3 from "/AiIcons3.jpg"


const features = [
  {
    id: "feature-1",
    icon: img3,
    title: "Automated Remediation",
    content:
      "AI-driven fixes for security findings.",
  },
  {
    id: "feature-2",
    icon: img2,
    title: "Smart Assignments",
    content:
      "Automatically assign security findings to users/groups.",
  },
  {
    id: "feature-3",
    icon: img1,
    title: "Incident Reporting",
    content:
      "Leverage Generative AI for automated incident documentation.",
  },
];



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} bg-gray-100 w-full`}>  
    <div className='w-[64px] h-[64px] rounded-full flex justify-center items-center bg-white'>
      <img src={icon} alt='icon' className='w-[60%] h-[60%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-balck text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-gray-900 text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className='flex flex-col md:flex-row py-16  p-[50px]' >
      <div className='flex-1 flex flex-col justify-center items-start'>
        <h2 className=' font-semibold text-[40px] md:text-[48px] text-black_ leading-[66.8px] md:leading-[76.8px] w-full'>
        AI-Driven Automation in ClouSec
        </h2>
        <p className='font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        AI-driven automation is at the core of ClouSec, transforming how organizations manage cloud security, compliance, and cost efficiency. By leveraging artificial intelligence, ClouSec eliminates manual intervention, reduces response times, and enhances decision-making, enabling businesses to maintain a robust cloud security posture with minimal operational overhead.
        </p>
        {/* <Button styles='mt-10' /> */}
      </div>
      <div className='flex-1 flex flex-col justify-center items-center md:ml-10 mt-10 md:mt-0'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
