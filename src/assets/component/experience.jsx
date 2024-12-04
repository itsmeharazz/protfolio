import { IoLogoFigma } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
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
              className='flex  justify-around items-start rounded-2xl broder-2 broder-[#0B1536]  shadow-md shadow-[#0B1536] p-5 w-[21%] h-[5.5em] mb-8'
              key={skill}>
              <p>{ablities.skillimg}</p>
              <div className='scontent text-left'>
                <h2>{ablities.skillname}</h2>
                <p>{ablities.label} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;