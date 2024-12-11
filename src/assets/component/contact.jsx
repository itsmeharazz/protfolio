import { Element } from "react-scroll";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
function Contact() {
  return (
    <Element name='contact-section'>
      <div className='w-full bg-primary py-8'>
        <div className='container text-center'>
          <h2 className='font-medium text-3xl mb-2 text-tertiary'>
            Contact me
          </h2>
          <p className='mb-8 text-tertiary'>Get In Touch</p>
          <div className='flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-around items-center gap-10 mx-auto'>
            <div className='flex flex-col gap-y-5 items-center w-[100%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]'>
              <p className='font-bold text-2xl'>Talk TO Me</p>
              <div className='mail w-full flex flex-col gap-4 text-center rounded-lg border border-tertiary shadow-lg p-8 hover:bg-secondary text-tertiary'>
                <p>
                  <MdEmail className='mx-auto text-[2.5em]' />
                </p>
                <p className='font-semibold text-3xl'>Email</p>
                <p>itsmeharazz@gmail.com</p>
                <div className='flex items-center gap-4 mx-auto hover:gap-6 cursor-pointer'>
                  <p className='text-xl'>Click here </p>
                  <FaLongArrowAltRight />
                </div>
              </div>
              <div className='mail w-full flex flex-col gap-4 text-center rounded-lg border border-tertiary shadow-lg p-8 hover:bg-secondary text-tertiary'>
                <p>
                  <IoLogoWhatsapp className='mx-auto text-[2.5em]' />
                </p>
                <p className='font-semibold text-3xl'>Whatsapp</p>
                <div className='flex items-center gap-4 mx-auto hover:gap-6 cursor-pointer'>
                  <p className='text-xl'>Click here </p>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
            {/* Input items */}
            <div className='  w-[100%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%]  px-4 py-16 rounded-2xl shadow-sm shadow-tertiary'>
              <from className='w-full flex flex-col gap-8'>
                <input
                  type='text'
                  placeholder='Insert Your Name '
                  className='w-full h-[4em] rounded-xl border py-4 px-6 bg-primary text-tertiary focus:bg-secondary'
                />
                <input
                  type='email'
                  placeholder='Insert Your Email '
                  className='w-full h-[4em] rounded-xl border py-4 px-6 bg-primary text-tertiary focus:bg-secondary'
                />
                <textarea
                  name=''
                  id=''
                  placeholder='Insert Your project hear '
                  className='w-full h-[8em] rounded-xl border py-4 px-6 bg-primary text-tertiary focus:bg-secondary '></textarea>
                <button
                  type='submyt'
                  className='bg-tertiary text-secondary block py-3 w-50% lg:w-[30%] rounded-3xl hover:bg-secondary hover:text-tertiary hover:shadow transition-all'>
                  
                  Send Message
                </button>
              </from>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
