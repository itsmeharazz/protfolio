import { IoLogoFigma } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { Element } from "react-scroll";
function Experience() {
  const skills = [
    {
      skillimg: IoLogoFigma,
      skillname: "Figma",
      label: "Intermedet",
    },
    {
      skillimg: TiHtml5,
      skillname: "HTML",
      label: "Intermedet",
    },
    {
      skillimg: FaCss3,
      skillname: "CSS",
      label: "Intermedet",
    },
    {
      skillimg: FaBootstrap,
      skillname: "Booststrap",
      label: "Intermedet",
    },
    {
      skillimg: RiTailwindCssFill,
      skillname: "TailwindCss",
      label: "Intermedet",
    },
    {
      skillimg: FaJsSquare,
      skillname: "Javascript",
      label: "Intermedet",
    },
    {
      skillimg: FaReact,
      skillname: "ReactJs",
      label: "Intermedet",
    },
    {
      skillimg: FaLaravel,
      skillname: "Laravel",
      label: "Fameliyer",
    },
  ];
  return (
    <Element name='skill-section'>
      <div className='w-full bg-[#E9DED3] py-28'>
        <div className='container text-center mx-auto text-[#0B1536]'>
          <h2 className='font-medium text-3xl mb-2'>My Experience</h2>
          <p className='mb-8'>My Ablities</p>
          <h2 className='font-medium text-2xl mb-3'>
            I Develop Skills Regularly to Keep Me Update{" "}
          </h2>
          <p>
            Most common methods for developing website that work well on desktop
            is responsive adaptive design
          </p>
          <div className='lg:flex justify-between items-center mx-auto mt-12 skills'>
            {skills.map((ablities, skill) => (
              <div
                className='flex justify-around items-start rounded-2xl border-2 border-[#0b153643]  shadow-md shadow-[#0b153664] p-5 w-[20.5%] h-[5.5em] mb-8 hover:bg-[#E9E9E9] transition-all'
                key={skill}>
                <p className='text-4xl text-tertiary'>
                  <ablities.skillimg />
                </p>
                <div className=' text-left text-tertiary'>
                  <h2 className="text-tertiary font-semibold text-xl">{ablities.skillname}</h2>
                  <p>{ablities.label} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Experience;
