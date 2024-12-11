import { Element } from "react-scroll";
import { FaLaptopCode } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Services() {
    const service = [
      {
        icon: FaLaptopCode,
        titel: "Front-End Development",
        des: "Offering custom front-end development services, I bring your design vision to life with clean, optimized code using HTML, CSS, JavaScript, and React.",
      },
      {
        icon: FaMobileScreenButton,
        titel: "Responsive Web Design",
        des: "I specialize in creating responsive websites that adapt seamlessly to any device, ensuring a smooth user experience across desktops, tablets, and smartphones",
      },
      {
        icon: FaShoppingCart,
        titel: "E-Commerce web development",
        des: "Powerful eCommerce websites that drive sales and boost customer engagement through expert web development.",
      },
      {
        icon: FaSearch,
        titel: " SEO friendly web development ",
        des: "Drive online growth with our SEO focused web development solutions for enhanced visibility and increased organic traffic.",
      },
    ];
  return (
    <div className='w-full py-8  bg-[#E9DED3]'>
      <Element name='services-section'>
        <div className='container mx-auto text-center'>
          <h2 className='font-medium text-3xl mb-2'>What I Offer</h2>
          <p className='mb-8'>My Services </p>
          <div className='flex flex-wrap justify-between items-center  my-8'>
            {service.map((offer, services) => (
              <div
                className='card w-[100%] mx-auto md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]  rounded-2xl p-4 border-2 border-[#0b153637] hover:bg-[#E9E9E9] mb-7 '
                key={services}>
                <p className='text-center text-3xl my-3'>
                  <offer.icon />
                </p>
                <h2 className='text-left text-md  lg:text-xl xl:text-xl 2xl:text-xl my-2 font-semibold'>
                  {offer.titel}
                </h2>
                <p className='text-left text-tertiary'>{offer.des}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Services