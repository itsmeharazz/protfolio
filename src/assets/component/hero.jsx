// import AddSocal from "./socal";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Element } from "react-scroll";
import coverimg from "../image/8308.jpg";
function Hero() {
  return (
    <Element name='hero-section'>
      <div className='w-full bg-[#E9DED3] h-[100%] dark:bg-tertiary dark:text-secondary'>
        <div className='container flex flex-col-reverse mx-auto md:flex-col-reverse lg:flex lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between lg:items-center pt-10 gap-20'>
          <div className='flex sm:flex md:flex lg:flex-col xl:flex-col 2xl:flex-col gap-10 text-[#0B1536] mr-10 dark:text-secondary'>
            <a href='https://www.facebook.com/itsmeharazz' target='blank'>
              <FaFacebookF className='hover:text-[#344ea4] dark:hover:text-quaternary text-5xl mb-4 cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/itsmeharazz/' target='blank'>
              <FaInstagram className='hover:text-[#344ea4] dark:hover:text-quaternary text-5xl mb-4 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/itsmeharazz/' target='blank'>
              <FaLinkedinIn className='hover:text-[#344ea4] dark:hover:text-quaternary text-5xl cursor-pointer' />
            </a>
          </div>
          <div className='text-[#0b1536] dark:text-secondary'>
            <h2 className='text-4xl mb-5'>
              <span className='text-[0.9em] md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl'>
                Hello I’m
              </span>{" "}
              Meharazul Islam
            </h2>
            <h1 className='text-5xl'>Web design & custom web developer</h1>
          </div>
          <img
            src={coverimg}
            alt={coverimg}
            className='w-[29em] aspect-auto removebg'
          />
        </div>
      </div>
    </Element>
  );
}

export default Hero;






