// import AddSocal from "./socal";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import coverimg from "../image/8308.jpg";
function Hero() {
  return (
    // <Element name ="hero-section">
    <div className='w-full bg-[#E9DED3] h-[100vh]'>
      <div className='container flex justify-between items-center mx-auto pt-10 gap-20'>
        <div className='flex-col gap-10 text-[#0B1536] mr-10'>
          <FaFacebookF className='hover:text-[#344ea4] text-5xl mb-4 cursor-pointer' />
          <FaInstagram className='hover:text-[#344ea4] text-5xl mb-4 cursor-pointer' />
          <FaLinkedinIn className='hover:text-[#344ea4] text-5xl cursor-pointer' />
        </div>
        <div className='text-[#0b1536]'>
          <h2 className='text-4xl mb-5'>
            <span className='text-2xl'>Hello I’m</span> Meharazul Islam
          </h2>
          <h1 className='text-5xl'>Web design & custom web developer</h1>
        </div>
        <img src={coverimg} alt={coverimg} className='w-[29em] aspect-auto' />
      </div>
    </div>
    // </Element>
  );
}

export default Hero;
